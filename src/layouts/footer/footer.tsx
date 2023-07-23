import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-gray-800 p-4 text-sm text-white ">
            <div className="container flex flex-col text-start ">
                <p className="max-w-md text-sm ">
                    Made with ❤️ using{' '}
                    <a
                        href="https://nextjs.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-animation font-bold"
                    >
                        Next.js
                    </a>{' '}
                    and{' '}
                    <a
                        href="https://tailwindcss.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-animation font-bold"
                    >
                        Tailwind
                    </a>
                </p>
                <p className="mt-1 max-w-md  text-sm capitalize">
                    design inspiration from{'  '}
                    <a
                        href="https://brittanychiang.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-animation font-bold"
                    >
                        Brittany Chiang
                    </a>
                </p>
            </div>
        </footer>
    )
}

export default Footer
