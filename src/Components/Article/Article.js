import React from 'react'
import Paletts from '../Paletts/Paletts'
import { paletteHook } from '../../Hooks/Hooks'

function Article({ colors ,setAddPalette,addPalette}) {
    return (
        <article>
            <button onClick={() => paletteHook(
                addPalette,
                setAddPalette,
                colors)}
                className='add'
                >
               add palette
            </button>
            <Paletts palette={addPalette} />
        </article>
    )
}

export default Article
