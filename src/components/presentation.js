
import React, { useState } from 'react'
import Images from './images'
import { Link } from 'gatsby'
import './index.css'

const Presentation = () => {
    
    const [hello, setHello] = useState('Hello.' )

    const [iAm, setIAm] = useState('I am' )
    const [name, setName] = useState('Heriberto' )
 

    const nameTransform = ()=>{
            setName('Contact')
    }
    const iAmTransform = ()=>{
            setIAm('Work')
    }


    const helloTransform = ()=>{
            setHello('About me')
    }

    const originalTitle = ()=>{
        setHello('Hello.')
    }
    const originalIAm = ()=>{
        setIAm('I am')
    }
    const originalName = ()=>{
        setName('Heriberto!')
    }
  

    return (
        <div className='bg-black1 grid-two'>
            <div className='py-2 ml-12'>
                <div className='transition1 py-6 md:py-12 pb font-bold '>
                    <Link className='title text-white'
                        to='about-me'
                         onMouseOver={helloTransform}
                         onFocus={()=>{return}}
                         onMouseOut={originalTitle}
                         onBlur={()=>{return}}>
                            {hello} 
                    </Link>
                </div>
                
                <br/>
                <div className='transition1 py-6 md:py-12  font-bold'>
                    <Link className='title text-red-600'
                        to='work'
                         onMouseOver={iAmTransform}
                         onFocus={()=>{return}}
                         onMouseOut={originalIAm}
                         onBlur={()=>{return}}
                        >{iAm} 
                    </Link>
                </div>
                
                <br/>
                <div className='transition1 py-6 md:py-10 font-bold'>
                    <Link className='title text-red-600'
                        to='contact'
                         onMouseOver={nameTransform}
                         onFocus={()=>{return}}
                         onMouseOut={originalName}
                         onBlur={()=>{return}}
                        >{name} 
                    </Link>
                </div>
                
                <br/>
                <span className='maquina-escribir'>I'm web Developer! .</span>
            </div>

            <Images fileName="perfil.png" alt="perfil"/>
            
        </div>
    )
}

export default Presentation
