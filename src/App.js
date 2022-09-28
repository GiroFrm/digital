import React,{useState} from 'react';

import  ImgMediaCard  from './components/card';
import  NativeSelectDemo from './components/select'
import './App.css';
import { Grid } from "@mui/material"
import {Box} from "@mui/material"

const projects= [

  {id:1, type:["website","wordpress","website","drupal", "featured", "UI/UXDesign"], image:"https://digital8.com.au/wp-content/uploads/2022/05/ato.jpg",title:"Australian tax office"},
 
  {id:2, type:["website","","featured", "UI/UXDesign" ], image:"https://digital8.com.au/wp-content/uploads/2022/05/bond.jpg",title:" Bond University", cap:"Website Development, React, UX/UI Design"},
  
  {id:3, type:[20,"app","featured","UI/UXDesign"], image:"https://digital8.com.au/wp-content/uploads/2022/05/planby_app.jpg",title:"CWAATSICH", cap:"App Development, React Native, UI/UX Design"},
  
  {id:4, type:["website","","drupal","featured",  "UI/UXDesign"], image:"https://digital8.com.au/wp-content/uploads/2022/06/template_box.jpg",title:" Argent Australia", cap:"Website Development, Drupal, UI/UX Design"},
  
  {id:5, type:["wordpress","website", "featured", "UI/UXDesign"], image:"https://digital8.com.au/wp-content/uploads/2022/06/Aus-Teletrial-Box-Image.jpg",title:"Queensland Health", cap:"Website Development, UI/UX Design, WordPress"},
  
  {id:6, type:["wordpress","", "featured", "UI/UXDesign"], image:"https://digital8.com.au/wp-content/uploads/2021/03/RSA-1-Webthumb.jpg",title:" Render Systems Australia", cap:"Website Development, UI/UX Design"},
  
  {id:7, type:["wordpress","featured","UI/UXDesign"], image:"https://digital8.com.au/wp-content/uploads/2020/10/river-sands-2.jpg",title:" River Sands", cap:""},
 
  {id:8, type:["wordpress",,"UI/UXDesign"], image:"https://digital8.com.au/wp-content/uploads/2020/08/emprac.jpg",title:" eMHprac", cap:""},
  
  {id:9, type:["wordpress","featured","UI/UXDesign"], image:"https://digital8.com.au/wp-content/uploads/2020/08/pcc4u-2-copy.jpg",title:"PCC4U: QUT Project", cap:"WordPress Web Design, UI/UX Design"},
  
  {id:10, type:["wordpress","","ecommerce", "google ads","UI/UXDesign"], image:"https://digital8.com.au/wp-content/uploads/2020/08/Home-guardian.jpg",title:" HomeGuardian.ai", cap:"WordPress Ecommerce, Marketing, Google Ads"},
  
  {id:11, type:["wordpress", "digital marketing","UI/UXDesign"], image:"https://digital8.com.au/wp-content/uploads/2020/08/Dream-rides.jpg",title:" Dream Rides ", cap:"WordPress Web Design, Digital Marketing"},
  
  {id:12, type:["","ecommerce", "marketing","UI/UXDesign"], image:"https://digital8.com.au/wp-content/uploads/2020/06/the-closet.jpg",title:"The Closet", cap:"UI/UX design, eCommerce &amp; marketing launch campaign"},
  
  {id:13, type:["", "digital marketing"], image:"https://digital8.com.au/wp-content/uploads/2019/12/tshirtmill-banner.jpg",title:"The Tshirt Mill", cap:"Organic social &amp; Google ads"},
  
  {id:14, type:["website","community","UI/UXDesign"], image:"https://digital8.com.au/wp-content/uploads/2019/11/beddown.jpg",title:"Beddown", cap:"web design solution, Design"},
  
  {id:15, type:["website","", "digital marketing","UI/UXDesign"], image:"https://digital8.com.au/wp-content/uploads/2019/11/LMM.png",title:" Lifestyle Medicine Man", cap:"Web Design Solution &amp; Digital Strategy"},
  
  {id:16, type:["website","app", "digital marketing","UI/UXDesign"], image:"https://digital8.com.au/wp-content/uploads/2019/11/sos.jpg",title:"SOS2US", cap:"app development, design, social"},
  
  
  {id:17, type:["wordpress","app"], image:"https://digital8.com.au/wp-content/uploads/2019/11/juiced-tv.jpg",title:"Juiced TV", cap:"app development, WordPress website"},
  
  {id:18, type:["app","community","featured"], image:"https://digital8.com.au/wp-content/uploads/2019/12/natureplay.jpg",title:" Nature Play", cap:"App Development"},

  {id:19, type:["website","UI/UXDesign"], image:"https://digital8.com.au/wp-content/uploads/2019/08/grow-1.jpg",title:" Grow", cap:"web design solution &amp; Design"},
  
  {id:20, type:["website","UI/UXDesign"], image:"https://digital8.com.au/wp-content/uploads/2019/11/hirerep.jpg",title:" Hire Republic ", cap:"website, design"},
  
  {id:21, type:["website","UI/UXDesign"], image:"https://digital8.com.au/wp-content/uploads/2019/11/BITS.jpg",title:" BITS Technology Group", cap:"web design solution"},
  
  {id:22, type:["website","featured","drupal"], image:"https://digital8.com.au/wp-content/uploads/2019/11/advance-qld.jpg",title:" Advance Queensland", cap:">web development"},

  {id:23, type:["app", "community","featured","UI/UXDesign"], image:"https://digital8.com.au/wp-content/uploads/2019/08/SwapU.jpg",title:" SwapU", cap:"app, design, digital solution"},
  
  {id:24, type:["website","app", "drupal"], image:"https://digital8.com.au/wp-content/uploads/2019/11/liquorlegends.jpg",title:" Liquor Legends", cap:"Website"},
  
  {id:25, type:["website","featured", "digital marketing"], image:"https://digital8.com.au/wp-content/uploads/2019/11/GS.jpg",title:" Goodstart Early Learning ", cap:"web development &amp; digital solution"},
  
  {id:26, type:["website","featured"], image:"https://digital8.com.au/wp-content/uploads/2016/01/PC-Case-Gear.jpg",title:" PC Case Gear", cap:"E-Commerce Website"},
  
  {id:27, type:["website","drupal"], image:"https://digital8.com.au/wp-content/uploads/2019/12/Coronis.jpg",title:"Coronis Realty", cap:"Web design solution &amp; digital solution"},

  
];

function App() {
  const [inputValue, setInputValue] = useState("All projects")

   const nInput= inputValue
   
   
 
  return (
    <>
    
    <Box
    sx={{height: 70, 
         display:"flex",
         justifyContent:"center",
     }}
    >
    <NativeSelectDemo setInputValue={setInputValue} />
    </Box>
      <Grid container spacing={2}>
       
    
    { projects.filter((val)=>{
    if(nInput=="All projects"){
      
      return val;
    }
else 
if( val.type.includes(nInput)){
  return val;
}
}).map((element, index)=>
<Grid key ={element.id} item xs={12} sm={6} md={4}>
<ImgMediaCard image={element.image}
 title={element.title} 
 cap={element.cap}

 />
</Grid>
 
)

} 
     </Grid>
     
    </>
  );
}

export default App;
