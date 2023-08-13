import Image from 'next/image'

export default function AboutUs() {
    return (
        <main className="bg-slate-300 justify-center items-center flex h-[520px]">
            <div className="w-80 bg-slate-300 relative ">
                <Image
                    src="/about_bg1.png"
                    alt="popular"
                    width={500}
                    height={500}
                    className="relative"
                />

                <Image
                    src="/sushi-3.png"
                    alt="popular"
                    width={150}
                    height={150}
                    className="absolute top-10 left-12 "
                />
                <div className="bg-red-800 absolute w-80 h-[2px] flex justify-end items-center  ">
                    <button className="bg-slate-800 text-slate-50 text-xs px-4 py-2 rounded-l-lg absolute">
                        Learn More
                    </button>
                </div>

                <Image
                    src="/about_bg2.png"
                    alt="popular"
                    width={500}
                    height={500}
                    className="relative"
                />
                <Image
                    src="/sushi-2.png"
                    alt="popular"
                    width={150}
                    height={150}
                    className="absolute top-60 left-12"
                />
            </div>

            {/* Aca separo ambos espacios */}

            <div className=" w-80 h-[520px] bg-[#fff0de] text-black z-30">
                <div className="flex-col">
                    <p className="pl-8 pt-12 pb-2 text-[#b1454a] text-[12px]">
                        About Us / 私たちに関しては{' '}
                    </p>
                    <p className="px-8 py-6 text-[28px] font-semibold">
                        Our mission is to bring true Japanese flavours to you.
                    </p>
                    <p className="px-8 text-[12px]">
                        We will continue to provide the experience of
                        Omotenashi, the Japanese mindset of hospitality, with
                        our shopping and dining for our customers.
                    </p>
                </div>
            </div>
        </main>
    )
}
