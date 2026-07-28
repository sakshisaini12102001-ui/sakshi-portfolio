import './globals.css';

export const metadata = {
  title: 'Sakshi Saini — WordPress & Front-End Developer',
  description:
    'WordPress & Front-End Developer based in Jaipur. 3+ years delivering LMS platforms, WooCommerce stores, and Shopify builds for agencies and direct clients.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
