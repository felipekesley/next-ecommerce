import { signIn } from 'next-auth/react'
import { Button } from '../ui/button'
import { Loader2, LogIn } from 'lucide-react'
import { StatusAuthProps } from '@/types/Common'

const BtnLogin = ({ status }: StatusAuthProps) => {
	const handleLogin = async () => {
		await signIn()
	}
	return (
		<>
			{status === 'loading' && (
				<Button disabled>
					<Loader2 className="mr-2 h-4 w-4 animate-spin" />
					Loading
				</Button>
			)}
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
