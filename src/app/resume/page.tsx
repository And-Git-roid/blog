import { IconX } from '@tabler/icons-react'

import type { Metadata, Viewport } from 'next'
import Link from 'next/link'

import { Dot } from '@/components/blocks/resume'
import { Typed, TypedContent, TypedText } from '@/components/typed'
import { formatDateTime } from '@/utils'

export const metadata: Metadata = {
  title: 'Resume',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: [
    { color: '#282935', media: '(prefers-color-scheme: light)' },
    { color: '#282935', media: '(prefers-color-scheme: dark)' },
  ],
}

export default function Page() {
  const lastBuildTime = formatDateTime(
    {
      day: '2-digit',
      hour: '2-digit',
      hour12: false,
      minute: '2-digit',
      month: 'short',
      second: '2-digit',
      weekday: 'short',
    },
    new Date(),
  )

  return (
    <div className='flex min-h-svh items-center justify-center bg-[#282935] p-4'>
      <main className='flex max-h-[90svh] max-w-prose flex-1 flex-col overflow-hidden rounded-2xl border border-gray-600 shadow-2xl shadow-black'>
        <header className='grid h-11 flex-none grid-cols-[1fr_2fr_1fr] items-center border-b border-gray-800 bg-zinc-700 px-4 text-xs font-semibold'>
          <span className='flex gap-2'>
            <Link aria-label='Back to home page' href='/'>
              <Dot className='group relative flex items-center justify-center bg-red-500 before:absolute before:-inset-4 before:content-["_"]'>
                <IconX className='invisible size-2.5 group-hover:visible' />
              </Dot>
            </Link>
            <Dot className='cursor-not-allowed bg-yellow-400' />
            <Dot className='cursor-not-allowed bg-green-500' />
          </span>
          <span className='text-center text-gray-400'>
            zhangyu@MacBook-Air:~
          </span>
          <span className='text-end text-gray-500'>⌥⌘1</span>
        </header>
        <div className='min-h-60 flex-1 overflow-y-auto p-2 text-sm text-gray-200 duration-300 animate-in fade-in'>
          <p className='mb-2'>Last login: {lastBuildTime} on ttys003</p>
          <Typed>
            <TypedText>whoami</TypedText>
            <TypedContent>
              <p>
                Hi, I&apos;m <strong>Chris</strong>
              </p>
              <p>
                I am a senior android engineer.
              </p>
            </TypedContent>
          </Typed>
        </div>
      </main>
    </div>
  )
}
