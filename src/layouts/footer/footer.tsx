import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-gray-800 p-4 text-sm text-white sm:p-2">
            <div className="container flex flex-col text-start ">
                <p className="max-w-sm text-xs">
                    Made with ❤️ using{' '}
                    <a
                        href="https://nextjs.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-animation hover:text-blue-300 "
                    >
                        Next.js
                    </a>{' '}
                    and{' '}
                    <a
                        href="https://tailwindcss.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-animation hover:text-blue-300 "
                    >
                        Tailwind CSS
                    </a>
                </p>
                <p className="mt-1 max-w-sm  capitalize">
                    <a
                        href="https://brittanychiang.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-animation hover:text-blue-300 "
                    >
                        design inspiration from Brittany Chiang
                    </a>
                </p>
            </div>
        </footer>
    )
}

export default Footer
