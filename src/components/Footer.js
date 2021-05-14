import React, { Component } from 'react';
 
class Footer extends Component {
    render() { 
        return (
            <div>
                <footer class="footer section bd-container">
                <div class="footer__container bd-grid">
                    <div class="footer__content">
                        <a href='#home' class="footer__logo">Corona.tn</a>
                        <span class="footer__description">profile</span>
                        <div>
                            <a href="https://www.facebook.com/profile.php?id=100001324497791" class="footer__social"><i class='bx bxl-facebook'></i></a>
                            <a href="https://www.instagram.com/just_code.it/" class="footer__social"><i class='bx bxl-instagram'></i></a>
                            <a href="https://drive.google.com/drive/folders/11b4LW0SfziFp1WJ-gpXlLYj7iLVMYIFr" class="footer__social"><i class='bx bxl-github'></i></a>
                        </div>
                    </div>

                    <div class="footer__content">
                        <h3 class="footer__title">Services</h3>
                        <ul>
                            <li><a href='#home' class="footer__link">Course</a></li>
                            <li><a href='#home' class="footer__link">Tutorial</a></li>
                            <li><a href='#home' class="footer__link">chaine Youtube</a></li>
                            <li><a href='#home' class="footer__link">subsucribe</a></li>
                        </ul>
                    </div>

                    <div class="footer__content">
                        <h3 class="footer__title">Information</h3>
                        <ul>
                            <li><a href='#home' class="footer__link">Event</a></li>
                            <li><a href='#home' class="footer__link">Contact us</a></li>
                            <li><a href='#home' class="footer__link">Privacy policy</a></li>
                            <li><a href='#home' class="footer__link">Terms of services</a></li>
                        </ul>
                    </div>

                    <div class="footer__content">
                        <h3 class="footer__title">Adress</h3>
                        <ul>
                            <li>Djerba-Tunis</li>
                            <li>Homt_souk #4180</li>
                            <li>+216 27 648 386</li>
                            <li>sekrafibadr@icloud.com</li>
                        </ul>
                    </div>
                </div>

                <p class="footer__copy">&#169; 2021 Badercode. All right reserved</p>
            </footer>

            <script src="https://unpkg.com/scrollreveal"></script>

            <script src="assets/js/main.js"></script>
            <link rel="stylesheet" href="css/carousele.css"></link>
            </div>
        );
    }
}
 
export default Footer;