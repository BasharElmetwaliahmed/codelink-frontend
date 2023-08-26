
import Header from '../Components/StartPage/Header'
import StartPageHome from '../Components/StartPage/StartPageHome'
function StartPage() {


  return (
    <div className=" min-h-100vh bg-secondary ">
      <div>
        <Header/>
      </div>
      <StartPageHome/>
    </div>
  )
}

export default StartPage