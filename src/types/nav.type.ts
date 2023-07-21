import { createContext, Dispatch, SetStateAction } from 'react'

export type NavType = {
    ref1: React.MutableRefObject<HTMLInputElement | null>
    ref2: React.MutableRefObject<HTMLInputElement | null>
    ref3: React.MutableRefObject<HTMLInputElement | null>
    ref4: React.MutableRefObject<HTMLInputElement | null>
    activeButton: null | string
    setActiveButton: Dispatch<SetStateAction<string>>
}
