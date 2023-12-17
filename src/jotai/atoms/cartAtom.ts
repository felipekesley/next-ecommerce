import { atomWithStorage } from 'jotai/utils'
import { Product } from '@/types/Product'

export const cartState = atomWithStorage<Product[]>('next-commerce-cart', [])
