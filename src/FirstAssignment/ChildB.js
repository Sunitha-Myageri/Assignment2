import { useContext } from "react";
import { context } from "./ParentComp";

const ChildB=()=>
{
    const {light,setLight}=useContext(context);
    return(<>
    <p>This is child c</p>
    <input type="button" value="click me" onClick={()=>{setLight(!light)}} ></input>
    </>);
}
export default ChildB;