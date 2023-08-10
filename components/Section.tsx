export default function Section({ children }: { children: React.ReactNode }) {
    return (
        <main className="bg-[#fff0de] relative w-80 h-screen text-black">
            {children}
        </main>
    )
}
