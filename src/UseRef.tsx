import React, { useRef } from 'react';
import TextField from './TextField'

//
interface UseRefProps {
  fun: (event: React.ChangeEvent<HTMLInputElement>) => void; 
}


const UseRef: React.FC<UseRefProps> = ({fun}) => {
  // i start like const inputRef = useRef<string>(null);
  // jsx <input ref={inputRef} />
  // then hover over ref on <input ref={inputRef} />
  // give mes me the right input
  const inputRef = useRef<HTMLInputElement>(null);
  const divRef = useRef<HTMLDivElement>(null);
  const spanRef = useRef<HTMLSpanElement>(null);
  const myRef = useRef<HTMLElement>(null)

  //  console.log(spanRef);

  // 
  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   console.log("input ", e.target.value); 
  // }


  return (
    <div >
      {/* text, obj, fn are named in the other component */}
      {/* <input onChange={handleChange} /> */}
      <input onChange={fun} />
      <div ref={divRef}>
        div span useRef
      </div>
      <span ref={spanRef} ></span>
      <main className="App" ref={myRef}>
      {/* <h1>My title</h1> */}
    </main>

    </div>
  );
}

export default UseRef;
