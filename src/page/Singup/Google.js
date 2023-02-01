 import React from 'react'
 import { GoogleLogin } from 'react-google-login';

const Google = () => {
//    const id="443799169113-qid232jtr8o1grta1guja2rjec856mdt.apps.googleusercontent.com"
   const responseGoogle = (response) => {
    console.log(response);
  }
    return (
    <div>
  
<GoogleLogin
    clientId="443799169113-qid232jtr8o1grta1guja2rjec856mdt.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}/>

    </div>
  )
}

export default Google
