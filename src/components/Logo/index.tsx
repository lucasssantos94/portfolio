import Link from "next/link"

export default function Logo() {
    return (
        <Link href={'/'} className="text-2xl">
            {'< Lucas / >'}
        </Link>
    )
}