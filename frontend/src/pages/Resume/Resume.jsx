import { Grid, Paper,TextField, Typography } from '@mui/material'
import React from 'react'
import Data from '../../utils/Data'
import Barline, { CustomBarline } from '../../components/Timeline/Barline'
import { School, Work } from '@mui/icons-material'
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineContent from '@mui/lab/TimelineContent';
import { TimelineDot } from '@mui/lab'
import './Resume.css'
import Button from '../../components/Button/Button'

const Resume = () => {
  return (
    <div className='container_shadow'>
      <Grid container className='section pb_45 pt_45'>
        <Grid item className='section_title mb_30' xs={12}>
          <span></span>
          <Typography className='section_title_text'>About Me</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant='body2' className='aboutme'>{Data.about}</Typography>
        </Grid>
      </Grid>

      <Grid container className='section pb_45'>
        <Grid item className='section_title mb_30' xs={12}>
          <span></span>
          <Typography className='section_title_text'>Resume</Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container className='resume_timeline'>
            {/* projects */}
            <Grid item sm={12} md={6}>
              <Barline title={'PROJECTS'} icon={<Work />}>
                {Data.projects.map((x) => {
                  return (
                    <TimelineItem key={x.title}>
                      <CustomBarline />
                      <TimelineContent className='timeline_content'>
                        <Typography className={'timeline_title'}>
                          {x.title}
                        </Typography>
                        <Typography variant='caption' className={'timeline_date'}>
                          {x.date}
                        </Typography>
                        <Typography variant='body2' className={'timeline_desc'}>
                          {x.description}
                        </Typography>
                      </TimelineContent>
                    </TimelineItem>
                  )
                })}
              </Barline>
            </Grid>

            {/* education */}
            <Grid item sm={12} md={6}>
              <Barline title={'EDUCATION'} icon={<School />}>
                {Data.education.map((x) => {
                  return (
                    <TimelineItem key={x.title}>
                      <CustomBarline />
                      <TimelineContent className='timeline_content'>
                        <Typography className={'timeline_title'}>
                          {x.title}
                        </Typography>
                        {x.description &&
                          <Typography variant='body2' className={'timeline_desc'}>
                            {x.description}
                          </Typography>
                        }
                        <Typography variant='caption' className={'timeline_date'}>
                          {x.date}
                        </Typography>
                        <Typography variant='body2' className={'timeline_date'}>
                          {x.marks}
                        </Typography>
                      </TimelineContent>
                    </TimelineItem>
                  )
                })}
              </Barline>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* skills */}
      <Grid container className='section graybg pb_45 p_50'>
        <Grid item className='section_title mb_30' xs={12}>
          <span></span>
          <Typography className='section_title_text'>Skills</Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container justify="space-between" spacing={3}>
            {
              Data.skills.map((x) => {
                return (
                  <Grid item xs={12} sm={6} md={3} key={x.title}>
                    <Paper elevation={0} className='skill'>
                      <Typography variant='h6' className='skill_title'>{x.title}</Typography>
                      {x.description.map((y) => (
                        <Typography variant='body2' className='skill_desc' key={y}>
                          <TimelineDot variant={'outlined'} className='timeline_dot' />
                          {y}
                        </Typography>
                      ))}
                    </Paper>
                  </Grid>
                )
              })
            }
          </Grid>
        </Grid>
      </Grid>

      {/* conatct */}
      
    </div>
  )
}

export default Resume
