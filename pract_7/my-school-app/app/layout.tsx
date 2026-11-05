import Link from 'next/link';

export const metadata = {
  title: 'Навчальний заклад',
  description: 'Офіційний сайт коледжу',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <body>
        <header style={{ padding: '20px', background: '#f0f4f8', borderBottom: '1px solid #ddd' }}>
          <h1>Коледж Сучасних Технологій</h1>
          <nav style={{ marginTop: '10px', display: 'flex', gap: '15px' }}>
            <Link href="/" style={{ textDecoration: 'none', color: '#0070f3' }}>Головна</Link>
            <Link href="/specialties" style={{ textDecoration: 'none', color: '#0070f3' }}>Спеціальності</Link>
            <Link href="/contacts" style={{ textDecoration: 'none', color: '#0070f3' }}>Контакти</Link>
          </nav>
        </header>

        <main style={{ padding: '30px', minHeight: '60vh' }}>
          {children}
        </main>

        <footer style={{ padding: '20px', background: '#333', color: '#fff', textAlign: 'center' }}>
          <p>© 2026 Навчальний заклад. Усі права захищено.</p>
        </footer>
      </body>
    </html>
  );
}