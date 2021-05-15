import React, { Component } from 'react';
import LoginForm from './example';
 
class Example extends Component {
    render() { 
        return (
            <div>
                
            <a href='https://google.com' className="scrolltop" id="scroll-top">
                <i className='bx bx-chevron-up scrolltop__icon'></i>
            </a>
            

        <section id="register">
            <div className="row m-0 ">
                <div className="col">
                    <div className="text-center pb-5">
                        <h1 className="home__title">مرحبا بيك</h1>
                        <p className="contact__description"> كان تحس عندك اعراض الكورونا سجل معانا </p>
                        <span className="contact__description">العودة للصفحة الرئيسية <a href="logout.php">اضغط هنا</a></span>
                    </div>
                    <div className="upload-profile-image d-flex justify-content-center pb-5">
                        <div className="text-center">
                            <div className="d-flex justify-content-center">
                                <img className="camera-icon" src="./assets/camera-solid.svg" alt="camera"/>
                            </div>
                            <img src="./assets/profile/beard.png" style={{width: "200px", height: "200px"}} className="img rounded-circle" alt="profile"/>
                            <small className="contact__description">Choose Image</small>
                            <input type="file" form="reg-form" className="form-control-file" name="profileUpload" id="upload-profile"/>
                        </div>
                    </div>
                    <LoginForm/>
                 
                </div>
            </div>
        </section>


        </div>
        );
    }
}
 
export default Example;