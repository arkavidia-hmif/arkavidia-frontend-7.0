import { ReactNode } from 'react'
import Head from 'next/head'
import Footer from './Footer'
import Navbar from './Navbar/Navbar'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout: React.FC<Props> = ({ children, title = 'This is the default title' }) => (
  <div>
    <Head>
      <title>{title}</title>
    </Head>
    <Navbar />
    <div id="main-container">
      {children}
    </div>
    <Footer />
    <style jsx>{`
      #main-container {
        overflow: auto;
      }
    `}
    </style>
  </div>
)

export default Layout
