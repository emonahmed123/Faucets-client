import React from 'react'
import { GoogleLogin } from  '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';

const Google = () => {
  
 
    return (
    <div>
  

<GoogleOAuthProvider clientId="462131792208-bim4rc1siogjfe2of4qkp3or3tc154jd.apps.googleusercontent.com">

<GoogleLogin
  onSuccess={credentialResponse => {
     console.log(credentialResponse);
  }}
  onError={() => {
     console.log('Login Failed');
  }}
/>
</GoogleOAuthProvider>

    </div>
  )
}

export default Google
