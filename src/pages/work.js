import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const Work = () => {

    const  projectsFront = [
        {
            id:1,
            name:'FakeStore API',
            link:'https://peaceful-meninsky-e545f9.netlify.app/',
            repository:' https://github.com/HeribertoLara/pagina-el-ancla'
        },
        {
            id:2,
            name:"Blockchain Web Page(NFTS)",
            link:'https://pedantic-jennings-fea5bf.netlify.app/',
            Repository:'https://github.com/HeribertoLara/nfts'
        },
        {
            id:3,
            name:'Page Restaurant "El Ancla"',
            link:'https://peaceful-meninsky-e545f9.netlify.app/',
            repository:'https://github.com/HeribertoLara/pagina-el-ancla'
        }


    ]
     
    const  projectsBack = [
       {
        id:4,
        name:'CRUD with Django',
        Repository:'https://github.com/HeribertoLara/CRUD_Django'

       },
       {
        id:5,
        name:'My Movie App',
        link:'https://gitlab.com/hlara90121/my-movie-api'
       },
    ] 

    
    return (
     <Layout>
         <Seo title='work'/>
         <h1 className='uppercase text-center text-red-700 md:text-4xl'>Front-end</h1>
        
         {
            projectsFront.map((item)=>(
                <div key={item.id} className=' border-2 border-red-900 my-10 mx-4 md:mx-44  p-4 transition1 rounded'>
 
                    <h3 className='text-white text-5xl '>
                        {item.name}
                    </h3>
                    
                    <a  className='text-white border-2 border-red-800 p-2 m-2 hover:bg-red-800 rounded-full'
                        href={item.link}>
                        site
                    </a>
                    <a  className='text-white border-2 border-red-800 p-2 m-2 hover:bg-red-800 rounded-full'
                        href={item.repository}>
                         repository
                    </a>
                    
                </div>
            ))
         }
         <h1 className='uppercase text-center text-red-700 md:text-4xl'>Back-end</h1>
        
        {
           projectsBack.map((item)=>(
               <div key={item.id} className=' border-2 border-red-900 my-10 mx-4 md:mx-44  p-4 transition1 rounded'>

                   <h3 className='text-white text-5xl '>
                       {item.name}
                   </h3>
                   
                   <a  className='text-white border-2 border-red-800 p-2 m-2 hover:bg-red-800 rounded-full'
                       href={item.link}>
                       site
                   </a>
                   <a  className='text-white border-2 border-red-800 p-2 m-2 hover:bg-red-800 rounded-full'
                       href={item.repository}>
                        repository
                   </a>
                   
               </div>
           ))
        }
        
     </Layout>
    )
}

export default Work
