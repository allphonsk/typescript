import React, { useState } from 'react';

//
interface Car {
  text: string;
}

const UseState: React.FC = () => {

  // const [count, setCount] = useState<number>();
  // const [count, setCount] = useState<number>(0);
  // const [count, setCount] = useState<number | null | undefined>(0)

  // OBJECT
  // const [obj, setObj] = useState<{text: string}>();

  // const [obj, setObj] = useState<{text: string}>({text:'quan'}); //
  const [obj, setObj] = useState<Car>({ text: 'quan' }); // using interface
 
  // useEffect(() => {
  //   setObj({ text: 'cris' })
  // }, [])
  



  return (
    <div>
      {/* text, obj, fn are named in the other component */} 
      {'From UseState commponent: '} {obj.text}
      <hr />
    </div>
  );
}

export default UseState;

