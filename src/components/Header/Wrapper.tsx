'use client'

import { useSession } from 'next-auth/react'
import User from './User'
import BtnLoading from './BtnLoading'
import BtnLogin from './BtnLogin'
import BtnLogout from './BtnLogout'
import { Separator } from '../ui/separator'
import CartButton from './CartButton'

const Wrapper = () => {
	const { data, status } = useSession()
	return (
		<div className="flex items-center gap-6 h-full">
			<User data={data} status={status} />
			<BtnLoading status={status} />
			<BtnLogin status={status} />
			<BtnLogout status={status} />
			<Separator orientation="vertical" />
			<CartButton />
		</div>
	)
}

export default Wrapper
