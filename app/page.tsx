import Image from 'next/image'
import { Playfair_Display } from 'next/font/google'
import { Plus_Jakarta_Sans } from 'next/font/google'
import Head from '@/components/Head'
import Section from '@/components/Section'
import Navbar from '@/components/Navbar'
import AboutUs from '@/components/AboutUs'
import PopularFood from '@/components/PopularFood'
import Trending from '@/components/Trending'
import SignUp from '@/components/SignUp'
import Footer from '@/components/Footer'
import Article from '@/components/Article'

const FontPlayfair = Playfair_Display({ subsets: ['latin'] })
const FontPlusJakarta = Plus_Jakarta_Sans({ subsets: ['latin'] })

export default function Home() {
    return (
        <main className="bg-slate-600 text-slate-50 justify-center items-center ">
            <div className=" bg-slate-500 flex justify-center content-center items-center h-screen">
                <Head />
                <div className=" bg-slate-600 flex flex-colum justify-center content-center items-center">
                    <Section>
                        <Navbar />
                        <Article />
                    </Section>
                </div>
            </div>
            <div className="flex flex-col justify-center content-center items-center">
                <AboutUs />
                <PopularFood />
                <Trending />
                <SignUp />
                <Footer />
            </div>
        </main>
    )
}
