import * as React from 'react';
import Card from '@mui/material/Card';
import '../App.css';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';




export default function ImgMediaCard({image,title}) {
  
  return (
    <Card sx={{ Width: 'fit-content', minHeight:'400', cursor:'pointer'}} className="text" >
      <CardMedia
        component="img"
        alt="green iguana"
        height="300"
        image={image}
         cursor='pointer'
         className='hover'
      />
      <CardContent >
        <Typography gutterBottom variant="h6" align="left" fontWeight={700} className='text' className="title" >
          {title}
        </Typography>
        <Typography variant="body1" 
        align="left" marginTop={-1} 
        fontWeight={700} 
        color="text.secondary"
        className='font-size'
        >
          Website Development, Drupal, Bootstrap,UI/UX Design
        </Typography>
      </CardContent>
      
    </Card>
    
  );
}