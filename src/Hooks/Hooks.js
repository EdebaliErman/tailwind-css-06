export const paletteHook = (palette, setPalette, colors) => {
    const newPalette = [...palette, <div
        className="palette"
        key={palette.length}
        style={{ backgroundColor: colors }}>
        <button className="copy" onClick={() => copyText(`${colors}`)}>

            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M13 7H7V5H13V7Z" fill="currentColor" />
                <path d="M13 11H7V9H13V11Z" fill="currentColor" />
                <path d="M7 15H13V13H7V15Z" fill="currentColor" />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3 19V1H17V5H21V23H7V19H3ZM15 17V3H5V17H15ZM17 7V19H9V21H19V7H17Z"
                    fill="currentColor"
                />
            </svg>
        </button>
        <button className="remove" onClick={() => remove(palette.length)}><svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M8 11C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13H16C16.5523 13 17 12.5523 17 12C17 11.4477 16.5523 11 16 11H8Z"
                fill="currentColor"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1 5C1 2.79086 2.79086 1 5 1H19C21.2091 1 23 2.79086 23 5V19C23 21.2091 21.2091 23 19 23H5C2.79086 23 1 21.2091 1 19V5ZM5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3Z"
                fill="currentColor"
            />
        </svg></button>
    </div>]
    setPalette(newPalette)


    const remove = (index) => {

        const newPalette = palette.filter((_, i) => i !== index)

        console.log(newPalette)
        setPalette(newPalette)
    }
    const copyText = (text) => {
        navigator.clipboard.writeText(text)
            .then(() => {
                console.log("copyalandı")
            })
            .catch(() => {
                console.error("copyalanmadı")
            })
    }

}