import type { Metadata } from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
	title: 'Social Media App',
	description: 'Developed By M.Rad',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body>
				{children}
			</body>
		</html>
	)
}
