import Header from '@/components/common/Header/Header';
import BottomNavigation from '@/components/common/BottomNavigation/BottomNavigation';
import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <div className="app">
          <Header />

          <main>{children}</main>

          <BottomNavigation />
        </div>
      </body>
    </html>
  );
}