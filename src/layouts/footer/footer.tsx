import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-gray-800 p-4 text-xs text-white ">
            <div className="container flex flex-col text-start ">
                <p className="max-w-sm text-xs ">
                    Made with ❤️ using{' '}
                    <a
                        href="https://nextjs.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-animation "
                    >
                        Next.js
                    </a>{' '}
                    and{' '}
                    <a
                        href="https://tailwindcss.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-animation "
                    >
                        Tailwind
                    </a>
                </p>
                <p className="mt-1 max-w-sm  text-xs capitalize">
                    design inspiration from{'  '}
                    <a
                        href="https://brittanychiang.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-animation "
                    >
                        Brittany Chiang
                    </a>
                </p>
            </div>
        </footer>
    )
}

export default Footer
