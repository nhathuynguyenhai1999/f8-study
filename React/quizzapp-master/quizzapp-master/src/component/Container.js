import { useState } from 'react'



function Container({ handleStart }) {



    return (
        <div className='Container'>
            <div className='logo-game'>
                <div className='logo-start'>
                    <img src='./img/logostart.png' />
                </div>
                <div className='btn-start'>
                    <button
                        onClick={handleStart}
                    >
                        Start Quizzzz
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Container