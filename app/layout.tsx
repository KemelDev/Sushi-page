import './globals.css'
import type { Metadata } from 'next'
import { Playfair_Display } from 'next/font/google'

const FontPlayfair = Playfair_Display({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Sushi-man',
    description: 'Sushi man created next app ',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={FontPlayfair.className}>{children}</body>
        </html>
    )
}
