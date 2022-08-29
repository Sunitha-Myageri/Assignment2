import { createContext, useState } from "react";
import { unstable_renderSubtreeIntoContainer } from "react-dom";
import { ApiData } from "./ApiData";
import ApiFilter from "./ApiFilter";
import RatingComp from "./Ratingcomp";
export const context=createContext(null);
const HotelComponent=()=>
{
    
    const [data,setData]=useState(ApiData);
    const [query,setQuery]=useState("");
    const [guestquery,setGuestQuery]=useState("");
    const callback=(input)=>
    {
        setQuery(input);
       
    }
	
return(
<>
<h2 style={{color:'Blue',textAlign:'center'}}>Find your Comfort Here</h2>
<div style={{marginLeft:'42%'}}>
<ApiFilter  callback={callback}></ApiFilter>
</div>
<br></br>
<br></br>
	{
    data.filter((item)=>{
        return(
            item.Location.includes(query) ||
            item.NoOfGuest.includes(query)
       )
    }) .map((item)=>
        {
            return(
            <>
            
            <div style={{float:'left', width:'33%'}} key={item.id}>
                
            
            <div style={{width:'100%'}}>
            <img  style={{width:'350px' , height:'200px'}}src={item.Image+".jpg"}></img>
            </div>
            <div style={{float:'left' }}>
            <p>Hotel Name:{item.ApartmentName}</p>
            <p>Ratings:{item.Ratings}</p>            
            <p>Type:{item.Type}</p>
            </div>
            <div style={{float:'left',marginLeft:'30px'}}>
            <p>Location:{item.Location}</p>
            <p>Number of Guests:{item.NoOfGuest}</p>
            <p>SuperHost</p>
            </div>
            </div>
            
            </>)
        })
    }
    
	
</>
);
}
export default HotelComponent;