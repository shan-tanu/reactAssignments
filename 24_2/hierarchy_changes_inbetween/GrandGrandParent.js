import React, { useState , createContext, useContext} from "react";
import GrandParent from "./GrandParent";

export var AppContext = createContext({
    village: "Trial",
    setVillage: (name) => {}
});

export default function GrandGrandParent() {
    var [village, setVillage] = useState("Xoxo");

    return (<AppContext.Provider value={{village, setVillage}}>
        <h1>GrandGrandParent uses name {village}</h1>
        <GrandParent/>
    </AppContext.Provider>)
} 

// function GrandParent() {
//     return (<>
//         <h1>I am GrandParent</h1>
//         <Parent/>
//     </>)
// } 

// function Parent() {
//     return (<>
//         <h1>I am Parent</h1>
//         <Children/>
//     </>)
// } 

// function Children() {
//     return (<>
//         <h1>I am Children</h1>
//         <GrandChildren/>
//     </>)
// } 

// function GrandChildren() {
//     var dataConsumer = useContext(AppContext);    
//     return <h1>Grand Children uses name {dataConsumer}</h1>
// } 