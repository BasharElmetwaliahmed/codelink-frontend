import emailPlaceHolderIcon from "../../assets/images/inputs-placeholder-icons/email.svg";
import passwordPlaceHolderIcon from "../../assets/images/inputs-placeholder-icons/password.svg";
import { logIn } from "../../store/user/logInActions";
import logInImg from '../../assets/images/start-page/logIn.svg'
import Form from "./Form";
function SignIn() {

  const inputs=[

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
    }
  ]

  return (
  <Form inputs={inputs} submitAction={logIn} initalValues={{email:"",password:""}}>
    <img src={logInImg} className='mx-auto' alt='log-in img'/>
      <h2 className=" text-1xl font-medium text-start">
        Welcome to our community!
      </h2>
  </Form>
  );
}

export default SignIn;
