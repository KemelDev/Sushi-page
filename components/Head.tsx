import Image from 'next/image'

export default function Head() {
    return (
        <main className="relative w-80 h-screen flex items-start ">
            <div className="bg-[#b1454a] pb-10">
                <h2 className="pt-4 pl-8 ">Suchiman</h2>
                <div>
                    <Image
                        src="/sushi-1.png"
                        alt="popular"
                        width={2080}
                        height={500}
                        className="z-20"
                    />
                </div>
                <h1 className="flex-col space-y-4 pb-5 pl-5 text-5xl font-extrabold">
                    <p>日</p>
                    <p>本 </p> <p>食</p>
                </h1>
            </div>
        </main>
    )
}
