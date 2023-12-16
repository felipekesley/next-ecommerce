import Container from '@/components/Common/Container'
import HeroBanner from '@/components/HeroBanner'
import ProductsList from '@/components/ProductsList'

export default function Home() {
	return (
		<Container>
			<HeroBanner />
			<ProductsList />
		</Container>
	)
}
