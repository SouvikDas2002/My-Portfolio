import React from 'react'
import { Typography } from '@mui/material'

import './profile.css'
import Barline, { CustomBarline } from '../Timeline/Barline'
import Data from '../../utils/Data'
import { Download, FacebookOutlined, GitHub, LinkedIn, PersonOutlineOutlined } from '@mui/icons-material'
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineItem from '@mui/lab/TimelineItem';
import Button from '../Button/Button'

const iconMap = {
  FacebookOutlined: <FacebookOutlined />,
  GitHub: <GitHub />,
  LinkedIn: <LinkedIn />
};
export const CustomTimelineItem=({title,text,link})=>{
  return(
  <TimelineItem>
    <CustomBarline/> 
    <TimelineContent>
      {link?(
        <Typography style={{display:'flex'}}>
          <span style={{fontWeight:'bold'}}>{title}:</span>
          <a href={link} target='_blank' style={{textDecoration:'none',color:'link',cursor:'pointer'}}>{"- "}{text}</a>
        </Typography>
      ):(
        <Typography>
          <b>{title}: </b>{text}
        </Typography>
      )}
    </TimelineContent>
  </TimelineItem>
  )
}

const Profile = () => {
  return (
    <div className='profile sticky-top'>
      <div className='profile_name'>
        <Typography className='name'>{Data.name}</Typography>
        <Typography className='title'>{Data.title}</Typography>
      </div>
      <figure className='profile_image'>
        <img src='./SouvikDas.jpg' alt=''/>
      </figure>
      <div className='profile_information'>
        <Barline icon={<PersonOutlineOutlined/>}>
        <CustomTimelineItem title={"Name"} text={Data.name}/>
        <CustomTimelineItem title="Birth Date" text={Data.DoB}/>
        <CustomTimelineItem title="Email" text={Data.email}/>
        <CustomTimelineItem title="Facebook" text={Data.socials.facebook.text} link={Data.socials.facebook.link}/>
        <CustomTimelineItem title="LinkedIn" text={Data.socials.linkedin.text} link={Data.socials.linkedin.link}/>
        <CustomTimelineItem title="GitHub" text={Data.socials.github.text} link={Data.socials.github.link}/>
        </Barline>
        <br/>
        <div className='button_container' >
        <Button text={"Download CV"} icon={<Download/>} link={"/SouvikDas-B.Tech-CSE.pdf"}/>
        </div>
      </div>
    </div>
  )
}

export default Profile
