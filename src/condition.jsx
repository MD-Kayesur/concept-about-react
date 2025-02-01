// export default function Condition ({name,isDone}){
//     if(isDone === true){
//         return (
//             <h3>mme : {name}</h3>
//         )
//     }else{
//         return(
//             <h2>hahah: sorry</h2>
//         )
//     }
// }

// using  tarnarry oparators


//  export default function Tarnarry ({name , isDone}){
//     return(
// <h3> {isDone   ?   'me' : 'false '} { name}</h3>
//     )
// }


// using oparators &&

// export default function AndOparator ({name , isDone}){
//         return(
//     <h3> {name} , {isDone && 'thats you'}  </h3>
//         )
//     }

    // using oparators ||

// export default function OrOparator ({name , isDone}){
//     return(
// <h3> {name} , {isDone || 'thats you'}  </h3>
//     )
// }


// variable

export default function Variable ( {variableName, isdone}){
    let variable ;
     if( isdone){
         
         variable =  <li>{variableName} </li>
        
     }else{
        variable = <h1>false</h1>
     }
return (
    variable
)

}
    

