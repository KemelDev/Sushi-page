import Image from 'next/image'

export default function Article() {
    return (
        <main className="pt-24 z-10">
            <h1 className="flex justify-center items-center font-bold text-4xl py-2">
                Feel the taste of
            </h1>
            <h1 className="flex justify-center items-center font-bold text-4xl">
                Japanese Food
            </h1>
            <h3 className="text-xs px-16 py-6">
                Feel the taste of the most popular Japanese foods from anywhere
                and anytime
            </h3>
            <div className="flex justify-center space-x-4">
                <button className="bg-slate-800 text-slate-50 text-xs px-4 py-2 rounded-full">
                    Order now
                </button>

                <button className="flex text-xs py-2">
                    <Image
                        src="/play-circle.svg"
                        alt="popular"
                        width={20}
                        height={20}
                        className="justify-center"
                    />
                    How to order
                </button>
            </div>
            <div className="bg-white mt-40 flex justify-center items-center px-4 py-4 z-0">
                <h1 className="text-3xl">24k+</h1>
                <div className="flex flex-col text-xs pr-4">
                    <h3>Happy</h3>
                    <h3>Customers</h3>
                </div>
                <div className="bg-slate-800 w-10 z-30 px-2"></div>
                <Image
                    src="/user.png"
                    alt="popular"
                    width={50}
                    height={10}
                    className="bg-auto"
                />
                <h3 className="text-[8px]">
                    “This is the best Japanese food delivery service that ever
                    existed.”
                </h3>
            </div>
        </main>
    )
}
