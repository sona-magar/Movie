import React from 'react'

const LoginForm = ({loginInfo , setLoginInfo, handleSubmit}) => {
  const handleChange =(event)=>{
    const {name,value}=event.target
    setLoginInfo({...loginInfo, [name]:value})
  }
  return (
    <div className='loginForm-container'>

      <form className="needs-validation" noValidate={true} onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" value={loginInfo.email} name="email" onChange={handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" value={loginInfo.password} name="password" onChange={handleChange} className="form-control" id="exampleInputPassword1" />
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default LoginForm
