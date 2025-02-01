 export default function ActorsComponant ({name}){

    const stylename = {
        margin: '20px',
        padding : '20px',
        border : 'solid 2px tomato',
        borderRadius: '10px'
      
      }


    return(
         <div style ={stylename} >
<li> name : {name}  </li>

         </div>
    )
 }