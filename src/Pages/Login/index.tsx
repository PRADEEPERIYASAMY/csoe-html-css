import React from "react";
import styles from './login.module.css'
import classnames from 'classnames';

const Login = () => {
    return (
        <div className={styles.container}>
            <div className={styles.section}>
                <div className="container">
                    <div className="row full-height justify-content-center">
                        <div className="col-12 text-center align-self-center py-5">
                            <div className={classnames("pb-5 pt-5 pt-sm-2 text-center", styles.section)}>
                                <h6 className="mb-0 pb-3">
                                    <span>Log In</span>
                                    <span>Sign UP</span>
                                </h6>
                                <input className={styles.checkbox} type='checkbox' id="reg-log" name="reg-log" />
                                <label htmlFor="reg-log"></label>
                                <div className={classnames("mx-auto", styles.card_3d_wrap)}>
                                    <div className={styles.card_3d_wrapper}>
                                        <div className={styles.card_front}>
                                            <div className={styles.center_wrap}>
                                                <div className={classnames("text-center", styles.section)}>
                                                    <h4 className="mb-4 pb-3">
                                                        Log IN
                                                    </h4>
                                                    <div className={styles.form_group}>
                                                        <input type='email' name="logemail" className={styles.form_style} placeholder="Your Email" id="logemail" autoComplete="off" />
                                                        <i className={classnames("uil", "uil-at", styles.input_icon)}></i>
                                                    </div>
                                                    <div className={classnames("mt-2", styles.form_group)}>
                                                        <input type="password" name="logpass" className={styles.form_style} placeholder="Your Password" id="logpass" autoComplete="off" />
                                                        <i className={classnames("uil", "uil-lock", styles.input_icon)}></i>
                                                    </div>
                                                    <a href="#" className={classnames("mt-4", styles.btn)}>submit</a>
                                                    <p className="mb-0 mt-4 text-center"><a href="#0" className={styles.link}>Forgot your password?</a></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.card_back}>
                                            <div className={styles.center_wrap}>
                                                <div className={classnames("text-center", styles.section)}>
                                                    <h4 className="mb-4 pb-3">
                                                        Sign Up
                                                    </h4>
                                                    <div className={styles.form_group}>
                                                        <input type='text' name="logname" className={styles.form_style} placeholder="Your Full Name" id="logname" autoComplete="off" />
                                                        <i className={classnames("uil", "uil-at", styles.input_icon)}></i>
                                                    </div>
                                                    <div className={classnames("mt-2", styles.form_group)}>
                                                        <input type='email' name="logemail" className={styles.form_style} placeholder="Your Email" id="logemail" autoComplete="off" />
                                                        <i className={classnames("uil", "uil-at", styles.input_icon)}></i>
                                                    </div>
                                                    <div className={classnames("mt-2", styles.form_group)}>
                                                        <input type="password" name="logpass" className={styles.form_style} placeholder="Your Password" id="logpass" autoComplete="off" />
                                                        <i className={classnames("uil", "uil-lock", styles.input_icon)}></i>
                                                    </div>
                                                    <a href="#" className={classnames("mt-4", styles.btn)}>submit</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;