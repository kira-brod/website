import './globals.css'
import { Inter, Open_Sans, Roboto, Source_Serif_4 } from 'next/font/google'
import { Plus_Jakarta_Sans } from 'next/font/google'
// import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })
const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})
const openSans = Open_Sans({
  weight: ['300', '400', '500', '700', '800'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})
// export const jakarta = Plus_Jakarta_Sans({
//   weight: ['200', '300', '400', '500', '600', '700', '800'],
//   style: ['normal', 'italic'],
//   subsets: ['latin'],
//   display: 'swap',
// })

//test
// export const source = Source_Serif_4({
//   weight: ['200', '300'],
//   style: ['normal', 'italic'],
//   subsets: ['latin'],
//   display: 'swap',
// })

// had export  in front of it but got an error
const metadata = {
  title: 'kb.',
  description: 'Generated by create next app',
  name:"viewport",
  content:"width=device-width, initial-scale=1.0"
}

export default function RootLayout({ children }) {
  return (

    <html lang="en">
      {/* <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head> */}
      <body className={inter.className}>{children}</body>
    </html>
  )
}
