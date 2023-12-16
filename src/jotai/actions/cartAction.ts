import { Product } from '@/types/Product'
import { atom } from 'jotai'
import { cartState } from '../atoms/cartAtom'

const findProductIndex = (cart: Product[], productId: string) =>
	cart.findIndex((product) => product.id === productId)

const updateCart = (cart: Product[], productIndex: number, ammount: number) => {
	const updatedCart = [...cart]
	const product = updatedCart[productIndex]

	const newQuantity = (product.quantity ?? 0) + ammount
	if (newQuantity > 0) {
		updatedCart[productIndex] = { ...product, quantity: newQuantity }
	} else {
		updatedCart.splice(productIndex, 1)
	}

	return updatedCart
}

export const cartActions = atom(
	null,
	(
		get,
		set,
		action: { type: 'add' | 'remove'; item?: Product; itemId?: string }
	) => {
		const currentCart = get(cartState)

		if (action.type === 'add' && action.item) {
			const productIndex = findProductIndex(currentCart, action.item.id)
			const updatedCart =
				productIndex === -1
					? [...currentCart, { ...action.item, quantity: 1 }]
					: updateCart(currentCart, productIndex, 1)
			set(cartState, updatedCart)
		} else if (action.type === 'remove' && action.itemId) {
			const productIndex = findProductIndex(currentCart, action.itemId)
			if (productIndex !== -1) {
				const updatedCart = updateCart(currentCart, productIndex, -1)
				set(cartState, updatedCart)
			}
		}
	}
)
