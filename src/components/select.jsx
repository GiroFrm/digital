import  React  from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import Typography from '@mui/material/Typography';


export default function NativeSelectDemo({setInputValue}) {
  

   const handleValue =(e)=>{
    setInputValue(e)
     
   }

  return (
    <Box sx={{ width:200 }}>
      <FormControl sx={{ width:200}} >
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
         view
        </InputLabel>
        <NativeSelect 
          defaultValue={'All projects'}
          inputProps={{
          name: 'age',
          id: 'uncontrolled-native',
          }}
          sx={{fontWeight:700}}
          onChange={(e)=>handleValue(e.target.value)}
        >
        
          <option value={'All projects'}>All projects</option>
          <option value={'app'}>Apps</option>
          <option value={'community'}>Community</option>
          <option value={'digital marketing'}>Digital Marketing</option>
          <option value={'drupal'}>Drupal</option>
          <option value={'ecommerce'}>eCommerce</option>
          <option value={'featured'}>Featured</option>
          <option value={'google ads'}>Google Ads</option>
          <option value={'marketing'}>Marketing</option>
          <option value={'UI/UXDesign'}>UI / UX Design</option>
          <option value={'website'}>Websites</option>
          <option value={'wordpress'}>Wordpress</option>
         
        </NativeSelect>
      </FormControl>
    </Box>
  );
}