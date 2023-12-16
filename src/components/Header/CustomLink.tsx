'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

type CustomLinkProps = {
	href: string
	children: React.ReactNode
	name: string
}

const CustomLink = ({ href, children, name }: CustomLinkProps) => {
	const pathname = usePathname()

	const isActive = href === '/' ? pathname === '/' : pathname.startsWith(href)

	return (
		<Link
			href={href}
			aria-label={name}
			className={`${
				isActive ? 'text-violet-500' : 'text-zinc-400'
			}   hover:text-violet-500 transition duration-500`}
		>
			{children}
		</Link>
	)
}

export default CustomLink
