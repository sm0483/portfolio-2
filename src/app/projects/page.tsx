'use client'
import data from '#/data/archive'
import Table from '#/components/archive/table'

const Archive = () => {
    return (
        <div className="max-w-screen mb-16 min-h-screen py-8  text-white lg:mx-48">
            <Table data={data} />
        </div>
    )
}

export default Archive
