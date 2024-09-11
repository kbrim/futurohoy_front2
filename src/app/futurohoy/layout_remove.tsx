import FuturoHoyAppBar from "../components/FuturoHoyAppBar"

export default function FuturoHoyLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <section>
            <FuturoHoyAppBar />
            {children}
        </section>
    )
}