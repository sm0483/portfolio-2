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
        rootMargin: '0px 0px 0px 0px',
        threshold: 0.5,
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
        const currentRef1 = ref1.current
        const currentRef2 = ref2.current
        const currentRef3 = ref3.current
        const currentRef4 = ref4.current

        return () => {
            if (currentRef1) {
                observer.unobserve(currentRef1)
            }
            if (currentRef2) {
                observer.unobserve(currentRef2)
            }
            if (currentRef3) {
                observer.unobserve(currentRef3)
            }
            if (currentRef4) {
                observer.unobserve(currentRef4)
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
