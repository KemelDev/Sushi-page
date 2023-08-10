import Image from 'next/image'
import { Plus_Jakarta_Sans } from 'next/font/google'

const FontPlusJakarta = Plus_Jakarta_Sans({ subsets: ['latin'] })

export default function Navbar() {
    return (
        <main className={FontPlusJakarta.className}>
            <div className="text-sm flex justify-end space-x-4 pt-4">
                <button>Menu</button>
                <button>Food</button>
                <button>Services</button>
                <button>AboutUs</button>
                <search>
                    <Image
                        src="/search.svg"
                        alt="popular"
                        width={20}
                        height={20}
                    />
                </search>
            </div>
        </main>
    )
}
