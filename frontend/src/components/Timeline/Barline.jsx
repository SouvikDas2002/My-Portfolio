import React from 'react'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Typography } from '@mui/material';
import './Barline.css'

export const CustomBarline = () => {
    return(
    <TimelineSeparator className={'separator'}>
        <TimelineDot variant={'outlined'} className={'timeline_dot_1'} />
        <TimelineConnector />
    </TimelineSeparator>
    )
}
const Barline = ({ title, icon, children }) => {
    // console.log(children);
    return (
        <Timeline className={'timeline'}>
            <TimelineItem className={'timeline_firstitem'}>
                <TimelineSeparator>
                    <TimelineDot className={'timeline_dot'}>{icon}</TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography variant='h6' className={'timeline_header'}>
                        {title}
                    </Typography>
                </TimelineContent>
            </TimelineItem>

            {/* <TimelineItem>
                <CustomBarline/>
                <TimelineContent>
                    <Typography>
                        <span>{title}</span>
                    </Typography>
                </TimelineContent>
            </TimelineItem> */}
            {children}

        </Timeline>
    )
};

export default Barline
