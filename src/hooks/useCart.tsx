import { addProduct, cartAtom, removeProduct } from '@/atoms/cartAtom'
import { CartProduct } from '@/types/Product'
import { useAtom } from 'jotai'

export const useCart = () => {
	const [cart] = useAtom(cartAtom)
	const [, addProductToCart] = useAtom(addProduct)
	const [, removeProductFromCart] = useAtom(removeProduct)

	const addToCart = (product: CartProduct) => {
		addProductToCart(product)
	}

	const removeFromCart = (product: CartProduct) => {
		removeProductFromCart(product)
	}

	return {
		cart,
		addToCart,
		removeFromCart
	}
}
