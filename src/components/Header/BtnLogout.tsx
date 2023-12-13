import { signOut } from 'next-auth/react'
import { Button } from '../ui/button'
import { LogOut } from 'lucide-react'
import { StatusAuthProps } from '@/types/Common'

const BtnLogout = ({ status }: StatusAuthProps) => {
	const handleLogout = async () => {
		await signOut()
	}
	return (
		<>
			{status === 'authenticated' && (
				<Button onClick={handleLogout}>
					Logout <LogOut className="ml-2 h-4 w-4" />
				</Button>
			)}
		</>
	)
}

export default BtnLogout
