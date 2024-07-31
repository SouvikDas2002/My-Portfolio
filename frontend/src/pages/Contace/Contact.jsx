import { Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import Button from '../../components/Button/Button'
import Data from '../../utils/Data'

const Contact = () => {
  const [formData,setFormData]=useState({
    name:'',
    email:'',
    message:''
  })

  const handleChange=(e)=>{
    const {name,value}=e.target;
    setFormData({...formData,[name]:value});
  }
  
  const handleSubmit=async(e)=>{
    e.preventDefault();
    console.log(formData);
    const response=await fetch(`${import.meta.env.VITE_REACT_APP_API}/api/contact`,{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify(formData),
    })

    if(response.ok){
      alert('Message sent successfully');
      setFormData({name:'',email:'',message:''})
    }else{
      alert('Failed to send message! try again')
    }
  }

  return (
    <div className='container_shadow'>
      <Grid container className='section pt_45 pb_45'>
      <Grid container spacing={5}>
              <Grid item xs={12} lg={7}>
                <Grid container>
                  <Grid item className='section_title mb_30' xs={12}>
                    <span></span>
                    <Typography className='section_title_text'>Contact Form</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <form onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={6}>
                        <TextField fullWidth name='name' label="Name" variant='standard' value={formData.name} onChange={handleChange}/>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField fullWidth name='email' label="Email" variant='standard' value={formData.email} onChange={handleChange}/>
                      </Grid>
                      <Grid item xs={12} >
                        <TextField fullWidth name='message' label="Message" variant='standard' multiline rows={4} value={formData.message} onChange={handleChange}/>
                      </Grid>
                      <Grid item xs={12}>
                        <Button text={"Submit"} btntype={'submit'}/>
                      </Grid>
                    </Grid>
                    </form>
                  </Grid>
                </Grid>
              </Grid>
              
              <Grid item xs={12} lg={5}>
                <Grid container>
                  <Grid item className='section_title mb_30' xs={12}>
                    <span></span>
                    <Typography className='section_title_text'>Contact Information</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container>
                      <Grid item xs={12}>
                        <Typography className='contactsInfo'>
                          <span>Permanent Address: </span> {Data.address}
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography className='contactsInfo'>
                          <span>Current Address: </span> {Data.curraddress}
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography className='contactsInfo'>
                          <span>Phone: </span> {Data.phone}
                        </Typography>
                      </Grid>
                      <Grid item  xs={12}>
                        <Typography className='contactsInfo'>
                          <span>Email: </span> {Data.email}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            </Grid>
    </div>
  )
}

export default Contact
