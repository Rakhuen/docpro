import React from "react";
import './LoginPage.css';

const Header = () => {

    return(
       
       <div className="HeaderContainer">
            <div className="HeaderItem">DocPro.</div>

       </div>
        


    );


};


const Form = () => {

    return(
         <div className="utamaContainer">
        
        <div className="komponenDua">
               
                <div className="kotak">ini kotak</div>
            </div>



            <div className="komponenSatu">
                    <Header />

                <div className="formContainer"> 
         
                        <div className="formItem">
                                <div className="formLabel">Username</div>
                                <input type="text" className="inputText" name="username"/>
                        </div>
    
    
                            <div className="formItem">
                                <div className="formLabel">Password</div>
                                <input type="password" className="inputText" name="password"/>
                            </div>
    
                            <div className="formBtn">Login</div>
        
                </div>
            </div>

            
    
    
    </div>
    );
};


const LoginContainer = () => {
    return (
        <div className="loginContainer">
           
            <Form/>

        </div>

    );

};

    export default LoginContainer;
    