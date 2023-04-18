import Head from 'next/head'
import { Box } from '@chakra-ui/react'
import NavBar from './NavBar'

const Layout = ({ children }) => (
    <>
        <Head>
            <title>Real Estate</title>
        </Head>
        <Box w='1280' m='auto'>
            <header><NavBar /></header>
            <main>{children}</main>
            <footer>Footer</footer>
        </Box>
    </>
)

export default Layout;