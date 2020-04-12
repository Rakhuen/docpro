import React from "react";
import './LoginPage.css';
import foto from "./asset/image2.png";







const Header = () => {

    return(
       
       <div className="headerContainer">
            <div className="headerItem">DocPro.</div>

       </div>
        


    );


};


const Form = () => {

    return(
         <div className="utamaContainer">
        
        <div className="komponenDua">
                
                <img className="Foto" src={foto} />
                
            </div>



            <div className="komponenSatu">
                    
                <div className="formContainer"> 
                <Header />

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
    