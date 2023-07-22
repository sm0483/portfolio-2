'use client'

import data from '#/data/archive'
import Table from '#/components/archive/table'
import Cursor from '#/components/cursor/cursor'
import { useState } from 'react'

const Archive = () => {
    const [divPosition, setDivPosition] = useState({ top: 0, left: 0 })

    return (
        <div className="max-w-screen my-8 h-screen text-white lg:mx-48">
            <Table data={data} />
        </div>
    )
}

export default Archive
