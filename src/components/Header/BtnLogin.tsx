import { signIn } from 'next-auth/react'
import { Button } from '../ui/button'
import { LogIn } from 'lucide-react'
import { StatusAuthProps } from '@/types/Common'

const BtnLogin = ({ status }: StatusAuthProps) => {
	const handleLogin = async () => {
		await signIn()
	}
	return (
		<>
			{status === 'unauthenticated' && (
				<Button onClick={handleLogin}>
					<LogIn className="mr-2 h-4 w-4" />
					Login
				</Button>
			)}
		</>
	)
}

export default BtnLogin
