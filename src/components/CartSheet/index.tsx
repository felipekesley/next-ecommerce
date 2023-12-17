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
import { cartState } from '@/jotai/atoms/cartAtom'
import { useAtom } from 'jotai'
import Image from 'next/image'
import { Separator } from '../ui/separator'
import { ShoppingCart } from 'lucide-react'
import { createCheckout } from '@/actions/checkout'
import { loadStripe } from '@stripe/stripe-js'

const CartSheet = () => {
	const [products] = useAtom(cartState)
	const cartQuantity = products.reduce(
		(total, item) => total + item.quantity,
		0
	)

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
			<SheetContent className="overflow-y-scroll">
				<SheetHeader>
					<SheetTitle>My Cart</SheetTitle>
				</SheetHeader>
				<Separator orientation="horizontal" className="my-4" />
				<div className="flex flex-col gap-4 py-4">
					{products.map((product) => (
						<div key={`${product.id}-${Math.random()}`}>
							<div className="flex gap-4">
								<Image
									src={product.imageUrls[0]}
									alt={product.name}
									width={120}
									height={160}
									className=" object-contain h-auto rounded-md"
								/>
								<p>{product.name}</p>
							</div>
							<Separator
								orientation="horizontal"
								className="my-4"
							/>
						</div>
					))}
				</div>
				<SheetFooter>
					<Button onClick={handleCheckout} type="submit">
						continue to checkout
					</Button>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	)
}

export default CartSheet
