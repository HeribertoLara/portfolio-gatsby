import React from 'react'

import Slide from 'react-reveal/Slide';


import Images from './images'

const Me = () => {
    return (
        <div className='bg-black text-white'>
            <div className='grid-two'>
            <Slide left>
            <Images fileName="DSC_1968.png" clase="cap-me"/>
            </Slide>
            <div className='border-4 border-double border-rose-900  mt-44 mx-4 md:mx-24 rounded'>
                <p className='py-36 md:px-10 text-center text-xl break-normal'>
                <Slide right cascade className="breaknormal"> 
                    Hello I am Jesus Heriberto Lara Juárez and I am a full Stack web developer.
                    In 2020 I studied a full web development bootcamp at Academlo where I learned various front-end and back-end technologies
                </Slide>
                </p>
                
            </div>
            </div>
            <div className=' mt-24'>
                <h2 className='uppercase text-center text-red-700 md:text-4xl'> Front-end technologies </h2>

                <div className=' container-blur '>
                    <div  className='w-full grid-four mb-10 px-2 md:px-24'>
                        <Images fileName="react1.png" clase="logo-tech" alt="react"/>
                        <Images fileName="css-3.png" clase="logo-tech" alt="css"/>
                        <Images fileName="js.png" clase="logo-tech" alt="js"/>
                        <Images fileName="html-5.png" clase="logo-tech" alt="html"/>

                    </div>

                </div>
                <h2 className='uppercase text-center text-red-700 md:text-4xl'> Others technologies </h2>

                <div className=' '>
                    <div  className='w-full grid-four mb-10 px-2 md:px-24'>
                        <Images fileName="python.png" clase="logo-tech g2" alt="react"/>
                        <Images fileName="gopng.png" clase="logo-tech g3" alt="css"/>
                    </div>

                </div>
                
                

            </div> 
        </div>
    )
}

export default Me