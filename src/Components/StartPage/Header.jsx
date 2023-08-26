import logo from '../../assets/images/logo.svg'
import StartPageNav from './StartPageNav'

function Header() {
  return (
    <div  className=' py-7 border-b-[1.5px] border-b-[rgba(227, 227, 227, 1)] border-solid'>
     <div className='container flex justify-between items-center'>
                          <h1 className='flex text-4xl font-bold  items-center'><img src={logo}/> Codelink</h1>
    <StartPageNav/>
    
     </div>
    </div>
  )
}

export default Header