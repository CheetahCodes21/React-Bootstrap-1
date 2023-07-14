import React from 'react'

const Signup = () => {
  return (
    <div>
        <div>
            <form>
                <h2 className="text-center">SignUp</h2>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="Enter your email" name="Email" className="form-control"></input>
                </div>
            </form>
        </div>
        <br></br>
        <div>
                <h2 className="text-center"></h2>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="Enter your password" name="Password" className="form-control"></input>
                </div>
        </div>
    </div>
  )
}

export default Signup