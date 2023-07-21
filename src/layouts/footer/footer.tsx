import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-gray-800 p-4 text-white">
            <div className="container mx-auto">
                <p className=" text-center text-sm">
                    Made with ❤️ using{' '}
                    <a
                        href="https://nextjs.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-animation  hover:text-blue-300"
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
                <p className="mt-2 text-center text-sm">
                    Special thanks to{' '}
                    <a
                        href="https://brittanychiang.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className=" text-animation  hover:text-blue-300"
                    >
                        Brittany Chiang
                    </a>{' '}
                    for design inspiration.
                </p>
            </div>
        </footer>
    )
}

export default Footer
