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

const CartSheet = () => {
	const [cart] = useAtom(cartState)
	const cartQuantity = cart.reduce((total, item) => total + item.quantity, 0)

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
					{cart.map((product) => (
						<>
							<div className="flex gap-4" key={product.id}>
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
						</>
					))}
				</div>
				<SheetFooter>
					<Button type="submit">continue to checkout</Button>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	)
}

export default CartSheet
