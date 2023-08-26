import { useState } from "react"
import OTPInput from "react-otp-input"
import { useDispatch, useSelector } from "react-redux"
import { verifyAction } from "../store/user/verifyAction"

function Verification() {
    const [otp,setOtp]=useState(null)
    const error=useSelector(state=>state.user.error)
    
    const dispatch=useDispatch()
    const submitOtp=(e)=>{
        e.preventDefault()
        const formData=new FormData()
        formData.append('code',`${otp}`)
        dispatch(verifyAction({formData:formData,token:'21|STL90WJxysOsuaakqvy4Wtzyww3lZORMsFAjuEho'}))
    }
  return (
    <div className="flex flex-col gap-8">
        <h4 className="text-center text-xl text-[rgba(0,0,0,1)] font-medium">Enter your code here</h4>
       <form className="flex flex-col gap-8 items-center" onSubmit={submitOtp}>
    <div>
                            <OTPInput
      value={otp}
      onChange={setOtp}
      numInputs={4}
      renderInput={(props) => <input {...props} />}
      shouldAutoFocus={true}
      containerStyle='otp-container'
    />
    {error &&error['code'] && <p className="text-center text-red-700 font-medium my-4">{error['code']}</p>}
        </div>
    <button type="submit" className="btn mx-auto">Submit</button>
       </form>
       <p className="text-xl font-normal">If you didn’t receive any code, <button className="text-primary hover:border-b-primary border-b-transparent duration-300 transition-all border-b-2 ">Resend</button></p>
    </div>
  )
}

export default Verification