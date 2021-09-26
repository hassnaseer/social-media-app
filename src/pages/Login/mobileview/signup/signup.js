import React,{ useContext,useState } from "react"
import "../style.css"
import {useHistory} from "react-router-dom";
import {useFormik} from 'formik';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import * as Yup from 'yup';
import {AccountContext} from "../../../../components/common/accountcontext";

const Login =()=>{
    const history = useHistory();
    const [value, setValue] = useState()
    const { switchToSignin } = useContext(AccountContext);
    const formik = useFormik({
        initialValues: {
            email: '',
            firstname: '',
            lastname: '',
        },
        validationSchema: Yup.object({
            firstname: Yup.string().required('Required'),
            lastname: Yup.string().required('Required'),
            email: Yup.string().required('Required'),
        }),
        onSubmit: async (values) => {
            alert(JSON.stringify(values))
        },
    });
    return(
        <div className="row">
            <form onSubmit={formik.handleSubmit}>
                <input id="firstname"
                       className="col-lg-6 col-md-6 col-sm-6 my-2 p-2 input"
                       placeholder='First Name'
                        type="firstname" {...formik.getFieldProps('firstname')} />
                <input id="lastname"
                       className="col-lg-6 col-md-6 col-sm-6 my-2 p-2 input"
                       placeholder='last Name'
                       type="lastname" {...formik.getFieldProps('lastname')} />
                <input id="email"
                       className="col-12 p-2 my-2 input"
                       placeholder='Email-Address'
                       type="email" {...formik.getFieldProps('email')}
                />
                {formik.touched.email && formik.errors.email ? (
                    <div className="text-danger col-lg-6 col-md-6 col-sm-6 ">{formik.errors.email}</div>
                ) : null}
                <PhoneInput
                    placeholder="Enter phone number"
                    value={value}
                    className="col-lg-6 col-md-6 col-sm-6 my-2 p-2 input"
                    onChange={setValue}/>
                <button type="submit" className="button" >SignUp</button>
                <div className="text-center">
                    <a className="mutedlink">Already have Account <span className="boldlink" onClick={switchToSignin}>SignIn</span>
                    </a>
                </div>

            </form>
        </div>
    )
}

export default Login