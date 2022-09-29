import * as Dialog from '@radix-ui/react-dialog'
import {Hero} from 'components/Hero'
import Layout from 'components/Layout'
import {motion} from 'framer-motion'
import Image from 'next/future/image'
import {
  Hourglass,
  Lightning,
  ListDashes,
  Money,
  Play,
  SlackLogo,
  Terminal,
  UsersThree,
  Vault,
  X,
} from 'phosphor-react'
import React from 'react'
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
          inflexible systems. We&apos;ve created the perfect tool for those who
          expect more clarity in less time.
        </p>

        <p>
          <button
            type="button"
            className="btn-primary btn text-base"
            onClick={() => window.open('mailto:hello@alka.app')}>
            Request access
          </button>
        </p>

        <Dialog.Root>
          <div className="relative mt-16 shadow-xl">
            <Image src={screenshotPng} alt="Screenshot from the Alka web app" />

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Dialog.Trigger asChild>
                <button className="btn-primary btn-circle btn">
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
                  <button className="btn-ghost btn-circle btn absolute top-[-3rem] right-0 text-lg text-white md:top-0 md:right-[-3rem]">
                    <X />
                  </button>
                </Dialog.Close>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </Hero>

      <div className="border-t border-t-black/10 bg-white">
        <div className="prose mx-auto w-full max-w-3xl px-4 py-12">
          <h2 className="font-display font-bold">
            Personalized finances that simply work
          </h2>

          <p>
            Being able to trust and understand your financial data means gives
            you the empowerment to confidently make the most important decisions
            in life.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
            <FeatureCard title="Built for speed" icon={<Lightning />}>
              <p>
                Actions in Alka are created in an instant, so you can work as
                fast as you think.
              </p>
            </FeatureCard>

            <FeatureCard title="Double–entry engine" icon={<Money />}>
              <p>
                Underneath our graceful interface, lies the gold standard of
                data models.
              </p>
            </FeatureCard>

            <FeatureCard title="Offline updates" icon={<Hourglass />}>
              <p>
                You don&apos;t have to wait to land to update any of your
                accounts.
              </p>
            </FeatureCard>

            <FeatureCard title="Stay in command" icon={<Terminal />}>
              <p>
                With our Alka Omnibar, all of your financial data is at your
                fingertips.
              </p>
            </FeatureCard>

            <FeatureCard title="Multiple ledgers" icon={<ListDashes />}>
              <p>
                Separate your personal and business finances or mix them however
                you want.
              </p>
            </FeatureCard>

            <FeatureCard title="Collaborative nature" icon={<UsersThree />}>
              <p>
                Shared finances with your spouse or business partner? We got
                you!
              </p>
            </FeatureCard>

            <FeatureCard title="9,500+ banks" icon={<Vault />}>
              <p>
                Easily connect all your accounts through Plaid, Yodlee and Venmo
              </p>
            </FeatureCard>

            <FeatureCard title="Slack integration" icon={<SlackLogo />}>
              <p>Get important notifications directly in your Slack channel.</p>
            </FeatureCard>
          </div>
        </div>
      </div>
    </Layout>
  )
}

function FeatureCard({
  title,
  icon,
  children,
}: {
  title: string
  icon: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <div className="card rounded-xl border border-black/10 bg-white">
      <div className="card-body">
        <span className="mb-4 text-3xl">{icon}</span>
        <span className="card-title font-display font-bold">{title}</span>
        {children}
      </div>
    </div>
  )
}
