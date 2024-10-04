import { useState } from "react"

export default function AuthForm(){
    const [isLogin, setIsLogin] = useState("true")
    return (
        <div className ="container">
            <div className="form-container">
                <div className="form-toggle">
                    <button className={isLogin? 'active' : ''} onClick={() => setIsLogin(true)}>Login</button>
                    <button className={!isLogin? 'active' : ''} onClick = {() => setIsLogin(false)}>Sign Up</button>
                </div>
                {isLogin? <>
                <div className="form">
                    <h2>Login Form</h2>
                    <input type="email" placeholder="email" />
                    <input type="pasword" placeholder="Password"/>
                    <a href="">Forgot Password?</a>
                    <button>Login</button>
                    <p>Not a member? <a href="#" onClick={() => setIsLogin(false)}>SignUp now</a></p>
                </div>
                    </>:<>
                    <div className="form">
                        <h2>Sign Up</h2>
                        <input type="text" placeholder="Name"/>
                        <input type="email" placeholder="email"/>
                        <input type="pasword" placeholder="Password" />
                        <input type="pasword" placeholder="Confirm Password"/>
                        <button>SignUp</button>
                    </div>
                    </>}
            </div>

        </div>
    )
}