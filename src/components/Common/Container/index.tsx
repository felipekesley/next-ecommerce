import { ChildrenProps } from '@/types/Common'

const ContainerSite = ({ children }: ChildrenProps) => {
	return <div className="container mx-auto">{children}</div>
}

export default ContainerSite
