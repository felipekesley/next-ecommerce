// eslint-disable-next-line @typescript-eslint/no-var-requires
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
	// Criação de categorias
	const camisas = await prisma.category.create({
		data: {
			name: 'Camisas',
			slug: 'camisas',
			imageUrl: 'http://exemplo.com/camisas.jpg'
		}
	})

	const calcas = await prisma.category.create({
		data: {
			name: 'Calças',
			slug: 'calcas',
			imageUrl: 'http://exemplo.com/calcas.jpg'
		}
	})

	// Criação de produtos para a categoria Camisas
	await prisma.product.create({
		data: {
			name: 'Camisa Social',
			slug: 'camisa-social',
			description: 'Perfeita para ocasiões formais.',
			basePrice: 149.99,
			imageUrls: [
				'https://i.pinimg.com/564x/ba/f7/52/baf752ca12016fd5a07ff04855ff1958.jpg',
				'https://i.pinimg.com/564x/9a/0d/fe/9a0dfe135f9f38ad54af5a2b61528192.jpg'
			],
			categoryId: camisas.id
		}
	})

	await prisma.product.create({
		data: {
			name: 'Camisa Polo',
			slug: 'camisa-polo',
			description: 'Uma camisa polo elegante e confortável.',
			basePrice: 120.0,
			imageUrls: [
				'https://i.pinimg.com/236x/98/d1/41/98d14170aeccae978e268a4136014962.jpg',
				'https://i.pinimg.com/564x/fd/ef/f6/fdeff6f2c038f0235137b75e9e85c3e0.jpg'
			],
			categoryId: camisas.id
		}
	})

	// Criação de produtos para a categoria Calças
	await prisma.product.create({
		data: {
			name: 'Calça Jeans',
			slug: 'calca-jeans',
			description: 'Confortável para o dia a dia.',
			basePrice: 99.99,
			imageUrls: [
				'https://i.pinimg.com/564x/c6/42/be/c642beec6b57e0255d172f9a5bf06340.jpg',
				'https://i.pinimg.com/564x/83/c3/09/83c3093a2b4ac56e170c69eeadec03e5.jpg'
			],
			categoryId: calcas.id
		}
	})
}

main()
	.catch((e) => {
		console.error(e)
		process.exit(1)
	})
	.finally(async () => {
		await prisma.$disconnect()
	})
