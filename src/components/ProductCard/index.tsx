'use client'

import Image from 'next/image'
import { Button } from '../ui/button'
import { CartProduct } from '@/types/Product'
import { useCart } from '@/hooks/useCart'

type Props = {
	product: CartProduct
}

const ProductCard = ({ product }: Props) => {
	const { addToCart } = useCart()

	return (
		<div className="w-full">
			<div className="relative after-pt-100">
				<Image
					src={product.imageUrls[0]}
					alt={product.name}
					fill
					className="object-cover w-full"
				/>
			</div>

			<div className="flex justify-between gap-2 my-4">
				<h3 className="font-semibold">{product.name}</h3>
				<p className="font-semibold">
					R$ {Number(product.basePrice).toFixed(2)}
				</p>
			</div>
			<Button onClick={() => addToCart(product)}>Add to cart</Button>
		</div>
	)
}

export default ProductCard
