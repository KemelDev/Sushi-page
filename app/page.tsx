import Image from 'next/image'

const a = 5

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
                <h1>Hello this is the Sushi-man web page</h1>
                <h2> Un cambio para comparar en github</h2>
            </div>
        </main>
    )
}
