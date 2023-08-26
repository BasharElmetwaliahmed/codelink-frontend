import emailPlaceHolderIcon from "../../assets/images/inputs-placeholder-icons/email.svg";
import namePlaceHolderIcon from "../../assets/images/inputs-placeholder-icons/name.svg";
import passwordPlaceHolderIcon from "../../assets/images/inputs-placeholder-icons/password.svg";
import { signUp } from "../../store/user/signUpAction";
import Form from "./Form";



// function SignUp() {
//  const user=useSelector(state=>state.user) 
//  const [formData,setFormData]=useState({
//   name:"",
//   email:"",
//   password:"",
//   password_confirmation:''
//  })
//  const dispatch=useDispatch()

//   const inputs=[
//     {
//       placeholder:'Name',
//       icon:namePlaceHolderIcon,
//       type:'text',
//       value:'name'
//     },
//         {
//       placeholder:'E-mail',
//       icon:emailPlaceHolderIcon,
//       type:'email',
//       value:'email'
//     },
//         {
//       placeholder:'Password',
//       icon:passwordPlaceHolderIcon,
//       type:'password',
//       value:'password'
//     },    {
//       placeholder:'Confirm Password',
//       icon:passwordPlaceHolderIcon,
//       type:'password',
//       value:'password_confirmation'
//     }
//   ]

//   const submitFormHandler=(e)=>{
//     e.preventDefault()
//   var formdata = new FormData();

// formdata.append("name", formData.name);
// formdata.append("email",formData.email );
// formdata.append("password", formData.password);
// formdata.append("password_confirmation",formData.password_confirmation);
//     dispatch(signUp(formdata))
//   }
//   return (
//     <div className="w-[498px] mx-auto py-8">
//       <h2 className=" text-1xl font-medium text-start">
//         Welcome to our community!
//       </h2>
//       <form className="py-2 flex flex-col gap-5  " onSubmit={submitFormHandler}>
//      {inputs.map((input,index)=><InputField setFormData={setFormData} formData={formData} {...input} key={index}/>)}

//       {user.loading?	<ReactLoading className="mx-auto" type={'spin'} color={"#D9C6A4"} height={50} width={50} />:
//        <button type="submit" className="btn w-fit mx-auto ">
//           Sign Up
//         </button>}
//       </form>
//     </div>
//   );
// }



function SignUp() {

  const inputs=[
    {
      placeholder:'Name',
      icon:namePlaceHolderIcon,
      type:'text',
      value:'name'
    },
        {
      placeholder:'E-mail',
      icon:emailPlaceHolderIcon,
      type:'email',
      value:'email'
    },
        {
      placeholder:'Password',
      icon:passwordPlaceHolderIcon,
      type:'password',
      value:'password'
    },    {
      placeholder:'Confirm Password',
      icon:passwordPlaceHolderIcon,
      type:'password',
      value:'password_confirmation'
    }
  ]

  return (
  <Form inputs={inputs} submitAction={signUp} initalValues={{email:"",password:""}}>
      <h2 className=" text-1xl font-medium text-start">
        Welcome to our community!
      </h2>
  </Form>
  );
}

export default SignUp;