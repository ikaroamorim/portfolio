import type { AppProps } from 'next/app'
import  Head from 'next/head'

import { useEffect } from 'react'
import { useRouter } from 'next/router'

import * as gtag from '../lib/gtag'

import Header from '../components/Header'
import Analytics from '../components/Analytics'

import '../styles/globals.css'



function MyApp({ Component, pageProps }: AppProps) {

  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }

  }, [router.events])

  return (
    <div className="global__Main">
      <Head>
        <meta name='viewport' content='width=device-width,initial-scale=1.0' />
      </Head>
      <Header />
      <Analytics />
      <div className='global_ComponentContainer'>
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp
