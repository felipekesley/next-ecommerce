import { Product } from '@/types/Product'
import { atom } from 'jotai'

export const cartState = atom<Product[]>([])
