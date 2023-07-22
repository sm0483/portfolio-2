import Links from '../links/link'
import Link from 'next/link'
import { archiveType } from '#/types/archive.type'
import React from 'react'
import Tech from '../tech/tech'

interface TableProps {
    data: archiveType[]
}

const Table = ({ data }: TableProps) => {
    return (
        <section>
            <div className="container mx-auto">
                <div className="mx-8">
                    <div className=" group flex  px-2 text-xl  text-red hover:underline">
                        <div>&larr;</div>
                        <Link
                            href="/"
                            className="transition-all duration-300 ease-in-out
                     group-hover:ml-1 group-focus:ml-2"
                        >
                            {' '}
                            Sreerag M
                        </Link>
                    </div>
                    <h1 className="mt-4 px-2 text-4xl font-bold">
                        All Projects
                    </h1>

                    <div
                        className=" mt-12 grid 
                    grid-cols-4 gap-y-3 text-sm lg:grid-cols-7"
                    >
                        <div
                            className=" archive-head 
                         col-span-1 border-b border-white border-opacity-20 p-2"
                        >
                            Year
                        </div>
                        <div
                            className="archive-head col-span-3 
                         border-b border-white border-opacity-20 p-2 lg:col-span-2"
                        >
                            Project
                        </div>
                        <div
                            className="archive-head hidden border-b border-white border-opacity-20 
                         p-2 lg:col-span-2 lg:block"
                        >
                            Built With
                        </div>
                        <div
                            className="archive-head hidden border-b border-white border-opacity-20 
                         p-2 lg:col-span-2 lg:block"
                        >
                            Link
                        </div>
                        {data.map((row, index) => (
                            <React.Fragment key={index}>
                                <div
                                    className="
                                    col-span-1 
                         border-b border-white 
                         border-opacity-20 p-2"
                                >
                                    {row.year}
                                </div>
                                <div
                                    className=" col-span-3 
                                    border-b border-white 
                                    border-opacity-20 p-2 capitalize 
                                    lg:col-span-2
                                 
                                 "
                                >
                                    {row.project}
                                </div>
                                <div
                                    className="hidden flex-wrap gap-y-2
                                  border-b border-white border-opacity-20 
                                p-2 lg:col-span-2 lg:flex "
                                >
                                    {row.builtWith.map((tech, index) => (
                                        <Tech key={index} technology={tech} />
                                    ))}
                                </div>
                                <div
                                    className="hidden  border-b border-white border-opacity-20 p-2 
                          lg:col-span-2 lg:block"
                                >
                                    <Links {...row.links} />
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Table
