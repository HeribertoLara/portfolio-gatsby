
import React,{useState} from 'react'

import Layout from '../components/layout'

import CopyToClipboard from 'react-copy-to-clipboard'

// import { Link } from 'gatsby'


const Contact = () => {

    const socialData={
        email:'hlara9012@gmail.com',
        linkedIn: 'https://www.linkedin.com/in/heriberto-lara-26a50a213/',
        whatsaap:'+52 561583 9142',
        gitHub: 'https://github.com/HeribertoLara'
        
    }


    const [ email, setEmail ] = useState(socialData.email);
    const [ whatsap, setWhatsaap ] = useState(socialData.whatsaap);
 
    const [copy, setCopy] = useState(false);

    const textTransform = () =>{

        setEmail('Click toy copy my e-mail')

    }


    const textOriginal = () =>{
        setEmail('hlara9012@gmail.com')
    }

    const whatsTransform = () =>{ 

        setWhatsaap('Click to Copy whatsap')

    }
    
    const originalWhats = () =>{

        setWhatsaap('+52 561583 9142')

    }
    
    // const transforLinkedIn = () =>{

    //     setWhatsaap('+52 561583 9142')

    // }
    // const originalLinkedIn = () =>{

    //     setWhatsaap('+52 561583 9142')

    // }
    
    const copied = ()=>{

        setEmail('Copied to clipborad')
        setCopy(!copy)
        console.log(copy);
    }
    const copiedWhats = ()=>{

        setWhatsaap('Copied to clipborad')
        setCopy(!copy)
        console.log(copy);
    }

    return (
       <Layout>

            <div className='flex justify-center mt-24'>
               
                <h3 className="text-8xl text-white font-bold ">
                    Let's make<br/> something awesome
                </h3>
            </div>
            <div className='grid-two mt-24'>
                <div className=' '>
                    
                    <h2 className=' text-white text-center text-5xl my-16'> Contact</h2>
                    <p  className=' text-white m-4 p-4 text-xl border-2 border-rose-600'>
                    I'm seeking out opportunities to collaborate with companies / agencies / individuals, not just work for them. I want to bring my collective design experience to the table where we can work together to solve real business-problems in a way that optimizes all of our respective experience and knowledge.
                    </p>
                </div>
                <div className='mt-24'>

                    <div className=' flex justify-center m-auto'>

                        <p className='pt-2 border-double border-4 boder-red-600 text-red-600 w-32 h-32 rounded-full text-center text-8xl'>H</p><br/>
                    </div>
                        <p className='text-6xl text-red-600 text-center doble-font'> Heribeto lara</p>
                </div>
            </div>
            <CopyToClipboard text={socialData.email}>
                <div className="transition1 flex justify-center my-12">
                    <button className='text-white text-xl text-red-600 text-center'
                        onMouseOver={textTransform}
                        onMouseOut={textOriginal}
                        onFocus={()=>{return}}
                        onBlur={()=>{return}}
                        onClick={copied}
                        >
                           {email}
                    </button>
                </div>     
            </CopyToClipboard>
            <CopyToClipboard text={socialData.whatsaap}>
                <div className="transition1 flex justify-center my-12">
                    <button className='text-white text-xl text-red-600 text-center'
                        onMouseOver={whatsTransform}
                        onMouseOut={originalWhats}
                        onFocus={()=>{return}}
                        onBlur={()=>{return}}
                        onClick={copiedWhats}
                        >
                           {whatsap}
                    </button>
                </div>     
            </CopyToClipboard>
            {/* <Link to={socialData.linkedIn}>
                <div className="transition1 flex justify-center my-12">
                    <button className='text-white text-xl text-red-600 text-center'
                       
                       
                        >
                          linkedIn
                    </button>
                </div>     
            </Link>
            <Link to={socialData.gitHub}>
                <div className="transition1 flex justify-center my-12">
                    <button className='text-white text-xl text-red-600 text-center'
                       
                       
                        >
                          GitHub
                    </button>
                </div>     
            </Link> */}
       </Layout>
    )
}

export default Contact
