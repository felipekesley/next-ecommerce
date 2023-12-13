import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import AuthProvider from '@/providers/auth'
import Header from '@/components/Header'
import JotaiProvider from '@/providers/jotaiProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app'
}

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="pt-br">
			<body className={inter.className}>
				<AuthProvider>
					<JotaiProvider>
						<Header />
						{children}
					</JotaiProvider>
				</AuthProvider>
			</body>
		</html>
	)
}
