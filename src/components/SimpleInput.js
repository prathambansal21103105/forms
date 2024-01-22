// import { useState } from 'react';
import useInput from '../hooks/use-Input';

const SimpleInput = (props) => {
  const {value:enteredName ,valueIsValid:enteredNameIsValid ,hasError:nameInputIsInvalid ,valueChangeHandler:nameInputChangeHandler ,inputBlurHandler:nameInputBlurHandler,reset:resetName}=useInput((value)=>{return value.trim()!==''});
  const {value:enteredEmail ,valueIsValid:enteredEmailIsValid ,hasError:emailInputIsInvalid ,valueChangeHandler:emailInputChangeHandler ,inputBlurHandler:emailInputBlurHandler,reset:resetEmail}=useInput((value)=>{return value.trim()!=='' && value.includes('@');});
  
  let formIsValid=false;

  if(enteredNameIsValid && enteredEmailIsValid){
    formIsValid=true;
  }

  const nameInputClasses=!nameInputIsInvalid? 'form-control':'form-control invalid';
  const emailInputClasses=!emailInputIsInvalid? 'form-control':'form-control invalid';
  const formSubmissionHandler=(event)=>{
    event.preventDefault();
    if(!enteredNameIsValid || !enteredEmailIsValid){
      return;
    }
    console.log(enteredName);
    console.log(enteredEmail);
    resetName();
    resetEmail();
  }

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={nameInputChangeHandler} value={enteredName} onBlur={nameInputBlurHandler}/>
        {nameInputIsInvalid && <p className='error-text'>Name must not be empty.</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>Your E-mail</label>
        <input type='email' id='email' onChange={emailInputChangeHandler} value={enteredEmail} onBlur={emailInputBlurHandler}/>
        {emailInputIsInvalid && <p className='error-text'>Email must not be empty and must contain @.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

// import { useRef,useState } from 'react';

// const SimpleInput = (props) => {
//   const nameInputRef=useRef();
//   const [enteredName,setEnteredName]=useState('');
//   const [enteredNameIsValid,setEnteredNameIsValid]=useState(false);
//   const [enteredNameTouched,setEnteredNameTouched]=useState(false);

//   const nameInputChangeHandler=(event)=>{
//     // event.preventDefault();
//     setEnteredName(event.target.value);
//     if(event.target.value.trim()!==''){
//       setEnteredNameIsValid(true);
//       return;
//     }
//   }
//   const nameInputBlurHandler=()=>{
//     setEnteredNameTouched(true);
//     if(enteredName.trim()===''){
//       setEnteredNameIsValid(false);
//       return;
//     }
//   }
//   const formSubmissionHandler=(event)=>{
//     setEnteredNameTouched(true);
//     event.preventDefault();
//     if(enteredName.trim()===''){
//       setEnteredNameIsValid(false);
//       return;
//     }
//     setEnteredNameIsValid(true);
//     console.log(enteredName);
//     console.log(nameInputRef.current.value);
//     setEnteredName('');
//   }

//   const nameInputIsInvalid=!enteredNameIsValid && enteredNameTouched;

//   const nameInputClasses=!nameInputIsInvalid? 'form-control':'form-control invalid';

//   return (
//     <form onSubmit={formSubmissionHandler}>
//       <div className={nameInputClasses}>
//         <label htmlFor='name'>Your Name</label>
//         <input ref={nameInputRef} type='text' id='name' onChange={nameInputChangeHandler} value={enteredName} onBlur={nameInputBlurHandler}/>
//         {nameInputIsInvalid && <p className='error-text'>Name must not be empty.</p>}
//       </div>
//       <div className="form-actions">
//         <button>Submit</button>
//       </div>
//     </form>
//   );
// };

// export default SimpleInput;
