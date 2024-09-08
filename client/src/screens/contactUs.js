import React from "react";

import SML from "../assets/SML.jpg";
import MTYT from "../assets/MTYT.jpg";
import PMH from "../assets/PMH.jpg";
import YPA from "../assets/YPA.jpg";
import KST from "../assets/KST.jpg";
import KL from "../assets/KL.jpg";


function ContactUs() {
    return (
        <>
            <br />
            <br />
            <div className="container">
                <div className="row justify-content-center">

                    <div className="col-12 col-sm-8 col-lg-6">
                        {/* Section Heading */}
                        <div className="section_heading text-center wow fadeInUp" data-wow-delay="0.2s">
                            <h3>Meet Our <span>Team</span></h3>
                            <p>လူကြီးမင်းတို့အခက်အခဲတစ်စုံတစ်ရာရှိပါကအောက်ပါကောင်လေးများအားဆက်သွယ်နိုင်ပါကြောင်း</p>
                            <div className="line"></div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    {/* Single Advisor */}
                    <div className="col-12 col-sm-6 col-lg-3">
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <div className="advisor_thumb">
                                        <img src={SML} alt="Shwe Min Lu" />
                                    </div>
                                    <br />
                                    <div className="single_advisor_details_info">
                                        <h6>Shwe Min Lu</h6>
                                        <p className="designation">Programmer &amp; certified gambler</p>
                                    </div>
                                </div>
                                <div className="flip-card-back">
                                    <h6>More About Shwe Min Lu</h6>
                                    <p>Shwe Min Lu is a developer of Hotel Malikha Project and <b>Professional Gambler</b> with over 2 years of experience in the <b>1xbet industry</b>...</p>
                                    <div>
                                        <h6>Gmail : </h6>
                                        <span>mainlu897@gmail.com</span>
                                    </div>
                                    <div>
                                        <h6>Phone number : </h6>
                                        <span>09 883 987 798</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Repeat for other advisors */}
                    <div className="col-12 col-sm-6 col-lg-3">
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <div className="advisor_thumb">
                                        <img src={MTYT} alt="Myo Thura Tun" />
                                    </div>
                                    <br />
                                    <div className="single_advisor_details_info">
                                        <h6>Myo Thura Tun</h6>
                                        <p className="designation">Programmer</p>
                                    </div>
                                </div>
                                <div className="flip-card-back">
                                    <h6>More About Myo Thura Tun</h6>
                                    <p>Myo Thura is a developer of Hotel Malikha Project and he is a <b>Big Fan of Manchester United.</b><br/>!DO NOT TRASHTALK ABOUT ManU in front of him!...</p>
                                    <div>
                                        <h6>Gmail : </h6>
                                        <span>myowithmom@gmail.com</span>
                                    </div>
                                    <div>
                                        <h6>Phone number : </h6>
                                        <span>09 666 197 326</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-lg-3">
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <div className="advisor_thumb">
                                        <img src={PMH} alt="Phone Moe Htet" />
                                    </div>
                                    <br />
                                    <div className="single_advisor_details_info">
                                        <h6>Phone Moe Htet</h6>
                                        <p className="designation">Software Engineer</p>
                                    </div>
                                </div>
                                <div className="flip-card-back">
                                    <h6>More About Phone Moe Htet</h6>
                                    <p>Phone Moe Htet is a developer of Hotel Malikha Project and there will be upcoming series of him with Kwee Nay Htoo Naing where he took the role of <b>Juniorတန်ခိုးရှင်</b>...</p>
                                    <div>
                                        <h6>Gmail : </h6>
                                        <span>moehtet1549@gmail.com</span>
                                    </div>
                                    <div>
                                        <h6>Phone number : </h6>
                                        <span>09 941 641 274</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3">
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <div className="advisor_thumb">
                                        <img src={KL} alt="Kyaw Lin" />
                                    </div>
                                    <br />
                                    <div className="single_advisor_details_info">
                                        <h6>Kyaw Lin</h6>
                                        <p className="designation">Power Point</p>
                                    </div>
                                </div>
                                <div className="flip-card-back">
                                    <h6>More About Kyaw Lin</h6>
                                    <p>Kyaw Lin is a desiger of Hotel Malikha Project and he is a <b>professional roll call collector</b>, if there's anyone whose attendence is higher than him contact US...</p>
                                    <div>
                                        <h6>Gmail : </h6>
                                        <span>mgkyaw1904@gmail.com</span>
                                    </div>
                                    <div>
                                        <h6>Phone number : </h6>
                                        <span>09 755 027 086</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Second Row with 2 advisors */}
                    <div className="col-12 col-sm-6 col-lg-3">
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <div className="advisor_thumb">
                                        <img src={YPA} alt="Ye Pyae Aung" />

                                    </div>
                                    <br />
                                    <div className="single_advisor_details_info">
                                        <h6>Ye Pyae Aung</h6>
                                        <p className="designation">Power Point</p>
                                    </div>
                                </div>
                                <div className="flip-card-back">
                                    <h6>More About Ye Pyae Aung</h6>
                                    <p>Ye Pyae Aung is an designer of Hotel Malikha Project and he is a <b>Professional CRYPTO Trader</b>, he won thousands and lost millions...</p>
                                    <div>
                                        <h6>Gmail : </h6>
                                        <span>yepyaeaung.mdy.mm@gmail.com</span>
                                    </div>
                                    <div>
                                        <h6>Phone number : </h6>
                                        <span>09 941 641 274</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3">
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <div className="advisor_thumb">
                                        <img src={KST} alt="Kaung Sitt Thway" />
                                    </div>
                                    <br />
                                    <div className="single_advisor_details_info">
                                        <h6>Kaung Sitt Thway</h6>
                                        <p className="designation"></p>
                                    </div>
                                </div>
                                <div className="flip-card-back">
                                    <h6>More About Kaung Sitt Thway</h6>
                                    <p>Kaung Sitt Thway is a ပျောက်ဆုံးနေသူ of our Project</p>
                                    <div>
                                        <h6>Gmail : </h6>
                                        <span>kaungkaung969@gmail.com</span>
                                    </div>
                                    <div>
                                        <h6>Phone number : </h6>
                                        <span>09 941 641 274</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}

export default ContactUs;
