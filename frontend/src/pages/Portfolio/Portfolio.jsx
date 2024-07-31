import React, { useState } from 'react'
import './Portfolio.css'
import { Card, CardActionArea, CardContent, CardMedia, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Grow, Tab, Typography } from '@mui/material'
import { Tabs } from '@mui/material'
import Data from '../../utils/Data';

const Portfolio = () => {

  const [tabValue, setTabValue] = useState('All')
  const [dialog, setDialog] = useState(false)

  return (
    <div className='container_shadow'>
    <Grid container className='section pb_45 pt_45'>

      {/* tabs */}
      <Grid item className='section_title mb_20' xs={12}>
        <span></span>
        <Typography className='section_title_text'>Portfolio</Typography>
      </Grid>

      <Grid item xs={12}>
        <Tabs value={tabValue} indicatorColor='white' className='custom_tabs' onChange={(event, newValue) => { console.log(newValue); setTabValue(newValue) }}>
          <Tab label='All' value='All' className={tabValue == "All" ? "tabs_item active" : " tabs_item"} />
          {[...new Set(Data.portfolio.map(item => item.tag))].map(
            (tag) => (
              <Tab label={tag} key={tag} value={tag} className={tabValue == tag ? "tabs_item active" : "tabs_item"} />
            )
          )}
        </Tabs>
      </Grid>

          {/* projects item */}
      <Grid item xs={12}>
        <Grid container spacing={3}>
          {Data.portfolio.map((item) => (
            <React.Fragment key={item.title}>
              {tabValue == item.tag || tabValue == "All" ? (
                <Grid item xs={12} sm={4}>
                  <Grow in timeout={1000}>
                    <Card className='customCard' onClick={() => setDialog(item)}>
                      <CardActionArea>
                        <CardMedia className='customCard_img' image={item.image} title={item.title} />
                        <CardContent>
                          <Typography className='customCard_title'>{item.title}</Typography>
                          <Typography variant={'body2'} className='customCard_caption'>{item.caption}</Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grow>
                </Grid>
              ) : null}
            </React.Fragment>
          ))}
        </Grid>
      </Grid>
          {/* {open dialog for every project} */}
      <Dialog open={dialog} onClose={() => setDialog(false)} className='dialog'>
        <DialogTitle onClose={() => setDialog(false)}>{dialog.title}</DialogTitle>
        <img src={dialog.image} alt="" className='dialog_img'/>
        <DialogContent>
          <Typography className='dialog_desc'>{dialog.description}</Typography>
        </DialogContent>
        <DialogActions className='dialog_action'>
          {dialog?.links?.map((x) => (
            <a href={x.link} target='_blank' className='dialog_link'>{x.text}</a>
          ))}
        </DialogActions>
      </Dialog>


    </Grid>
    </div>
  )
}

export default Portfolio
