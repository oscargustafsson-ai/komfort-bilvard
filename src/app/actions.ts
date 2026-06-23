"use server";

import { Resend } from "resend";

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
  process.env.CONTACT_FROM_EMAIL ?? "KOM-FORT Bilvård <onboarding@resend.dev>";

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
