import './globals.css'
import type { Metadata } from 'next'
import { NavProvider } from '#/context/nav.context'
export const metadata: Metadata = {
    title: 'Sreerag M',
    description: "Sreerag's Personal Website",
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
