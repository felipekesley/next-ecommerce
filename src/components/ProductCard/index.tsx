'use client'

import Image from 'next/image'
import { Button } from '../ui/button'
import { CartProduct } from '@/types/Product'
import { useCart } from '@/hooks/useCart'

type Props = {
	product: CartProduct
}

const ProductCard = ({ product }: Props) => {
	const { addToCart, removeFromCart } = useCart()

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

			<h3>{product.name}</h3>
			<p>R$ {Number(product.basePrice).toFixed(2)}</p>
			<Button onClick={() => addToCart(product)}>Add to cart</Button>
			<Button onClick={() => removeFromCart(product)}>
				Remove to cart
			</Button>
		</div>
	)
}

export default ProductCard
