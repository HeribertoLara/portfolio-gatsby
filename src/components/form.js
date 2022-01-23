import React from 'react';
import {Button, FormControl, Input, InputLabel, TextField} from '@mui/material'
import { makeStyles } from '@mui/styles';

// import { borderColor } from '@mui/system'

const useStyle = makeStyles({
    btn:{
        background:'red',
        color:'white'

    }
})

const Form = () => {

    const clase = useStyle()

  return (
    <div>
        <form>
               <div className='grid-two mx-4'>

                    <div>
                        <div>
                            <FormControl 
                                sx={{
                                    color:'white',
                                    borderColor:'error.main',
                                    width:'100%',
                                    my:3
                                }}
                                color='warning'
                                focused >
                                <InputLabel htmlFor="my-input">Nombre</InputLabel>
                                <Input 
                                    sx={{
                                        color:'white'
                                    }}
                                    id="my-input" 
                                    aria-describedby="my-helper-text" />
                            </FormControl>
                        </div>
                        <div>
                            <FormControl 
                                sx={{
                                    borderColor:'error.main',
                                    width:'100%',
                                    my:2
                                }}
                                color='warning'
                                focused >
                                <InputLabel htmlFor="my-input">Email address</InputLabel>
                                <Input 
                                    id="my-input" aria-describedby="my-helper-text"
                                    sx={{
                                        color:'white'
                                    }} />
                            </FormControl>
                        </div>
                        <div>
                            <FormControl 
                                sx={{
                                    borderColor:'error.main',
                                    width:'100%',
                                    my:2
                                }}
                                color='warning'
                                focused >
                                <InputLabel htmlFor="my-input">Phone number</InputLabel>
                                <TextField 
                                    id="my-input" aria-describedby="my-helper-text"
                                    sx={{
                                        color:'white'
                                    }} />
                            </FormControl>
                        </div>
                    </div>
                    <div>

                        <FormControl 
                            sx={{
                                borderColor:'error.main',
                                width:'100%',
                                my:2
                            }}
                            color='warning'
                            focused >
                            <InputLabel htmlFor="my-input">Send your message</InputLabel>
                            <Input
                                
                                variant="outlined" 
                                multiline
                                focused
                                rows={8}
                                color= "warning"
                                id="my-input" aria-describedby="my-helper-text"
                                sx={{
                                    
                                    borderColor:'warning'
                                }} />

                        </FormControl>
                        
                    </div>
               </div>
               <Button className={clase.btn} > Enviar</Button>

           </form>
    </div>
    );
};

export default Form;
