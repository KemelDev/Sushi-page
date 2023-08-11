export default function Section({ children }: { children: React.ReactNode }) {
    return (
        <main className="bg-[#fff0de] relative w-80 max-h-full text-black ">
            {children}
        </main>
    )
}
