import { useEffect } from "react"

export default function PageLayout({children, title}) {
    
    useEffect(() => {
        if (title) {
            document.title = title;
        }
    }, []);

    return (
        <>
            {children}
        </>
    )
}