import React, {useContext, useState} from "react"
import "./style.css"
import {useHistory} from "react-router-dom";
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {AccountContext} from "../../../components/common/accountcontext";

const Login =()=>{
    const history = useHistory();
    const [formData, setFormData] = useState()
    const { switchToSignup } = useContext(AccountContext);
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            password: Yup.string().required('Required'),
            email: Yup.string().required('Required'),
        }),
        onSubmit: async (values) => {
            // console.log(values)
            localStorage.setItem('userId', JSON.stringify(values))
            let data = localStorage.getItem('userId')
            // console.log("data", data)
            setFormData(data)
            history.push("./home")
            // history.push("/home")
        },

    });
    return(
        <div className="row">
            <form onSubmit={formik.handleSubmit}>
                <input id="email"
                       className="col-12 p-2 m-2 input"
                       placeholder='Email-Address'
                       type="email" {...formik.getFieldProps('email')}
                />
                {formik.touched.email && formik.errors.email ? (
                    <div>{formik.errors.email}</div>
                ) : null}
                <input id="password"
                       className="col-12 p-2 m-2 input"
                       placeholder='New-Password'
                       type="password" {...formik.getFieldProps('password')} />
                {formik.touched.password && formik.errors.password ? (
                    <div>{formik.errors.password}</div>
                ) : null}
                <button type="submit" className="button" >Submit</button>
                <div className="text-center">
                    <a className="mutedlink">Don't have an accoun? <span className="boldlink" onClick={switchToSignup}>Signup</span>
                    </a>
                </div>
            </form>
        </div>
    )
}

export default Login