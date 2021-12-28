import '../App.css';
import React, { useState,useEffect } from 'react';
import GoogleLogin from 'react-google-login';

function Account(data) {

    const responseGoogle = (response) => {
        console.log(response);
    }

    return (
        <>
            <div className='AccountPage'>
                <div className='LoginPage'>
                    <GoogleLogin
                        clientId="1023783950774-ltgdeu2cbea6c4f399tgos778smkde28.apps.googleusercontent.com"
                        buttonText="Google Account"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                        className='GoogleButton'
                        disabled={false}
                    />
                    <div>Local Login</div>
                    <div className='AboutButton'>About</div>
                </div>
                <div className='LoginPageDetails'>

                </div>
            </div>
        </>
    );
}

export default Account;
