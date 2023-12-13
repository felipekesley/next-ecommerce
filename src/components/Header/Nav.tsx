import Link from 'next/link'

const Nav = () => {
	return (
		<nav>
			<ul className="flex gap-3">
				<li>
					<Link href="/">Home</Link>
				</li>
				<li>
					<Link href="/products">Products</Link>
				</li>
			</ul>
		</nav>
	)
}

export default Nav
