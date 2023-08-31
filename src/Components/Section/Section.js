import React from 'react'

function Section({ color, setColor }) {

    return (
        <section>

            <h1 className='text-6xl m-4 italic font-mono text-sky-100'>Color Palets</h1>

            <div className='flex justify-between justify-center gap-12 text-4xl text-cyan-300  font-mono font-sans italic '>
                <h1  >Color Select</h1>
                <h1 >Color Write</h1>
            </div>
            <div className='flex justify-center items-center gap-12'>
                <input type='color' className='color-hex' placeholder='You write colors..' onChange={e => setColor(e.target.value)} value={color} />
                <input type='text' className="text-hex" onChange={e => setColor(e.target.value)} />
            </div>
        </section>
    )
}

export default Section
