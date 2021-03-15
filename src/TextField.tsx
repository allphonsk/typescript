import React from 'react'

export interface Person {
    name: string;
    age: number 
}
 
export interface Props {
    text: string;
    // age: number
    // fn: (addy: string) => string;
    fn: (a: number, b:number) => number;
    obj: Person
    // obj: Residence   
    // city: string;
    // country: string;
}
  
 

const Form:  React.FC<Props> = ({text, obj, fn}) => {
     
    return (
        <div>
            {'From props commponent; '} 
             {text} {" "} { obj.name} {" "} {obj.age}
        </div>
    )
}

export default Form
