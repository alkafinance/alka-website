import {Gradient} from './Gradient'
import {Logo} from './Logo'
import Link from 'next/link'
import React from 'react'

export interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({children}: LayoutProps) {
  return (
    <>
      <Gradient />

      <header>
        <div className="mx-auto flex w-full max-w-3xl items-center justify-between p-4">
          <Link href="/">
            <a className="btn btn-ghost h-auto p-0 hover:bg-transparent">
              <Logo className="h-auto w-[3rem] text-black" />
            </a>
          </Link>

          <nav className="flex items-center space-x-2">
            <a
              href="https://alkafinance.notion.site/Alka-User-Guide-35c8c898dbc14fca992d029a33ea2f5e"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost btn-sm">
              User Guide
            </a>

            <a
              href="https://my.alka.app"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm">
              Sign in
            </a>
          </nav>
        </div>
      </header>

      <main>{children}</main>

      <footer>
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center space-y-6 px-4 py-12">
          <Link href="/">
            <a className="btn btn-ghost h-auto p-0 hover:bg-transparent">
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
    </>
  )
}
