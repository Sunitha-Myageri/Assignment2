import { useContext, useState } from "react";
import { ApiData } from "./ApiData";

const ApiFilter=(props)=>
{
    
    
    
    const onChangeHandler=()=>
    {
        var x=document.getElementById("location");

        props.callback(x.value);
    }
    const GuestonChangeHandler=()=>
    {
        var y=document.getElementById("guest");
        props.callback(y.value);

    }
    return(
    <>
    
    <input type="text" id="location" placeholder="Search by Location or NoOfGuest" style={{width:'200px'}} onChange={onChangeHandler}></input>
    
    
    </>
    );
}
export default ApiFilter;