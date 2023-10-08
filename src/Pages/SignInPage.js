import React from 'react'
import Nav from '../Components/Nav'

const SignInPage = () => {
  return (
    <div> <Nav/> 
    <div> 
    <div class="container">
    <div class="row justify-content-center">
        <div class="col-lg-7">
            <div class="card shadow-lg border-0 rounded-lg mt-5">
                <div class="card-header"><h3 class="text-center font-weight-light my-4"> Sign in</h3></div>
                <div class="card-body">
                    <form>
                        
                    <div class="form-floating mb-3">
                            <input class="form-control" id="inputEmail" type="text" placeholder="name@example.com" />
                            <label for="inputEmail"> Username </label>
                        </div>
                        <div class="form-floating mb-3">
                            <input class="form-control" id="inputEmail" type="email" placeholder="name@example.com" />
                            <label for="inputEmail"> Password </label>
                        </div>
                                              <div class="mt-4 mb-0">
                            <div class="d-grid"><a class="btn btn-primary btn-block" href="login.html">Sign in</a></div>
                        </div>
                    </form>
                </div>
                <div class="card-footer text-center py-3">
                    <div class="small"><a href="login.html">Don't have an account? Create an account </a></div>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
       </div>
  )
}

export default SignInPage