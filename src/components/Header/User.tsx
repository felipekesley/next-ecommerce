import { StatusAuthProps } from '@/types/Common'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Session } from 'next-auth'

type DataProps = {
	data: Session | null
}
type UserProps = DataProps & StatusAuthProps

const User = ({ data, status }: UserProps) => {
	return (
		<>
			{status === 'authenticated' && (
				<div className="flex items-center gap-4">
					{data?.user?.image && data?.user?.name && (
						<Avatar>
							<AvatarImage
								src={data.user?.image}
								alt={data?.user?.name}
							/>
							<AvatarFallback>{data?.user?.name}</AvatarFallback>
						</Avatar>
					)}
					<p>{data?.user?.name}</p>
				</div>
			)}
		</>
	)
}

export default User
