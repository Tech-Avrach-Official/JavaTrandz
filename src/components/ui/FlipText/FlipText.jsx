import React from 'react'
import './FlipText.css'

const FlipText = () => {
    // console.log(flipText)
    return (
        <div className='division'>
            <div class="wrapper">
            {/* <h1 className='text-3xl md:text-[45px] md:mt-10 font-bold text-white md:leading-[55px] tracking-tight'>India's best tech <br />
            learning</h1> */}
            <h1 className='text-3xl text-white'>India's best tech</h1>
                <div class="words">
                  {/* {  fliptext && 
                    fliptext.map((word, index) =>(
                        <span className='hello' key={index}>{word}</span>
                    ))} */}
                    <span className='hello'>fantastic</span>
                    <span className='hello'>interesting</span>
                    <span className='hello'>awesome</span>
                    <span className='hello'>incredible</span>
                    <span className='hello'>fantastic</span>
                </div>
            </div>

        </div>
    )
}

export default FlipText