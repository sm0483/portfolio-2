import React from 'react'
import Tech from '#/components/tech/tech'
import Link from 'next/link'

const data = [
    {
        year: 2021,
        project: 'Where in the world',
        builtWith: ['React'],
        link: 'https://project1.com',
    },
    {
        year: 2022,
        project: 'Weather App',
        builtWith: ['React'],
        link: 'https://weatherapp.com',
    },
    {
        year: 2022,
        project: 'Todo List',
        builtWith: [
            'React',
            'express',
            'tailwind',
            'React',
            'express',
            'tailwind',
        ],
        link: 'https://todolist.com',
    },
    {
        year: 2023,
        project: 'Recipe Finder',
        builtWith: ['React'],
        link: 'https://recipefinder.com',
    },
]

const Archive = () => {
    return (
        <section className="max-w-screen h-screen text-white ">
            <div className="container mx-auto">
                <div className="m-4">
                    <button className="">
                        <Link href={'/'}>&larr; Sreerag M</Link>
                    </button>

                    <h1 className="">All Projects</h1>

                    <div className="">
                        <div className=" ">Year</div>
                        <div className="  ">Project</div>
                        <div className="">Built With</div>
                        <div className=" ">Link</div>
                        {data.map((row, index) => (
                            <React.Fragment key={index}>
                                <div className="">{row.year}</div>
                                <div className="">{row.project}</div>
                                <div className="">
                                    {row.builtWith.map((tech, index) => (
                                        <Tech key={index} technology={tech} />
                                    ))}
                                </div>
                                <div className="">
                                    <a href={row.link}>Link</a>
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Archive
