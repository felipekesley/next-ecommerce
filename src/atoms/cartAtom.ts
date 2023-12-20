import { atomWithStorage } from 'jotai/utils'
import { CartProduct } from '@/types/Product'
import { atom } from 'jotai'

export const cartAtom = atomWithStorage<CartProduct[]>('next-ecommerce', [])

export const addProduct = atom(null, (get, set, product: CartProduct) => {
	const cart = get(cartAtom)
	const productItem = cart.find((p) => p.id === product.id)

	if (productItem) {
		const updatedCart = cart.map((cartItem) => {
			if (cartItem.id === product.id) {
				return { ...cartItem, quantity: cartItem.quantity + 1 }
			}
			return cartItem
		})
		set(cartAtom, updatedCart)
	} else {
		set(cartAtom, [...cart, { ...product, quantity: 1 }])
	}
})

export const removeProduct = atom(null, (get, set, product: CartProduct) => {
	const cart = get(cartAtom)
	const productItem = cart.find((p) => p.id === product.id)

	if (!productItem) {
		return
	}

	if (productItem.quantity > 1) {
		const updatedCart = cart.map((cartItem) => {
			if (cartItem.id === product.id) {
				return { ...cartItem, quantity: cartItem.quantity - 1 }
			}
			return cartItem
		})
		set(cartAtom, updatedCart)
	} else {
		const updatedCart = cart.filter(
			(cartItem) => cartItem.id !== product.id
		)
		set(cartAtom, updatedCart)
	}
})

export const cartQuantityAtom = atom((get) => {
	const cartItems = get(cartAtom)
	const totalQuantity = cartItems.reduce(
		(total, cartItem) => total + cartItem.quantity,
		0
	)

	return totalQuantity
})

export const totalPriceAtom = atom((get) => {
	const cartItems = get(cartAtom)
	return cartItems.reduce((total, item) => {
		return total + item.basePrice * item.quantity
	}, 0)
})
