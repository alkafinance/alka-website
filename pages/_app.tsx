import '__generated__/tailwind.css'
import {Hero} from 'components/Hero'
import Layout from 'components/Layout'
import {DefaultSeo} from 'next-seo'
import type {AppProps} from 'next/app'
import Head from 'next/head'
import type {FallbackProps} from 'react-error-boundary'
import {ErrorBoundary} from 'react-error-boundary'

export default function App({Component, pageProps}: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>

      <DefaultSeo
        title="Alka"
        description="Keep track of all your finances in one place."
      />

      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Component {...pageProps} />
      </ErrorBoundary>
    </>
  )
}

function ErrorFallback({error}: FallbackProps) {
  return (
    <Layout>
      <Hero>
        <h1>Something went wrong!</h1>

        <pre className="items-start whitespace-pre-line rounded-md border border-red-600 bg-background font-mono text-red-600">
          {error.message}
        </pre>
      </Hero>
    </Layout>
  )
}
