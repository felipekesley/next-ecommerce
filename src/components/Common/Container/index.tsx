import { ChildrenProps } from '@/types/Common'

const Container = ({ children }: ChildrenProps) => {
	return <div className="container mx-auto">{children}</div>
}

export default Container
