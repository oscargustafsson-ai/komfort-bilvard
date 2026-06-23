import Hero from "@/components/marketing/Hero";
import Tjanster from "@/components/marketing/Tjanster";
import OmOss from "@/components/marketing/OmOss";
import { JsonLd, localBusinessSchema } from "@/components/marketing/JsonLd";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <JsonLd data={localBusinessSchema()} />
      <Hero />
      <Tjanster />
      <OmOss />
    </main>
  );
}
