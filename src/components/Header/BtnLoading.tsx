import { Button } from '../ui/button'
import { Loader2 } from 'lucide-react'
import { StatusAuthProps } from '@/types/Common'

const BtnLoading = ({ status }: StatusAuthProps) => {
	return (
		<>
			{status === 'loading' && (
				<Button disabled>
					<Loader2 className="h-4 w-4 mr-2 animate-spin" />
					Loading
				</Button>
			)}
		</>
	)
}

export default BtnLoading
