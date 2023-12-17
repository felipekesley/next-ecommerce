import { Separator } from '@/components/ui/separator'
import ContainerSite from '@/components/Common/Container'
import Logo from './Logo'
import Nav from './Nav'
import Wrapper from './Wrapper'
import CartSheet from '../CartSheet'

const Header = () => {
	return (
		<header className="py-4">
			<ContainerSite>
				<div className="w-ful flex justify-between items-center">
					<Logo />

					<div className="flex items-center gap-6">
						<Separator orientation="vertical" />
						<Wrapper />
					</div>
				</div>
				<Separator orientation="horizontal" className="my-4" />
				<div className="w-ful flex justify-between items-center">
					<Nav />
					<CartSheet />
				</div>
			</ContainerSite>
		</header>
	)
}

export default Header
