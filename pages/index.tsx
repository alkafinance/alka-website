import * as Dialog from '@radix-ui/react-dialog'
import {Hero} from 'components/Hero'
import Layout from 'components/Layout'
import {motion} from 'framer-motion'
import Image from 'next/future/image'
import {Play, X} from 'phosphor-react'
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
        <Dialog.Root>
          <div className="relative shadow-xl">
            <Image src={screenshotPng} alt="Screenshot from the Alka web app" />

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Dialog.Trigger asChild>
                <button className="btn btn-primary btn-circle">
                  <Play weight="fill" />
                </button>
              </Dialog.Trigger>
            </div>
          </div>

          <Dialog.Portal>
            <Dialog.Overlay asChild forceMount>
              <motion.div
                className="fixed inset-0 z-[1000] bg-black/30"
                initial={{opacity: 0}}
                animate={{
                  opacity: 100,
                  transition: {ease: 'easeOut', duration: 0.3},
                }}
                exit={{
                  opacity: 0,
                  transition: {ease: 'easeIn', duration: 0.2},
                }}
              />
            </Dialog.Overlay>

            <Dialog.Content asChild forceMount>
              <motion.div
                className="fixed top-[50%] left-[50%] z-[1010] flex w-screen flex-col md:w-[calc(90vw-6rem)]"
                initial={{opacity: 0, x: '-50%', y: '-50%', scale: 0.95}}
                animate={{
                  opacity: 1,
                  scale: 1,
                  transition: {ease: 'easeOut', duration: 0.3},
                }}
                exit={{
                  opacity: 0,
                  scale: 0.95,
                  transition: {ease: 'easeIn', duration: 0.2},
                }}>
                <iframe
                  src="https://www.loom.com/embed/543a63ce451e416ca8278021cc4b7b8e"
                  frameBorder="0"
                  allowFullScreen
                  className="aspect-video w-full"
                />

                <Dialog.Close asChild>
                  <button className="btn btn-ghost btn-circle absolute top-[-3rem] right-0 text-lg text-white md:top-0 md:right-[-3rem]">
                    <X />
                  </button>
                </Dialog.Close>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </Layout>
  )
}
