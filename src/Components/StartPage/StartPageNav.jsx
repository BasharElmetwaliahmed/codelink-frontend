import { NavLink } from "react-router-dom";

function StartPageNav() {
  const links=[    
    {
    path:'/',
    text:'Home'
    },
    {
    path:'signup',
    text:'Sign Up'
    },    {
    path:'signin',
    text:'Log In'
    },

]
  return (
                  <ul className='flex items-center gap-14 font-semibold  text-xl'>
                    {
                      links.map(link=> <li  key={link}><NavLink to={link.path} >{link.text}</NavLink></li>)
                    }

                  </ul>  )
}

export default StartPageNav