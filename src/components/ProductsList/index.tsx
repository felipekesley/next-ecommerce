import { prismaClient } from '@/lib/prisma'
import ProductCard from '../ProductCard'

const ProductsList = async () => {
	const products = await prismaClient.product.findMany({})

	console.log(products)
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 py-11">
			{products.map((product) => (
				<ProductCard
					key={product.id}
					imgUrl={product.imageUrls[0]}
					imgAlt={product.name}
					title={product.name}
					price={Number(product.basePrice)}
				/>
			))}
		</div>
	)
}

export default ProductsList
