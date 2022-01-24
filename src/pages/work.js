import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const Work = () => {

    const  projects = [
        {
            name: 'Crud of task with firestore',
            link: 'https://crud-udemy-react-8d445.web.app/',
            repository: 'https://github.com/HeribertoLara/CrudFireBase.git'
        },
        {
            name:'Page Restaurant "El Ancla"',
            link:'https://peaceful-meninsky-e545f9.netlify.app/',
            repository:' https://github.com/HeribertoLara/pagina-el-ancla'
        }


    ] 
    
    return (
     <Layout>
         <Seo title='work'/>
        
         {
            projects.map((item,i)=>(
                <div key={i} className=' border-2 border-red-900 my-10 mx-44  p-4 transition1 rounded'>
 
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
