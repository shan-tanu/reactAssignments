import { useContext } from "react";
import Children from "./Children";
import {AppContext} from "./GrandGrandParent";

export default function Parent() {
    var {village, setVillage} = useContext(AppContext);
    return (<>
        <h1>I am Parent. I have {village}. It will change to "Yoyo"</h1>
        <input type="button" value="Parent name Change" onClick={()=>setVillage("Yoyo")}/>
        <Children/>
    </>)
} 