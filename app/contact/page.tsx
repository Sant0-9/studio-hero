import { ContactForm } from "./ContactForm";

export const metadata = { title: "Contact" } as const;

export default function ContactPage() {
  return (
    <main className="container mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-semibold">Contact</h1>
      <p className="mt-4 max-w-prose text-gray-600">We’d love to hear from you. Send us a note below.</p>

      <div className="mt-8 grid gap-8 md:grid-cols-[1fr_320px]">
        <section aria-labelledby="contact-form-title">
          <h2 id="contact-form-title" className="sr-only">Contact form</h2>
          <ContactForm />
        </section>

        <aside className="order-first md:order-last">
          <div className="rounded-lg border bg-card p-4">
            <p className="text-sm text-gray-600">We’ll reply within 1-2 business days.</p>
          </div>
        </aside>
      </div>
    </main>
  );
}
