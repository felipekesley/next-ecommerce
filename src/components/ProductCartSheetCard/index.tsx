'use client'

import Image from 'next/image'
import { CartProduct } from '@/types/Product'
import { Separator } from '@/components/ui/separator'
import { useCart } from '@/hooks/useCart'
import { Button } from '@/components/ui/button'

type Props = {
	product: CartProduct
}

const ProductCartSheetCard = ({ product }: Props) => {
	const { removeFromCart } = useCart()
	return (
		<div key={product.id} className="relative">
			<div className="flex gap-4">
				<span className="absolute top-[-8px] left-[-8px] bg-gray-500 text-gray-100 w-6 h-6 rounded-full flex items-center justify-center">
					{product.quantity}
				</span>
				<Image
					src={product.imageUrls[0]}
					alt={product.name}
					width={120}
					height={160}
					className=" object-contain h-auto rounded-md"
				/>
				<div className="flex flex-col justify-between">
					<p className="font-semibold">{product.name}</p>
					<Button size="xs" onClick={() => removeFromCart(product)}>
						Remove from cart
					</Button>
				</div>
			</div>
			<Separator orientation="horizontal" className="my-4" />
		</div>
	)
}

export default ProductCartSheetCard
