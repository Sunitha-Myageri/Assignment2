import { createContext, useState } from "react";
import ChildA from "./ChildA";


export const context=createContext(null);
const ParentCompo=()=>
{
    const [light,setLight]=useState(false);
    return (<>
    <context.Provider value={{light,setLight}}>

    <p>m parent</p>
    {light===true?<input type="button" value="ON"></input>:<input type="button" value="OFF"></input>
}
<ChildA></ChildA>
</context.Provider>

    </>);
}
export default ParentCompo;