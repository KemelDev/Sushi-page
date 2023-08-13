import Image from 'next/image'

export default function PopularFood() {
    return (
        <div className="flex flex-col justify-center content-center items-center h-[520px] w-[620px] bg-[#b1454a] relative z-10">
            <Image
                src="/popular_bg.png"
                alt="popular"
                width={700}
                height={700}
                className="bg-contain absolute"
            />
            <h1 className="font-bold text-[28px] mt-1 z-20">
                Popular Food / 人気{' '}
            </h1>
            <ul className="flex flex-wrap  z-20">
                <li className="popularfood-list">All</li>
                <li className="popularfood-list">Sushi</li>
                <li className="popularfood-list">Ramen</li>
                <li className="popularfood-list">Udon</li>
                <li className="popularfood-list">Dangoo</li>
                <li className="popularfood-list">Others</li>
            </ul>
            <section className="flex items-center content-">
                <div className="h-[140px] w-[140px]  bg-slate-red-50 rounded-lg border-2 text-white text-[14px] relative">
                    <div className="flex flex-col items-center justify-center content-center">
                        <Image
                            src="/sushi-10.png"
                            alt="popular"
                            width={50}
                            height={50}
                            className="relative my-4"
                        />

                        <h2>Ramen Legendo</h2>
                    </div>
                    <div className="flex justify-between mx-2 py-4 relative  ">
                        <p className="flex">
                            <Image
                                src="/star.svg"
                                alt="popular"
                                width={15}
                                height={15}
                                className="relative"
                            />
                            4.8
                        </p>
                        <p>$21.00</p>
                    </div>
                </div>
                <div className="h-[180px] w-[180px]  bg-slate-50 rounded-lg text-black relative">
                    <div className="flex flex-col items-center justify-center content-center">
                        <Image
                            src="/sushi-11.png"
                            alt="popular"
                            width={100}
                            height={100}
                            className="relative my-4"
                        />

                        <h2>Originale Sushi</h2>
                    </div>
                    <div className="flex justify-between mx-8 py-4 relative  ">
                        <p className="flex">
                            <Image
                                src="/star.svg"
                                alt="popular"
                                width={15}
                                height={15}
                                className="relative"
                            />
                            4.8
                        </p>
                        <p>$21.00</p>
                    </div>
                </div>
                <div className="h-[140px] w-[140px]  bg-slate-red-50 rounded-lg border-2 text-white text-[14px] relative">
                    <div className="flex flex-col items-center justify-center content-center">
                        <Image
                            src="/sushi-12.png"
                            alt="popular"
                            width={50}
                            height={50}
                            className="relative my-4"
                        />

                        <h2>Chezu Sushi</h2>
                    </div>
                    <div className="flex justify-between mx-2 py-4 relative  ">
                        <p className="flex">
                            <Image
                                src="/star.svg"
                                alt="popular"
                                width={15}
                                height={15}
                                className="relative"
                            />
                            4.8
                        </p>
                        <p>$21.00</p>
                    </div>
                </div>
            </section>
            <button className="flex items-center bg-slate-800 text-slate-50 text-xs px-4 py-2 mx-4 rounded-full z-20">
                Explore Food
                <Image
                    src="/arrow-right.svg"
                    alt="popular"
                    width={10}
                    height={10}
                    className="bg-contain py-2 ml-5"
                />
            </button>
        </div>
    )
}
