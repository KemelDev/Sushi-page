import Image from 'next/image'

export default function Head() {
    return (
        <main className="w-80 h-80 flex items-start">
            <div>
                <Image
                    src="/popular_bg.png"
                    alt="popular"
                    width={800}
                    height={800}
                />

                <h2>Suchiman</h2>
            </div>
        </main>
    )
}
