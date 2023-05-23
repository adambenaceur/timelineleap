import NavBar from './components/Navbar'
import './globals.css'
import { Nunito } from 'next/font/google'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'timelineleap',
  description: 'timelineleap.com',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <NavBar/>
        {children}
      </body>
    </html>
  )
}
