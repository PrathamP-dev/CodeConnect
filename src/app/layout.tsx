import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: 'CodeConnect | Connect, Code, Conquer',
  description: 'The peer learning and coding activity platform for developers.',
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 512 512%22><rect width=%22512%22 height=%22350%22 y=%2281%22 rx=%2280%22 fill=%22black%22 /><text x=%22256%22 y=%22275%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22 fill=%22white%22 font-size=%22220%22 font-weight=%22800%22 font-family=%22system-ui, sans-serif%22>CC</text></svg>',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
