export const metadata = { title: 'Contact' } as const;

export default function ContactPage() {
  return (
    <main className="container mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-semibold">Contact</h1>
      <p className="mt-4 max-w-prose text-muted-foreground">Email us at hello@example.com.</p>
    </main>
  );
}
