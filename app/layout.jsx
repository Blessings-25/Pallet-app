import './globals.css';

export const metadata = {
  title: 'Pallet Profit Calculator',
  description: 'Calculate your max pallet bid and profit margins',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
