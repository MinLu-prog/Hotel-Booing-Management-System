// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import businessFacilitiesImg from '../assets/room-1.jpg';
// import guestFacilitiesImg from '../assets/room-2.jpg';
// import beautyFacilitiesImg from '../assets/room-3.jpg';
// import recreationalFacilitiesImg from '../assets/service.jpg';

// function Facilitiesscreen() {
//   useEffect(() => {
//     AOS.init({
//       duration: 2000,
//       once: true,
//     });
//   }, []);

//   return (
//     <div className="facilities__container">
//       {/* Business Facilities Section */}
//       <section className="facility" style={{ backgroundImage: `url(${businessFacilitiesImg})` }} data-aos="fade-up">
//         <div className="facility__content">
//           <h2 className="facility__header">Business Facilities</h2>
//           <p className="facility__description">
//             Our business facilities offer state-of-the-art conference rooms, high-speed internet, and all the amenities you need to stay productive while traveling.
//           </p>
//         </div>
//       </section>

//       {/* Guest Facilities Section */}
//       <section className="facility" style={{ backgroundImage: `url(${guestFacilitiesImg})` }} data-aos="fade-up">
//         <div className="facility__content">
//           <h2 className="facility__header">Guest Facilities</h2>
//           <p className="facility__description">
//             Enjoy a comfortable and relaxing stay with our top-tier guest facilities, including 24-hour room service, luxurious bedding, and personalized service.
//           </p>
//         </div>
//       </section>

//       {/* Beauty and Health Facilities Section */}
//       <section className="facility" style={{ backgroundImage: `url(${beautyFacilitiesImg})` }} data-aos="fade-up">
//         <div className="facility__content">
//           <h2 className="facility__header">Beauty and Health Facilities</h2>
//           <p className="facility__description">
//             Pamper yourself in our beauty and health facilities, featuring a spa, fitness center, and wellness programs to rejuvenate your body and mind.
//           </p>
//         </div>
//       </section>

//       {/* Recreational Facilities Section */}
//       <section className="facility" style={{ backgroundImage: `url(${recreationalFacilitiesImg})` }} data-aos="fade-up">
//         <div className="facility__content">
//           <h2 className="facility__header">Recreational Facilities</h2>
//           <p className="facility__description">
//             Unwind with our recreational facilities, offering a range of activities including swimming, sports, and entertainment options for all ages.
//           </p>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Facilitiesscreen;


// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import businessFacilitiesVideo from '../assets/Hotel_video1.mp4';
// import guestFacilitiesVideo from '../assets/Hotel_video2.mp4';
// import beautyFacilitiesVideo from '../assets/Hotel_video3.mp4';
// import recreationalFacilitiesVideo from '../assets/Hotel_video2.mp4';

// function Facilitiesscreen() {
//   useEffect(() => {
//     AOS.init({
//       duration: 2000,
//       once: true,
//     });
//   }, []);

//   return (
//     <div className="facilities__container">
//       {/* Business Facilities Section */}
//       <section className="facility" data-aos="fade-up">
//         <video autoPlay loop muted className="facility__video">
//           <source src={businessFacilitiesVideo} type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//         <div className="facility__content">
//           <h2 className="facility__header">Business Facilities</h2>
//           <p className="facility__description">
//             Our business facilities offer state-of-the-art conference rooms, high-speed internet, and all the amenities you need to stay productive while traveling.
//           </p>
//         </div>
//       </section>

//       {/* Guest Facilities Section */}
//       <section className="facility" data-aos="fade-up">
//         <video autoPlay loop muted className="facility__video">
//           <source src={guestFacilitiesVideo} type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//         <div className="facility__content">
//           <h2 className="facility__header">Guest Facilities</h2>
//           <p className="facility__description">
//             Enjoy a comfortable and relaxing stay with our top-tier guest facilities, including 24-hour room service, luxurious bedding, and personalized service.
//           </p>
//         </div>
//       </section>

//       {/* Beauty and Health Facilities Section */}
//       <section className="facility" data-aos="fade-up">
//         <video autoPlay loop muted className="facility__video">
//           <source src={beautyFacilitiesVideo} type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//         <div className="facility__content">
//           <h2 className="facility__header">Beauty and Health Facilities</h2>
//           <p className="facility__description">
//             Pamper yourself in our beauty and health facilities, featuring a spa, fitness center, and wellness programs to rejuvenate your body and mind.
//           </p>
//         </div>
//       </section>

//       {/* Recreational Facilities Section */}
//       <section className="facility" data-aos="fade-up">
//         <video autoPlay loop muted className="facility__video">
//           <source src={recreationalFacilitiesVideo} type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//         <div className="facility__content">
//           <h2 className="facility__header">Recreational Facilities</h2>
//           <p className="facility__description">
//             Unwind with our recreational facilities, offering a range of activities including swimming, sports, and entertainment options for all ages.
//           </p>
//         </div>
//       </section>
//     </div>
//   );
// }

// // export default Facilitiesscreen;
// import React, { useState } from 'react';
// import businessFacilitiesVideo from '../assets/Hotel_video1.mp4';
// import guestFacilitiesVideo from '../assets/Hotel_video2.mp4';
// import beautyFacilitiesVideo from '../assets/Hotel_video3.mp4';
// import recreationalFacilitiesVideo from '../assets/Hotel_video4.mp4';

// const videoSources = {
//     business: businessFacilitiesVideo,
//     guest: guestFacilitiesVideo,
//     beauty: beautyFacilitiesVideo,
//     recreational: recreationalFacilitiesVideo
// };

