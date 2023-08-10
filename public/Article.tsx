import Image from 'next/image'

export default function Article() {
    return (
        <main className="pt-24">
            <h1 className="flex justify-center items-center font-bold">
                Feel the taste of
            </h1>
            <h1 className="flex justify-center items-center font-bold">
                Japanese Food
            </h1>
            <h3 className="text-xs px-16 py-6">
                Feel the taste of the most popular Japanese foods from anywhere
                and anytime
            </h3>
            <div>
                <button className="bg-slate-800 text-slate-50 text-xs px-4 py-2 rounded-full">
                    Order now
                </button>

                <button>
                    <Image
                        src="/search.svg"
                        alt="popular"
                        width={20}
                        height={20}
                    />
                    How to order
                </button>
            </div>
        </main>
    )
}
