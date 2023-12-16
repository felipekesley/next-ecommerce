import Image from 'next/image'

type Props = {
	imgUrl: string
	imgAlt: string
	title: string
	price: number
}

const ProductCard = ({ imgUrl, imgAlt, title, price }: Props) => {
	return (
		<div className="w-full">
			<div className="relative after-pt-100">
				<Image
					src={imgUrl}
					alt={imgAlt}
					fill={true}
					className="object-cover w-full"
				/>
			</div>

			<h3>{title}</h3>
			<p>{price}</p>
		</div>
	)
}

export default ProductCard
