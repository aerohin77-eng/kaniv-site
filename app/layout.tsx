export const metadata = {
  title: "Центр краси та здоров'я · Канів",
  description: "Косметика, аналізи, косметологія та масаж. Онлайн-замовлення косметики та запис на прийом.",
};

import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk">
      <body>{children}</body>
    </html>
  );
}
