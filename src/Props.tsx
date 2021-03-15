import React, {useState} from 'react'; 
import TextField from './TextField' 
// 1. what items do the component need? 
// 2. function, var, whatever 
// 3. create a props in that component  // export interface ComponentProps {}
// 4. create that function inside that props // fn: (a: number, b:number) => number;
// 5. add props as type in that componnent // const UseRef: React.FC<ComponentProps> = ({fn}) => {
  // 6. add function, var, whatever as props parameter like above
  // 7. now every componnent that need that componnet will need to instantiate it, see line 27
  // 8. <ComponentName fn={add} />
  // 9. create the add method. const add = (a, b) ==> a+b;
  
 
const Props: React.FC = () => {  
   // object can be passed as a props, its type has to be defined
  const person = {
    name: 'Quan',
    age: 5
  }

  // function returns a number, can be passed as a props
  const add = (a: number, b:number):number => {
    return a + b;
  }

  return (
    <div> 
      {/* text, obj, fn are named in the other component */}
      <TextField text='hello' obj={person}  fn={add} />  
      <hr />
     
    </div>
  );
}

export default Props;
