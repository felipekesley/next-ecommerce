'use client'

import { useSession } from 'next-auth/react'
import { Separator } from '@/components/ui/separator'
import ContainerSite from '@/components/Common/Container'
import Logo from './Logo'
import Nav from './Nav'
import BtnLogin from './BtnLogin'
import BtnLogout from './BtnLogout'
import User from './User'

const Header = () => {
	const { data, status } = useSession()

	return (
		<header className="py-4">
			<ContainerSite>
				<div className="w-ful flex justify-between">
					<Logo />

					<div className="flex items-center gap-6">
						<Nav />
						<Separator orientation="vertical" />
						<div className="flex items-center gap-4">
							<User data={data} status={status} />
							<BtnLogin status={status} />
							<BtnLogout status={status} />
						</div>
					</div>
				</div>
			</ContainerSite>
		</header>
	)
}

export default Header