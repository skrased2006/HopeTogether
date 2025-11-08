import './globals.css'

export const metadata = {
  title: 'Cancer Awareness & Support',
  description: 'Join our community to raise awareness, provide support, and fund research for a cancer-free future.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
