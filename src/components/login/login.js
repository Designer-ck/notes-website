import React from 'react'

const Login = () => {
    return (
        <>
            {/* <script src="https://use.fontawesome.com/f59bcd8580.js"></script> */}
            <div className="login_form">
            <div class="login-container container">
                <div class="row m-5 no-gutters shadow-lg">
                    <div class="col-md-6 d-none d-md-block">
                        <img src="https://images.unsplash.com/photo-1566888596782-c7f41cc184c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80" class="img-fluid" />
                    </div>
                    <div class="col-md-6 bg-white p-5 login_right">
                        <h3 class="pb-3">Login Form</h3>
                        <div class="form-style">
                            <form>
                                <div class="form-group pb-3">
                                    <input type="email" placeholder="Email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div class="form-group pb-3">
                                    <input type="password" placeholder="Password" class="form-control" id="exampleInputPassword1" />
                                </div>
                                <div class="d-flex align-items-center justify-content-end">
                                    {/* <div class="d-flex align-items-center">
                                        <input name="" type="checkbox" value="" />
                                        <span class="pl-2 font-weight-bold">Remember Me</span>
                                    </div> */}
                                    <div className=''><a href="#">Forget Password?</a></div>
                                </div>
                                <div class="pb-2">
                                    <button type="submit" class="btn btn-dark w-100 font-weight-bold mt-2">Submit</button>
                                </div>
                            </form>
                            {/* <div class="sideline">OR</div>
                            <div>
                                <button type="submit" class="btn btn-primary w-100 font-weight-bold mt-2"><i class="fa fa-facebook" aria-hidden="true"></i> Login With Facebook</button>
                            </div> */}
                            <div class="pt-4 text-center">
                                Get Members Benefit. <a href="#">Sign Up</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default Login