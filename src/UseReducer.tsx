// import React, {FC} from 'react'
import React, { useReducer } from 'react'

// Action types
enum ActionType {
    INCREMENT_COUNTER = "INCREMENT_COUNTER",
    DECREMENT_COUNTER = "DECREMENT_COUNTER"
}

// reducer Type
interface IActionReducer {
    type: ActionType;
    count: number;
}

// initialstate Type
interface ICounter {
    result: number;
}


//
const initialState: ICounter = {
    result: 0
};

//
const countValue: number = 1;

// takes initalstate of type Icounter, and actions of type IActionReducer
const counterReducer = (state: ICounter, action: IActionReducer) => {
// const counterReducer: React.Reducer<ICounter, IActionReducer> = (state: ICounter, action: IActionReducer) => {
    switch (action.type) {
        case ActionType.INCREMENT_COUNTER:
            return { result: state.result + action.count };
        case ActionType.DECREMENT_COUNTER:
            return { result: state.result - action.count };
        default:
            return state;
    }
};



const UseReducer: React.FC = () => { 
    //  userReducer of type,  initalstate of type Icounter, and actions of type IActionReducer 
    // const [state, dispatch] = React.useReducer( counterReducer, initialState );
    const [state, dispatch] = React.useReducer<React.Reducer<ICounter, IActionReducer>>( counterReducer, initialState );
  
    return (
      <div className="App">
          <hr/>
        from userReducer
        <h3>Result: {state.result}</h3>
        <button
          onClick={() =>
            dispatch({ type: ActionType.INCREMENT_COUNTER, count: countValue })
          }> +
        </button>
        <button
          onClick={() =>
            dispatch({ type: ActionType.DECREMENT_COUNTER, count: countValue })
          }> -
        </button>
      </div>
    );
  
        }

// // counterReducer actions
// type Actions = 
// {  type: 'ADD'; payload: string} | {  type: 'MINUS' ; payload: number}

// // todo archtitect 
// interface Todo {
//     text: string;
//     complete: boolean;
// }

// // 
// type InitialState = Todo[];


// const TodoReducer = (state: InitialState, action: Actions) =>{
//     switch (action.type) {
//         case 'ADD':
//             return [...state, { text: action.payload, complete: action.payload }];
//         case 'MINUS':
//                 return state.filter((_, i)=> action.payload !== i);
//         default:
//             return state;
//     }
// }

// const UseReducer: React.FC = () => {
//     // const [todos, dispatch] = useReducer(()=>{}, []) // counterReducer, initial state
//     const [state, dispatch] = React.useReducer<React.Reducer<ICounter, IReducer>>(
//         TodoReducer,
//         InitialState
//       );

//     return (
//         <div>

//         </div>
//     )
// }

export default  UseReducer;
