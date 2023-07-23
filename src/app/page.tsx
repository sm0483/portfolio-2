'use client'
import FontFamily from '#/components/font/Family'
import { useState } from 'react'
import Cursor from '#/components/cursor/cursor'
import Header from '#/layouts/header/header'
import Main from '#/components/main'
import { NavProvider } from '#/context/nav.context'

export default function Page() {
    const [divPosition, setDivPosition] = useState({ top: 0, left: 0 })

    return (
        <div
            className="hide-scrollbar mx-8 lg:mx-48 lg:flex "
            onMouseMove={(e) => {
                setDivPosition({
                    top: e.clientY - 325,
                    left: e.clientX - 325,
                })
            }}
        >
            <FontFamily />
            <Cursor divPosition={divPosition} />
            <NavProvider>
                <div
                    className="top-0 pt-20 lg:sticky 
            lg:h-screen lg:w-1/2 lg:pt-28  "
                >
                    <Header />
                </div>
                <div className="mb-8 lg:mb-16 lg:w-1/2 lg:pt-28 ">
                    <Main />
                </div>
            </NavProvider>
        </div>
    )
}
