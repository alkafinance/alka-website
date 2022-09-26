import {Logo} from './Logo'
import Link from 'next/link'
import React from 'react'
import {twMerge} from 'tailwind-merge'

export interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({children}: LayoutProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

function Header() {
  const [scrollY, setScrollY] = React.useState(0)
  React.useEffect(() => {
    function handleScroll() {
      setScrollY(window.scrollY)
    }
    window?.addEventListener('scroll', handleScroll)
    return () => window?.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <header
      className={twMerge(
        'sticky top-0 z-[10]',
        scrollY > 0 && 'border-b border-b-black/10 bg-white',
      )}>
      <div className="mx-auto flex w-full max-w-3xl items-center justify-between p-4">
        <Link href="/">
          <a className="btn-ghost btn h-auto p-0 hover:bg-transparent">
            <Logo className="h-auto w-[3rem] text-black" />
          </a>
        </Link>

        <nav className="flex items-center space-x-2">
          <a
            href="https://alkafinance.notion.site/Alka-User-Guide-35c8c898dbc14fca992d029a33ea2f5e"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost btn-sm btn">
            User Guide
          </a>

          <a
            href="https://my.alka.app"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary btn-sm btn">
            Sign in
          </a>
        </nav>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center space-y-6 px-4 py-12">
        <Link href="/">
          <a className="btn-ghost btn h-auto p-0 hover:bg-transparent">
            <Logo className="h-auto w-[3rem] text-black" />
          </a>
        </Link>

        <nav className="flex text-gray-500">
          <p>
            <a
              href="https://alka.app/terms-of-service"
              target="_blank"
              rel="noopener noreferrer"
              className="link">
              Terms of Service
            </a>
            {' · '}
            <a
              href="https://alka.app/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="link">
              Privacy Policy
            </a>
            {' · '}
            <a
              href="https://twitter.app/alka_app"
              target="_blank"
              rel="noopener noreferrer"
              className="link">
              Follow us on Twitter
            </a>
          </p>
        </nav>

        <p>© {new Date().getFullYear()}, Alka Inc., All rights reserved.</p>
      </div>
    </footer>
  )
}
