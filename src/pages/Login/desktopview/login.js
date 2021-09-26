import React, {useContext, useState} from "react"
import "./style.css"
import {useHistory} from "react-router-dom";
import {useFormik} from 'formik';
import * as Yup from 'yup';

const Login =()=>{
    const history = useHistory();
    const [formData, setFormData] = useState()
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
        <div className="col-lg-6 col-md-6 form">
            <div className="row">
                <span className="header col-lg-12 col-md-12">Login</span>
                <form onSubmit={formik.handleSubmit}>
                    <input id="email"
                           className="col-12 p-2 my-2 input"
                           placeholder='Email-Address'
                           type="email" {...formik.getFieldProps('email')}
                    />
                    {formik.touched.email && formik.errors.email ? (
                        <div>{formik.errors.email}</div>
                    ) : null}
                    <input id="password"
                           className="col-12 p-2 my-2 input"
                           placeholder='New-Password'
                           type="password" {...formik.getFieldProps('password')} />
                    {formik.touched.password && formik.errors.password ? (
                        <div>{formik.errors.password}</div>
                    ) : null}
                    <button type="submit" className="button" >Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Login