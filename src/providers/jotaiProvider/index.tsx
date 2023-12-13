'use client'

import { ChildrenProps } from '@/types/Common'
import { Provider } from 'jotai'

const JotaiProvider = ({ children }: ChildrenProps) => {
	return <Provider>{children}</Provider>
}

export default JotaiProvider
