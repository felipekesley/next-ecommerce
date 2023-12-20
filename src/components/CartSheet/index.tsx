'use client'

import { Button } from '@/components/ui/button'
import {
	Sheet,
	SheetContent,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger
} from '@/components/ui/sheet'
import { cartAtom, cartQuantityAtom } from '@/atoms/cartAtom'
import { useAtom } from 'jotai'

import { Separator } from '@/components/ui/separator'
import { ShoppingCart } from 'lucide-react'
import { createCheckout } from '@/actions/checkout'
import { loadStripe } from '@stripe/stripe-js'
import ProductCartSheetCard from '@/components/ProductCartSheetCard'
import { TypographyLarge } from '@/components/ui/typographyLarge'
import { useCart } from '@/hooks/useCart'

const CartSheet = () => {
	const { totalPrice } = useCart()
	const [products] = useAtom(cartAtom)
	const [cartQuantity] = useAtom(cartQuantityAtom)

	const handleCheckout = async () => {
		const checkout = await createCheckout(products)

		const stripe = await loadStripe(
			process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY
		)

		stripe?.redirectToCheckout({
			sessionId: checkout.id
		})
	}

	return (
		<Sheet>
			<div className="flex items-center gap-5">
				<p>
					Total Cart:{' '}
					<span className="font-semibold">R$ {totalPrice}</span>
				</p>
				<SheetTrigger asChild>
					<Button
						variant="ghost"
						className="relative flex items-center justify-center"
					>
						<ShoppingCart className="h-8 w-8 text-slate-900" />
						<span className="absolute w-5 h-5 flex items-center justify-center top-[-12px] right-[-12px] rounded-full bg-slate-500 text-white text-xs">
							{cartQuantity}
						</span>
					</Button>
				</SheetTrigger>
			</div>
			<SheetContent className="overflow-y-scroll">
				<SheetHeader>
					<SheetTitle>My Cart</SheetTitle>
				</SheetHeader>
				<Separator orientation="horizontal" className="my-4" />
				<div className="flex flex-col gap-4 py-4">
					{products.map((product) => (
						<ProductCartSheetCard
							key={product.id}
							product={product}
						/>
					))}
				</div>
				<SheetFooter>
					{cartQuantity === 0 && (
						<TypographyLarge>
							Your shopping cart is empty
						</TypographyLarge>
					)}
					{cartQuantity > 0 && (
						<Button onClick={handleCheckout} type="submit">
							continue to checkout
						</Button>
					)}
				</SheetFooter>
			</SheetContent>
		</Sheet>
	)
}

export default CartSheet
