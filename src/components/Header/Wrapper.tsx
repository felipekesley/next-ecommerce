'use client'

import { useSession } from 'next-auth/react'
import User from './User'
import BtnLoading from './BtnLoading'
import BtnLogin from './BtnLogin'
import BtnLogout from './BtnLogout'

const Wrapper = () => {
	const { data, status } = useSession()
	return (
		<div className="flex items-center gap-6 h-full">
			<User data={data} status={status} />
			<BtnLoading status={status} />
			<BtnLogin status={status} />
			<BtnLogout status={status} />
		</div>
	)
}

export default Wrapper
