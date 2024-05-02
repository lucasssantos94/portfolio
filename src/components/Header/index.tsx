'use client'
import Link from "next/link"
import { usePathname } from 'next/navigation'

import Logo from '@/components/Logo'
import Theme from '../Theme'

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/sobre', label: 'Sobre' },
    { href: '/projetos', label: 'Projetos' },
    { href: '/contato', label: 'Contato' }
]

export default function Header() {
    const pathname = usePathname()

    return (
        <header className="border-b border-slateGray w-full h-28 ">
            <div className="max-w-screen-xl mx-auto flex justify-center items-center h-28 sm:justify-between">

                <Logo />

                <nav className="flex items-center gap-8" >
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href

                        return (
                            <Link
                                className={`${isActive ? 'active' : null} text-xl hover:text-lightSalmon dark:hover:text-lightSalmon transition-all duration-300 hover:-translate-y-1 p-3`}
                                key={link.href} href={link.href}
                            >
                                {link.label}

                            </Link>
                        )
                    })}
                </nav>

                <Theme />
            </div>

        </header >
    )
}