import React, {useState} from "react"
import "./style.css"
import Img from '../../../components/images/image.png'
import Desk from "../desktopview/desk"
import Login from "../desktopview/login"

const LoginWebs =()=>{
    const [index, setIndex] = useState(0);
    const components = [<Desk/>, <Login/>, <div>data here2</div>];
    return(
        <div className="container">
            <div className="row">
                <div className="col-lg-12 col-md-12 my-5 d-flex">
                    <h1 className="col-6 title">Social-Media-Web</h1>
                    <button type="submit" className="button1 mr-4" onClick={() => setIndex(1)}>Login</button>
                    <span className="my-2">OR</span>
                    <button type="submit" className="button2 ml-4" onClick={() => setIndex(2)}>Join Now</button>
                </div>
                <div className="col-lg-12 col-md-12">
                    <div className="row">
                        {components[index]}
                        <div className="col-lg-6 col-md-6 img">
                            <img src={Img} alt="main" className="pic"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LoginWebs