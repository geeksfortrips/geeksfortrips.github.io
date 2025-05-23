import './globals.css';
import 'keen-slider/keen-slider.min.css';

export const metadata = {
  title: 'GeeksforTrips',
  description: 'Travel Page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
