import { prismaClient } from '@/lib/prisma'
import Link from 'next/link'
import CustomLink from './customLink'

const Nav = async () => {
	const categories = await prismaClient.category.findMany({})
	return (
		<nav>
			<ul className="flex gap-3">
				<li>
					<Link href="/">Home</Link>
				</li>
				{categories.map((category) => (
					<li key={category.id}>
						<CustomLink href={category.slug} name={category.name}>
							{category.name}
						</CustomLink>
					</li>
				))}
			</ul>
		</nav>
	)
}

export default Nav
