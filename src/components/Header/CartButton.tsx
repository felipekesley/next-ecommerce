import { cartAtom } from '@/atoms/cartAtom'
import { useAtom } from 'jotai'
import { ShoppingCart } from 'lucide-react'

const CartButton = () => {
	const [cartQuantity] = useAtom(cartAtom)
	return (
		<button
			type="button"
			className="relative flex items-center justify-center"
		>
			<ShoppingCart className="h-8 w-8 text-slate-900" />
			<span className="absolute w-5 h-5 flex items-center justify-center top-[-12px] right-[-12px] rounded-full bg-slate-500 text-white text-xs">
				{cartQuantity.quantity}
			</span>
		</button>
	)
}

export default CartButton