// const contentTexts = {
//     business: "Our Business Facilities are designed to cater to all your professional needs. We offer state-of-the-art conference rooms equipped with high-speed internet, projectors, and whiteboards. Our business center also provides printing, copying, and scanning services. Whether you're hosting a large conference or a small meeting, our facilities are perfect for ensuring a productive and successful event.",
//     guest: "At our hotel, we prioritize guest comfort and convenience. Our guest facilities include spacious and luxurious rooms with modern amenities such as high-speed Wi-Fi, flat-screen TVs, and comfortable bedding. We also offer 24-hour room service, laundry facilities, and a concierge service to assist with all your needs. Enjoy a relaxing stay with our exceptional guest facilities.",
//     beauty: "Pamper yourself with our Beauty and Health Facilities, designed to rejuvenate and refresh. Our spa offers a range of treatments including massages, facials, and body scrubs. Stay fit with our fully equipped gym and take advantage of our wellness programs. We also provide beauty treatments such as haircuts, manicures, and pedicures to ensure you look and feel your best during your stay.",
//     recreational: "Our Recreational Facilities are perfect for leisure and fun. Enjoy our outdoor swimming pool, sports courts, and lush garden areas. We also offer various activities and entertainment options, including guided tours, workshops, and special events. Whether you want to relax or stay active, our recreational facilities provide a diverse range of options to enhance your experience."
// };

// const FacilitiesScreen = () => {
//     const [selectedFacility, setSelectedFacility] = useState(null);
//     const [fadeTransition, setFadeTransition] = useState(false);

//     const handleFacilityClick = (facility) => {
//         setFadeTransition(true);
//         setTimeout(() => {
//             setSelectedFacility(facility);
//             setFadeTransition(false);
//         }, 300);
//     };

//     const getVideoSource = () => {
//         return videoSources[selectedFacility] || recreationalFacilitiesVideo;
//     };

//     const getContent = () => {
//         return contentTexts[selectedFacility] || "Select a facility to see the details.";
//     };

//     return (
//         <div className="facilities-container">
//             {/* Left Part */}
//             <div className="facilities-left">
//                 <h1>Facilities</h1>
//                 <div className="facility-boxes">
//                     <div className="facility-box" onClick={() => handleFacilityClick('business')}>
//                         Business Facilities
//                     </div>
//                     <div className="facility-box" onClick={() => handleFacilityClick('guest')}>
//                         Guest Facilities
//                     </div>
//                     <div className="facility-box" onClick={() => handleFacilityClick('beauty')}>
//                         Beauty and Health Facilities
//                     </div>
//                     <div className="facility-box" onClick={() => handleFacilityClick('recreational')}>
//                         Recreational Facilities
//                     </div>
//                 </div>
//             </div>

//             {/* Right Part */}
//             <div className={`facilities-right ${fadeTransition ? 'fade-out' : 'fade-in'}`}>
//                 <video autoPlay loop muted className="background-video">
//                     <source src={getVideoSource()} type="video/mp4" />
//                     Your browser does not support the video tag.
//                 </video>
//                 <div className="content-box">
//                     <h2>{selectedFacility ? (selectedFacility.charAt(0).toUpperCase() + selectedFacility.slice(1)) : 'Select a Facility'}</h2>
//                     <p>{getContent()}</p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default FacilitiesScreen;


import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import businessFacilitiesVideo from '../assets/Hotel_video1.mp4';
import guestFacilitiesVideo from '../assets/Hotel_video2.mp4';
import beautyFacilitiesVideo from '../assets/Hotel_video5.mp4';
import recreationalFacilitiesVideo from '../assets/Hotel_video4.mp4';

function Facilitiesscreen() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);

  return (
    <div className="facilities__container">
      {/* Business Facilities Section */}
      <section className="facility" data-aos="fade-right">
        <video autoPlay loop muted className="facility__video">
          <source src={businessFacilitiesVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="facility__content">
          <h3 className="facility__header">Business Facilities</h3>
          <p className="facility__description">
            Our business facilities offer state-of-the-art conference rooms, high-speed internet, and all the amenities you need to stay productive while traveling.
          </p>
        </div>
      </section>

      {/* Guest Facilities Section */}
      <section className="facility" data-aos="fade-left">
        <video autoPlay loop muted className="facility__video">
          <source src={guestFacilitiesVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="facility__content">
          <h3 className="facility__header">Guest Facilities</h3>
          <p className="facility__description">
            Enjoy a comfortable and relaxing stay with our top-tier guest facilities, including 24-hour room service, luxurious bedding, and personalized service.
          </p>
        </div>
      </section>

      {/* Beauty and Health Facilities Section */}
      <section className="facility" data-aos="zoom-out">
        <video autoPlay loop muted className="facility__video">
          <source src={beautyFacilitiesVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="facility__content">
          <h3 className="facility__header">Beauty and Health Facilities</h3>
          <p className="facility__description">
            Pamper yourself in our beauty and health facilities, featuring a spa, fitness center, and wellness programs to rejuvenate your body and mind.
          </p>
        </div>
      </section>

      {/* Recreational Facilities Section */}
      <section className="facility" data-aos="slide-up">
        <video autoPlay loop muted className="facility__video">
          <source src={recreationalFacilitiesVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="facility__content">
          <h3 className="facility__header">Recreational Facilities</h3>
          <p className="facility__description">
            Unwind with our recreational facilities, offering a range of activities including swimming, sports, and entertainment options for all ages.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Facilitiesscreen;
