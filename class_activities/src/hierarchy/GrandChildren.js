import { useContext } from "react"
import { AppContext as Original } from "./GrandGrandParent"

export default function GrandChildren() {
    var {village} = useContext(Original);    
    return(<>
    <h1>Grand Children uses name {village}</h1>
    </>)
    
} 