import { ReactNode } from "react";

export default function SocialLink({ children, url }: { children: ReactNode, url: string }) {
    return (
        <a href={url} target="_blank" className="hover:scale-125 transition-all duration-300 ">
            {children}
        </a>
    )
}