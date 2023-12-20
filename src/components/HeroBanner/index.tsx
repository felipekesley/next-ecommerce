import Image from 'next/image'

const HeroBanner = () => {
	return (
		<div className="w-full">
			<Image
				src="/images/banner-1.png"
				width={1640}
				height={650}
				alt="Picture of the author"
			/>
		</div>
	)
}

export default HeroBanner
