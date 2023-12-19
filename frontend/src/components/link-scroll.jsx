
export default function LinkScroll({ children, Link, scrollPos }) {
    return (
        <>
            <Link onClick={() => {
                window.scrollTo(scrollPos.x, scrollPos.y);
            }}>
                {children}
            </Link>
        </>
    )
}