import type { Metadata } from 'next'
import '../styles/globals.css'
import { LeftBar, RightBar } from '@/components'

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
				<div className="max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl. xxl:max-w-screen-xxl mx-auto flex justify-between">
					<aside className="px-2 xsm:px-4 xxl:px-8">
						<LeftBar />
					</aside>
					<main className="flex-1 lg:min-w-[600px] border-x-[1px] border-borderGray">
						{children}
					</main>
					<aside className="hidden lg:flex ml-4 md:ml-8 flex-1">
						<RightBar />
					</aside>
				</div>
			</body>
		</html>
	)
}
