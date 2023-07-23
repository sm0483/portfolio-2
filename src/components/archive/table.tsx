import Links from '../links/link'
import { archiveType } from '#/types/archive.type'
import React from 'react'
import Tech from '../tech/tech'
import { useRouter } from 'next/navigation'

interface TableProps {
    data: archiveType[]
}

const Table = ({ data }: TableProps) => {
    const router = useRouter()
    const handlerClick = () => {
        if (typeof window !== 'undefined') router.push('/')
    }
    return (
        <section>
            <div className="container mx-auto ">
                <div className="mx-8 ">
                    <div
                        className=" group flex cursor-pointer  px-2 text-xl 
                     text-red "
                        onClick={handlerClick}
                    >
                        <div>&larr;</div>
                        <div
                            className="transition-all duration-300
                             ease-in-out group-hover:ml-1 group-focus:ml-2"
                        >
                            Sreerag M
                        </div>
                    </div>
                    <h1 className="mt-4 px-2 text-4xl font-bold">
                        All Projects
                    </h1>

                    <div
                        className="  mt-12 grid grid-cols-4 gap-y-3
                    text-sm text-white text-opacity-70 lg:grid-cols-7"
                    >
                        <div
                            className="  archive-head 
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
                                    className=" group 
                                    col-span-3 border-b border-white
                                    border-opacity-20 p-2 font-medium 
                                     capitalize text-white text-opacity-100 lg:col-span-2
                                 
                                 "
                                >
                                    <a
                                        href={
                                            row.links?.live
                                                ? row.links.live
                                                : row.links?.github
                                        }
                                        className="transition-all 
                                        duration-500 ease-in-out 
                                        group-hover:mr-2 group-hover:text-red"
                                    >
                                        {row.project}
                                    </a>
                                    <span
                                        style={{
                                            display: 'inline-block',
                                            transform: 'rotate(325deg)',
                                        }}
                                        className=" group-hover:text-red"
                                    >
                                        &#x2192;
                                    </span>
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
