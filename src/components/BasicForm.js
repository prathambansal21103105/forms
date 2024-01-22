import useInput from "../hooks/use-Input";

const BasicForm = (props) => {
  const {value:enteredFname,valueIsValid:fnameIsValid,hasError:fnameHasError,valueChangeHandler:fnameChangeHandler,inputBlurHandler:fnameBlurHandler,reset:fnameReset}=useInput((value)=> value.trim()!=='');
  const {value:enteredLname,valueIsValid:lnameIsValid,hasError:lnameHasError,valueChangeHandler:lnameChangeHandler,inputBlurHandler:lnameBlurHandler,reset:lnameReset}=useInput((value)=> value.trim()!=='');
  const {value:enteredEmail,valueIsValid:emailIsValid,hasError:emailHasError,valueChangeHandler:emailChangeHandler,inputBlurHandler:emailBlurHandler,reset:emailReset}=useInput((value)=> value.trim()!=='' && value.includes('@'));
  let formIsValid=false;
  if(fnameIsValid && lnameIsValid && emailIsValid){
    formIsValid=true;
  }
  const fnameInputClasses=(!fnameHasError)? 'form-control':'form-control invalid';
  const lnameInputClasses=(!lnameHasError)? 'form-control':'form-control invalid';
  const emailInputClasses=(!emailHasError)? 'form-control':'form-control invalid';
  const formSubmitHandler=(event)=>{
    event.preventDefault();
    if(!formIsValid){
      return;
    }
    console.log(enteredFname);
    console.log(enteredLname);
    console.log(enteredEmail);
    const user={
      firstName:enteredFname,
      lastName:enteredLname,
      email:enteredEmail,
    }
    // fetch('https://react-http-1df71-default-rtdb.firebaseio.com/user.json',{
    //   method:'POST',
    //   body:JSON.stringify(user),
    //   headers:{
    //     'Content-Type':'application/json'
    //   }
    // })
    fnameReset();
    lnameReset();
    emailReset();
  }
  return (
    <form onSubmit={formSubmitHandler}>
      <div className='control-group'>
        <div className={fnameInputClasses}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' value={enteredFname} onChange={fnameChangeHandler} onBlur={fnameBlurHandler}/>
        </div>
        <div className={lnameInputClasses}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' value={enteredLname} onChange={lnameChangeHandler} onBlur={lnameBlurHandler}/>
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' value={enteredEmail} onChange={emailChangeHandler} onBlur={emailBlurHandler}/>
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
