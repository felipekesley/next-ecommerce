'use client'

import Image from 'next/image'
import { Button } from '../ui/button'
import { Product } from '@/types/Product'
import { useAtom } from 'jotai'
import { cartActions } from '@/jotai/actions/cartAction'

type Props = {
	product: Product
}

const ProductCard = ({ product }: Props) => {
	const [, cartAct] = useAtom(cartActions)

	const addToCart = () => {
		cartAct({ type: 'add', item: { ...product, quantity: 0 } })
	}
	const removeToCart = () => {
		cartAct({ type: 'remove', itemId: product.id })
	}

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
			<Button onClick={addToCart}>Add to cart</Button>
			<Button onClick={removeToCart}>Remove to cart</Button>
		</div>
	)
}

export default ProductCard
