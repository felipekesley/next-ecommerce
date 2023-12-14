import { Separator } from '@/components/ui/separator'
import ContainerSite from '@/components/Common/Container'
import Logo from './Logo'
import Nav from './Nav'
import Wrapper from './Wrapper'

const Header = () => {
	return (
		<header className="py-4">
			<ContainerSite>
				<div className="w-ful flex justify-between">
					<Logo />

					<div className="flex items-center gap-6">
						<Nav />
						<Separator orientation="vertical" />
						<Wrapper />
					</div>
				</div>
			</ContainerSite>
		</header>
	)
}

export default Header
