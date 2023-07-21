'use client'
import FontFamily from '#/components/font/Family'
import { useState } from 'react'
import Cursor from '#/components/cursor/cursor'
import Header from '#/layouts/header/header'
import Main from '#/components/main'

// onMouseMove={(e) => {
//     setDivPosition({
//         top: e.clientY - 250,
//         left: e.clientX - 250,
//     })
// }}

export default function Page() {
    const [divPosition, setDivPosition] = useState({ top: 0, left: 0 })

    return (
        <div className="">
            <FontFamily />
            <Cursor divPosition={divPosition} />
            <div className=" lg:mx-64 lg:my-24">
                <Header />
                <Main />
            </div>
        </div>
    )
}
