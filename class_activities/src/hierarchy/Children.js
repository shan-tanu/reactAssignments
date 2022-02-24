import { useContext } from "react";
import GrandChildren from "./GrandChildren";
import { AppContext } from "./GrandGrandParent";

export default function Children() {
    var {setVillage} = useContext(AppContext);
    return (<>
        <h1>I am Children. I will restore it to "Xoxo"</h1>
        <input type="button" value="Restore village" onClick={()=>setVillage("Xoxo")} />
        <GrandChildren/>
    </>)
} 