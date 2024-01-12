
function Links({ setOpen }) {
    const items = [
        "Homepage",
        "ParallaxOne",
        "Contact"
        // "Portfolio",
        // "About"
    ]
    return (
        <div className="links flex-container">
            {items.map((item, index) =>
                <a href={`#${item}`} key={index} onClick={() => setOpen(prev => !prev)}>
                    {item}
                </a>
            )}

        </div>
    )
}

export default Links