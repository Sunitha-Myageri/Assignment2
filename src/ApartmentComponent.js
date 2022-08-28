import { useState } from "react";
import { ApiData } from "./ApiData";
const ApartmentComponent=()=>
{
	
return(
<>
	{
        ApiData.map((item)=>
        {
            return(<>
            <img  style={{width:'80px' , height:'60px'}}src="Hotel1.jpg"></img>
            <p>{item.ApartmentName}</p>
            <p>{item.Ratings}</p>
            <p>{item.Type}</p>
            <p>{item.Location}</p>
            <p>{item.NoOfGuest}</p>
            <p>{item.SuperHost}</p>
            </>)
        })
    }
	
</>
);
}
export default ApartmentComponent;