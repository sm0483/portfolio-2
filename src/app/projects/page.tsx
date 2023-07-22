'use client'
import data from '#/data/archive'
import Table from '#/components/archive/table'

const Archive = () => {
    return (
        <div className="max-w-screen my-8 h-screen text-white lg:mx-48">
            <Table data={data} />
        </div>
    )
}

export default Archive
