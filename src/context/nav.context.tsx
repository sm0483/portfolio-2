/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import {
    ReactNode,
    createContext,
    useContext,
    useState,
    useEffect,
    useRef,
} from 'react'
import { NavType } from '#/types/nav.type'

const NavContext = createContext<NavType>({
    ref1: { current: null },
    ref2: { current: null },
    ref3: { current: null },
    ref4: { current: null },
    activeButton: null,
    setActiveButton: () => {},
})

export function NavProvider({ children }: { children: ReactNode }) {
    const options = {
        root: null,
        threshold: 0.7,
    }

    const ref1 = useRef<HTMLInputElement>(null)
    const ref2 = useRef<HTMLInputElement>(null)
    const ref3 = useRef<HTMLInputElement>(null)
    const ref4 = useRef<HTMLInputElement>(null)
    const [activeButton, setActiveButton] = useState('')

    useEffect(() => {
        const handleIntersection: IntersectionObserverCallback = (entries) => {
            entries.forEach((entry) => {
                const target = entry.target as HTMLElement
                const { id } = target.dataset

                if (entry.isIntersecting) {
                    setActiveButton(id as string)
                }
            })
        }
        const observer = new IntersectionObserver(handleIntersection, options)

        if (ref1.current) {
            observer.observe(ref1.current)
        }
        if (ref2.current) {
            observer.observe(ref2.current)
        }
        if (ref3.current) {
            observer.observe(ref3.current)
        }

        if (ref4.current) {
            observer.observe(ref4.current)
        }

        return () => {
            if (ref1.current) {
                observer.unobserve(ref1.current)
            }
            if (ref2.current) {
                observer.unobserve(ref2.current)
            }
            if (ref3.current) {
                observer.unobserve(ref3.current)
            }
            if (ref4.current) {
                observer.unobserve(ref4.current)
            }
        }
    }, [])

    return (
        <NavContext.Provider
            value={{ ref1, ref2, ref3, ref4, activeButton, setActiveButton }}
        >
            {children}
        </NavContext.Provider>
    )
}

export const useNavContext = () => useContext(NavContext)
