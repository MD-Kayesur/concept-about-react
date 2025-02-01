 
import './App.css'
import MainIdea from './main-idea';
import GirlFriend from './gf';
import GirlFriends from './gfs';
import Condition from './condition';
  import Tarnarry from './condition';
  import OrOparator from './condition';
  import AndOparator from './condition';
  import Variable from './condition';
import SingersComponant from './singrs-obhect';
  import ActorsComponant from './Actors-arry';
function App() {
   const Singers = [
    {name : 'bando', contact : 20},
    {name : 'anupom', contact : 40},
    {name : 'afranniso', contact : 50},
    {name : 'apurbo', contact : 100}
   ]
  const Actors = ['kayes', 'moklas', 'shojon' ,'aktarul','mufassir'] 
  return (
    <>
 


      <MainIdea   name=' MD.Kayesur' ></MainIdea>
 {
  Singers.map(singer => <SingersComponant name= {singer.name} contact = {singer.contact}></SingersComponant>)
 }
      <h1>Vite + React</h1>
      <ActorsComponant name = 'hahahah'></ActorsComponant>
       
      {
        Actors.map(Actor => <ActorsComponant name = {Actor}></ActorsComponant>)
      }




      <Variable isdone={true} variableName ='hahahah'></Variable>
<AndOparator name="evangila" isDone={false}></AndOparator>
      <OrOparator name='prtamik boy' isDone={false}></OrOparator>
<Condition isDone = {true} name = 'kayes'></Condition>
<Tarnarry isDone={true} name='crazyboy' ></Tarnarry>

      <GirlFriends id='maria' age ='23' done={true}></GirlFriends>
        <GirlFriend name ="eva"></GirlFriend>
        <GirlFriend name ="humaira" age='58'></GirlFriend>
       <Person></Person>
       <Student></Student>
       <Students></Students>
<Device name ="laptop" price ='34'></Device>
<Device name ="mobile" price =' 20'></Device>
<Device name ="mobile" price =' 20'></Device>
<Device name ="mobile" price =' 20'></Device>
<Device name ="mobile" price =' 20'></Device>

    </>
  )
}

function Device ( {name, price}){

  
  return (
    <h2>this is : { name} price : {price}</h2>
     
   
  )
}


function Person (){

  const age = 45;
  const onePerson = {name:`kayes`, weight : 67};
  return(
    <h3>my name {onePerson.name} and weight {onePerson.weight} age {age}</h3>
  )
}

function Student ( ){
  return (
    // added css style from css file
    <div className='student'>
<h1>age:</h1>
<h2>me:</h2>
    </div>
  )
}

// direct create css style


function Students ( ){
// direct create css style and it will be like object
 
  const createStyle = {
    margin : `20px`,
    padding : `20px`,
    // style will write together and 
    // seconed words first later will be camalcase
    borderRadius: '20px',
    border: '2px solid tomato'
  }
  return (
    // added css style from css file
    <div  style={createStyle}>
<h1>age:</h1>
<h2>me:</h2>
    </div>
  )
}

export default App
