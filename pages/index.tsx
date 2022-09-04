import {Hero} from 'components/Hero'
import Layout from 'components/Layout'
import Image from 'next/future/image'
import screenshotPng from 'static/screenshot.png'

export default function Index() {
  return (
    <Layout>
      <Hero>
        <h1 className="leading-tight lg:leading-tight">
          Keep track of all your finances{' '}
          <span className="whitespace-nowrap text-primary">in one place</span>.
        </h1>

        <p>
          Stop struggling with complicated spreadsheets, scattered data, and
          inflexible systems. We've created the perfect tool for those who
          expect more clarity in less time.
        </p>

        <button
          type="button"
          className="btn btn-primary btn-sm"
          onClick={() => window.open('mailto:hello@alka.app')}>
          Request access
        </button>
      </Hero>

      <div className="mx-auto w-full max-w-3xl px-4 py-12">
        <Image
          className="shadow-xl"
          src={screenshotPng}
          alt="Screenshot from the Alka web app"
        />
      </div>
    </Layout>
  )
}
