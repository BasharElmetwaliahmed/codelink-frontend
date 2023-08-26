/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useSelector } from "react-redux"

function InputField({formData,icon,placeholder,setFormData,value,type}) {
  const error=useSelector(state=>state.user.error)
  const changeValueHandler=(e)=>{
    const newValue=e.target.value
    
    setFormData({...formData,[value]:e.target.value})
  }
  return (
   <div>
                <div className="input-form  ">
          <input type={type} placeholder={placeholder} name={value} className=" input-field" onChange={changeValueHandler} />
          <img
            src={icon}
            className="transition-all duration-200 ease-in  absolute left-4 top-1/2 -translate-y-1/2"
          />
        </div>
        {error && error[value] && <p className="my-2 pl-1 text-red-600" >*{error[value].length?error[value].join(' & '):error[value]}</p>}
   </div>
  )
}

export default InputField