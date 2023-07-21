import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-gray-800 p-4 text-white">
            <div className=" container text-center  lg:text-start">
                <p className=" min-w-md text-center text-sm ">
                    Made with ❤️ using{' '}
                    <a
                        href="https://nextjs.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-animation  hover:text-blue-300 text-sm"
                    >
                        Next.js
                    </a>{' '}
                    and{' '}
                    <a
                        href="https://tailwindcss.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-animation  hover:text-blue-300"
                    >
                        Tailwind CSS
                    </a>
                </p>
                <p className="min-w-md mt-1 text-center text-sm capitalize">
                    <a
                        href="https://brittanychiang.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className=" text-animation hover:text-blue-300 text-sm"
                    >
                        design inspiration from Brittany Chiang
                    </a>{' '}
                </p>
            </div>
        </footer>
    )
}

export default Footer
