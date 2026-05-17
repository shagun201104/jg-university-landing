import "./globals.css";

export const metadata = {
  title: "JG University | Future Ready Learning",
  description:
    "A modern landing page redesign for JG University, Ahmedabad, built with Next.js and Tailwind CSS."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
