export const metadata = { title: 'About' } as const;

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-semibold">About</h1>
      <p className="mt-4 max-w-prose text-muted-foreground">
        We are a small studio crafting accessible, high-performance products.
      </p>
    </main>
  );
}
