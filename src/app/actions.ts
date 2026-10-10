"use server";

import { Resend } from "resend";
import { giftCardLimits } from "@/lib/site";

export type ContactState = {
  success: boolean;
  error: string | null;
} | null;

const IS_PROD = process.env.NODE_ENV === "production";
const GENERIC_ERROR =
  "Något gick fel. Ring oss gärna direkt på 076-194 35 19.";

// Mottagaradress styrs via env men har en rimlig default.
const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? "Komfort802@gmail.com";
// Avsändare: i produktion krävs en egen verifierad domän (CONTACT_FROM_EMAIL).
// Resends testdomän används bara som bekvämlighet i utveckling.
const FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL ?? "KOM-fort Bilvård <onboarding@resend.dev>";

export async function submitContact(
  _prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const name = (formData.get("name") as string)?.trim();
  const phone = (formData.get("phone") as string)?.trim();
  const service = (formData.get("service") as string)?.trim();
  const message = (formData.get("message") as string)?.trim();

  if (!name || !phone) {
    return { success: false, error: "Fyll i namn och telefonnummer." };
  }

  const apiKey = process.env.RESEND_API_KEY;

  // Saknad konfiguration. I produktion får vi ALDRIG låtsas att det lyckades —
  // då tappar vi kunden tyst. I utveckling loggar vi och returnerar success.
  const missingConfig =
    !apiKey || (IS_PROD && !process.env.CONTACT_FROM_EMAIL);
  if (missingConfig) {
    if (IS_PROD) {
      console.error(
        "[kontakt] Mejl ej konfigurerat i produktion (RESEND_API_KEY och/eller CONTACT_FROM_EMAIL saknas)."
      );
      return { success: false, error: GENERIC_ERROR };
    }
    console.warn(
      "[kontakt] Mejl ej konfigurerat (dev) — förfrågan loggas men skickas inte:",
      { name, phone, service, message }
    );
    return { success: true, error: null };
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      subject: `Ny förfrågan från ${name}`,
      text: [
        `Namn: ${name}`,
        `Telefon: ${phone}`,
        `Tjänst: ${service || "—"}`,
        "",
        "Meddelande:",
        message || "—",
      ].join("\n"),
    });

    if (error) {
      console.error("[kontakt] Resend-fel:", error);
      return { success: false, error: GENERIC_ERROR };
    }

    return { success: true, error: null };
  } catch (err) {
    console.error("[kontakt] Oväntat fel vid mejlutskick:", err);
    return {
      success: false,
      error: "Något gick fel. Ring oss gärna direkt på 076-194 35 19.",
    };
  }
}

export type GiftCardState = {
  success: boolean;
  error: string | null;
} | null;

/**
 * Beställning av presentkort.
 *
 * Så länge Zettle-betallänken saknas är detta hela flödet: kunden fyller i
 * belopp och mottagare, Göran får ett mejl och skapar presentkortet i Zettle.
 * Vi tar aldrig emot betalning här — det sker i Zettle.
 */
export async function submitGiftCard(
  _prevState: GiftCardState,
  formData: FormData
): Promise<GiftCardState> {
  const amountRaw = (formData.get("amount") as string)?.trim();
  const buyerName = (formData.get("buyerName") as string)?.trim();
  const buyerEmail = (formData.get("buyerEmail") as string)?.trim();
  const buyerPhone = (formData.get("buyerPhone") as string)?.trim();
  const recipient = (formData.get("recipient") as string)?.trim();
  const greeting = (formData.get("greeting") as string)?.trim();

  const amount = Number(amountRaw);
  if (!Number.isFinite(amount) || !Number.isInteger(amount) || amount < giftCardLimits.min || amount > giftCardLimits.max) {
    return {
      success: false,
      error: `Välj ett belopp mellan ${giftCardLimits.min} och ${giftCardLimits.max} kr.`,
    };
  }

  if (!buyerName || !buyerEmail) {
    return { success: false, error: "Fyll i ditt namn och din e-postadress." };
  }

  // Enkel sanity-check: vi litar inte på type="email" i webbläsaren ensamt,
  // eftersom mejladressen är enda sättet att nå kunden om något blir fel.
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(buyerEmail)) {
    return { success: false, error: "Kontrollera att e-postadressen är korrekt." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const missingConfig = !apiKey || (IS_PROD && !process.env.CONTACT_FROM_EMAIL);
  if (missingConfig) {
    if (IS_PROD) {
      console.error(
        "[presentkort] Mejl ej konfigurerat i produktion — beställningen kunde inte skickas."
      );
      return { success: false, error: GENERIC_ERROR };
    }
    console.warn("[presentkort] Mejl ej konfigurerat (dev) — beställning loggas men skickas inte:", {
      amount,
      buyerName,
      buyerEmail,
      buyerPhone,
      recipient,
      greeting,
    });
    return { success: true, error: null };
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: buyerEmail,
      subject: `Presentkort ${amount} kr – beställning från ${buyerName}`,
      text: [
        `BELOPP: ${amount} kr`,
        "",
        `Köpare: ${buyerName}`,
        `E-post: ${buyerEmail}`,
        `Telefon: ${buyerPhone || "—"}`,
        `Presentkortet skickas till: ${recipient || buyerEmail}`,
        "",
        "Hälsning:",
        greeting || "—",
        "",
        "— Skapa presentkortet i Zettle och skicka det till adressen ovan.",
      ].join("\n"),
    });

    if (error) {
      console.error("[presentkort] Resend-fel:", error);
      return { success: false, error: GENERIC_ERROR };
    }

    return { success: true, error: null };
  } catch (err) {
    console.error("[presentkort] Oväntat fel vid mejlutskick:", err);
    return { success: false, error: GENERIC_ERROR };
  }
}
