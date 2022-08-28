import { useContext } from "react";
import ChildB from "./ChildB";
import { context } from "./ParentComp";

const ChildA=()=>
{ 

    const {light,setLight}=useContext(context);
    return(<>
    <p>This is child A</p>
    {light===false?<input type="button" value="ON"></input>:<input type="button" value="OFF"></input>
}
<ChildB></ChildB>
    </>);
}
export default ChildA;