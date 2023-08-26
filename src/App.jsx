import { useSelector } from 'react-redux'
import { Routes ,Route, useNavigate} from 'react-router'
import StartPage from '../src/StartPage/StartPage'
import SignIn from './Components/Forms/SignIn'
import SignUp from './Components/Forms/SignUp'
import Verification from './Pages/Verification'

function App() {
  const userData=useSelector(state=>state.user)
  const navigate=useNavigate()
  if(userData.user && !userData.verified){
    console.log(userData.user)
        navigate('/verification')
  }
  return (
    < >
    <Routes>
    <Route path='/' element={<StartPage/>}>
      <Route path='signup' element={<SignUp/>}/>
      <Route path='signin' element={<SignIn/>}/>
      <Route path='/verification' element={<Verification/>}/>

    </Route>
    </Routes>
    </>
  )
}

export default App