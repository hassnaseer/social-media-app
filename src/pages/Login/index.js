import React, { useState } from "react";
import { motion } from "framer-motion";
import "./style.css"
import {AccountContext} from "../../components/common/accountcontext";
import Login from "./login"
import Signup from "../Login/signup/signup"

const Main = ()=>{
    const [isExpanded, setExpanded] = useState(false);
    const [active, setActive] = useState("signin");
    const switchToSignup = () => {
        playExpandingAnimation();
        setTimeout(() => {
            setActive("signup");
        }, 400);
    };
    const expandingTransition = {
        type: "spring",
        duration: 2.3,
        stiffness: 30,
    };
    const switchToSignin = () => {
        playExpandingAnimation();
        setTimeout(() => {
            setActive("signin");
        }, 400);
    };
    const playExpandingAnimation = () => {
        setExpanded(true);
        setTimeout(() => {
            setExpanded(false);
        }, expandingTransition.duration * 1000 - 1500);
    };
    const backdropVariants = {
        expanded: {
            width: "233%",
            height: "1050px",
            borderRadius: "20%",
            transform: "rotate(60deg)",
        },
        collapsed: {
            width: "160%",
            height: "550px",
            borderRadius: "50%",
            transform: "rotate(60deg)",
        },
    };
    const contextValue = { switchToSignup, switchToSignin };
    return(
        <AccountContext.Provider value={contextValue}>
            <div className="BoxContainer">
                <div className="TopContainer">
                    <motion.div initial={false}
                                animate={isExpanded ? "expanded" : "collapsed"}
                                variants={backdropVariants}
                                transition={expandingTransition}
                                className="motion"
                    />
                    {active === "signin" && (
                        <div className="headercontainer">
                            <h2 className="headertext">Welcome</h2>
                            <h2 className="headertext">Back</h2>
                            <h5 className="smalltext">Please sign-in to continue!</h5>
                        </div>
                    )}
                    {active === "signup" && (
                        <div className="headercontainer">
                            <h2 className="headertext">Create</h2>
                            <h2 className="headertext">Account</h2>
                            <h5 className="smalltext">Please sign-up to continue!</h5>
                        </div>
                    )}
                </div>
                <div className="InnerContainer">
                    {active === "signin" && <Login />}
                    {active === "signup" && <Signup />}
                </div>
            </div>
        </AccountContext.Provider>
    )
}

export default Main