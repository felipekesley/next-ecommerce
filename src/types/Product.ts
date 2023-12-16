export type Product = {
	id: string
	name: string
	slug: string
	description: string
	basePrice: number
	discount: number
	imageUrls: string[]
	categoryId: string
	quantity?: number
}
