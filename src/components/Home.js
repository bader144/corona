import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
 
class Home extends Component {
        state = {
        persons: []
      }
    
      componentDidMount() {
        axios.get(`http://localhost:5000/api/v1/register`)
          .then(res => {
            const persons = res.data.results;
            this.setState({ persons });
          })
      }
    
    render() { 
        return (
            <div>
                <section className="home" id="home">
                        <div className="home__container bd-container bd-grid">
                            <div className="home__data">
                                <h1 className="home__title">Corona.tn</h1>
                                <h2 className="home__subtitle">كان تحس لي عندك اعراض <br/> .كورونا</h2>
                                <Link to="/Register" className="button">سجلني</Link>
                            </div>
                        <img src="assets/img/home.png" alt="" className="home__img"/>
                        </div>
                    </section>
                {/*<!--========== ABOUT ==========-->*/}
                    <section className="about section bd-container" id="about">
                        <div className="about__container  bd-grid">
                            <div className="about__data">
                                <span className="section-subtitle about__initial">About us</span>
                                <h2 className="section-title about__initial"> عدد المسجلين معانا هو {this.state.persons.length}<br/> Corona.tn</h2>
                                <p className="about__description">فاش تستنا باش تشارك معانا؟</p>
                                <a href="#home" className="button">للمزيد من المعلومات</a>
                            </div>

                            <img src="assets/img/about.png" alt="" className="about__img"/>
                        </div>
                    </section>
          

                {/*<!--========== SERVICES ==========-->*/}
                    <section className="services section bd-container" id="services">
                        <span className="section-subtitle">Offering</span>
                        <h2 className="section-title">فاش تتمثل خدماتنا؟</h2>

                        <div className="services__container  bd-grid">
                            <div className="services__content">
                                <img src="assets/img/tunis.png" alt="" className="menu__img"/>
                                <h3 className="services__title">اللوغة العربية</h3>
                                <p className="services__description"> نقدمولك احسن و افضل محتوى تنجم تتمتع بيها اللغة التونسية </p>
                            </div>

                            <div className="services__content">
                                <img src="assets/img/youtu.png" alt="" className="menu__img"/>
                                <h3 className="services__title">توعية</h3>
                                <p className="services__description">نقدمولك باج توعوية كاملة على ذمتك فيها العديد من النصائح باش تحمي روحك</p>
                            </div>

                            <div className="services__content">
                                <img src="assets/img/certificate.png" alt="" className="menu__img"/>
                                <h3 className="services__title">انقراض الوباء</h3>
                                <p className="services__description">نقدمولك ضمان بعدم انتشار الوباء كان التزمت بالتعليمات</p>
                            </div>
                        </div>
                    </section>
                    <section>
                <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                        <img src="assets/img/vaccine.jpg" class="d-block w-100" alt="..."/>
                        <div class="carousel-caption d-none d-md-block">
                        <h1>لماذا يجب عليك ارتداء كمامة.</h1>
                        <p>تُعد أغطية الوجه القماشية خطوة مهمة للمساعدة في إبطاء انتشار COVID-19 عند دمجها مع الإجراءات الوقائية اليومية الأخرى بما في ذلك التباعد الاجتماعي وغسل اليدين المتكرر.</p>
                                            
                        </div>
                        </div>
                        <div class="carousel-item">
                        <img src="assets/img/Symp.jpg" class="d-block w-100" alt="..."/>
                        <div class="carousel-caption d-none d-md-block">
                        <h1>الأعراض.</h1>
                        <p>ذا كنت تعاني من أعراض جديدة مثل السعال، أو صعوبة التنفس، أو فقدان الطعم أو الرائحة، أو الحمى، أو القشعريرة، أو احتقان األنف أو سيالنها، أو
                        الغثيان/القيء، أو اإلسهال، أو التهاب الحلق، أو الصداع، أو األلم العضلي، أو اإلجهاد:
                        اعزل نفسك فورا
                        .</p>
                        </div>
                        </div>
                        <div class="carousel-item">
                        <img src="assets/img/Mask.jpg" class="d-block w-100" alt="..."/>
                        <div class="carousel-caption d-none d-md-block">
                        <h1>معلومات حول لقاح COVID-19.</h1>
                        <p>هناك العديد من لقاحات COVID-19 قيد التطوير حاليًا وفي التجارب السريرية. يعتمد توافر لقاح COVID-19 الآمن والفعال على نتائج المرحلة 3 من التجارب السريرية الجارية حاليًا. إذا ثبت أن اللقاح آمن وفعال في المرحلة 3 من التجارب السريرية ، فسيتم إصدار تصريح من إدارة الغذاء والدواء (FDA) لاستخدامه في عدد محدود من الأفراد المعرضين لخطر كبير للإصابة بـ COVID -19 أو الأشخاص المعرضون لخطر الإصابة بمضاعفات خطيرة من COVID-19. ستستمر مراقبة اللقاح حيث يتم استخدامه في أعداد أكبر من السكان لضمان الكشف عن أي مؤشر على حدوث مضاعفات نادرة من استخدامه في أسرع وقت ممكن وتقييمه لمعرفة ما إذا كانت ناجمة عن اللقاح..</p>
                                            
                        </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                    </div>
                </section>

                <section className="app section bd-container">
                <div id="menu" className="app__container bd-grid">
                    <div className="app__data">
                        <span className="section-subtitle app__initial"></span>
                        <h2 className="section-title app__initial">تجنب الاقتراب كثيرا من الناس</h2>
                        <p className="app__description">احتفظ بمسافة لا تقل عن متر واحد (3 أقدام) بينك وبين أي شخص يسعل أو يعطس.
                            لماذا؟ عندما يسعل الشخص أو يعطس، تتناثر من أنفه أو فمه قُطيرات سائلة صغيرة قد تحتوي على الفيروس. فإذا كنت شديد الاقتراب منه يمكن أن تتنفس هذه القُطيرات، بما في ذلك الفيروس المسبب لمرض كوفيد-19 إذا كان الشخص مصاباً به.
                            </p>
                    </div>

                    <img src="assets/img/dis_t.png" alt="" className="app__img"/>
                </div>
                </section>
                <section className="app section bd-container">
                <div className="app__container bd-grid">
                    <div className="app__data">
                        <span className="section-subtitle app__initial"></span>
                        <h2 className="section-title app__initial">اغسل اليدين بانتظام.</h2>
                        <p className="app__description">لماذا؟ إن تنظيف يديك بالماء والصابون أو فركهما بمطهر كحولي من شأنه أن يقتل الفيروسات التي قد تكون على يديك</p>
                    </div>

                    <img src="assets/img/wash_t.png" alt="" className="app__img"/>
                </div>
                </section>
                <section className="app section bd-container">
                <div className="app__container bd-grid">
                    <div className="app__data">
                        <span className="section-subtitle app__initial"></span>
                        <h2 className="section-title app__initial">اتجنب لمس عينيك وأنفك وفمك.</h2>
                        <p className="app__description">لماذا؟ تلمس اليدين العديد من الأسطح ويمكنها أن تلتقط الفيروسات. وإذا تلوثت اليدان فإنهما قد تنقلان الفيروس إلى العينين أو الأنف أو الفم. ويمكن للفيروس أن يدخل الجسم عن طريق هذه المنافذ ويصيبك بالمرض.</p>
                    </div>

                    <img src="assets/img/touch_t.png" alt="" className="app__img"/>
                </div>
                </section>

            
                <section className="app section bd-container">
                    <div className="app__container bd-grid">
                        <div className="app__data">
                            <span className="section-subtitle app__initial">App</span>
                            <h2 className="section-title app__initial">App will be aviable</h2>
                            <p className="app__description">Find our application and download it, you can get many courses, Tutorial, see your certificate and much more.</p>
                            <div className="app__stores">
                                <a href="https://www.apple.com/app-store/"><img src="assets/img/app1.png" alt="" className="app__store"/></a>
                                <a href="https://play.google.com/store/apps"><img src="assets/img/app2.png" alt="" className="app__store"/></a>
                            </div>
                        </div>

                        <img src="assets/img/movil-app.png" alt="" className="app__img"/>
                    </div>
                </section>

                <section className="contact section bd-container" id="contact">
                    <div className="contact__container bd-grid">
                        <div className="contact__data">
                            <span className="section-subtitle contact__initial">Let's talk</span>
                            <h2 className="section-title contact__initial">Contact us</h2>
                            <p className="contact__description">If you want to get a subsicribe, contact us and we will attend you quickly, with our 24/7 chat service.</p>
                        </div>

                        <div className="contact__button">
                            <a href="https://www.instagram.com/badr_sekrafi/" className="button">Contact us now</a>
                        </div>
                    </div>
                </section>
                <script src="https://unpkg.com/scrollreveal"></script>
            </div>
        );
    }
}
 
export default Home;