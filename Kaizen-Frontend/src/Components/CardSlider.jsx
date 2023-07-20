import React from 'react';
import './slider.css';
import youth from "../Gifs/young-coders-program.jpg"
import coding from "../Gifs/Coding-Academy.png"
import web from "../Gifs/Web-Devlopment.jpg"
import consulting from "../Gifs/Consulting.jpg"
import { Link } from 'react-router-dom';
const CardSlider = () => {
  return (
    <div className="container-fluid contenedor text-center">
      {/* <h1 className="text-center">Services</h1> */}
      <div className="container text-center d-flex flex-wrap justify-content-center">
        <div className="col-lg-4 col-md-6 col-sm-12 container_foto">
          <div className="ver_mas text-center">
            <span className="lnr lnr-eye">
            <Link to="/Kaizen-training"><button>View More </button></Link>
            </span>
          </div>
          <article className="text-left">
            <h2>Coding Academy</h2>
            <h4>Master Python, Excel, and Power BI with expert-led courses for adults and both IT and non-IT students.</h4>
          </article>
          <img src={youth} alt="" />
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 container_foto">
          <div className="ver_mas text-center">
            <span className="lnr lnr-eye">
            <Link to="/Kaizen-kids"><button>View More </button></Link>
            </span>
          </div>
          <article className="text-left">
            <h2>Young Coders Program</h2>
            <h4>Unlocking young minds with creative programming and tech education for kids and youth.</h4>
          </article>
          <img  src={coding} alt="" />
        </div>

        <div className="col-lg-4 col-md-6 col-sm-12 container_foto">
          <div className="ver_mas text-center">
            <span className="lnr lnr-eye">
            <Link to="/Kaizen-consulting"><button>View More </button></Link>
            </span>
          </div>
          <article className="text-left">
            <h2>Web Development</h2>
            <h4>Empowering businesses through innovative technology solutions and strategic consulting.</h4>
          </article>
          <img src={web} alt="" />
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 container_foto">
          <div className="ver_mas text-center">
            <span className="lnr lnr-eye">
              <Link to="/Kaizen-consulting"><button>View More </button></Link>
            </span>
          </div>
          <article className="text-left">
            <h2>Consulting</h2>
            <h4>Providing strategic consulting services for businesses to achieve their goals.</h4>
          </article>
          <img src={consulting} alt="" />
        </div>
      </div>
    </div>
  );
}

export default CardSlider;


// import React, { useRef, useEffect, useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
// import MainFooter from './MainFooter';
// import MainNavbar from './Navbar';
// import CodingAcademy from "../Gifs/Coding-Academy.png";
// import Consulting from "../Gifs/Consulting.jpg";
// import web from "../Gifs/Web-Devlopment.jpg"
// import young from "../Gifs/young-coders-program.jpg"
// // import "./index.css";

// const Slider = () => {
//   const slideRef = useRef(null);
//   const [loadingProgress, setLoadingProgress] = useState(0);

//   const handleClickNext = () => {
//     let items = slideRef.current.querySelectorAll(".item");
//     slideRef.current.appendChild(items[0]);
//   };

//   const handleClickPrev = () => {
//     let items = slideRef.current.querySelectorAll(".item");
//     slideRef.current.prepend(items[items.length - 1]);
//   };

//   const data = [
//     {
//       id: 1,
//       imgUrl: web,
//       desc: "Some beautiful roads cannot be discovered without getting loss.",
//       name: "EXPLORE NATURE",
//     },
//     {
//       id: 2,
//       imgUrl:
//         CodingAcademy,
//       desc: "Some beautiful roads cannot be discovered without getting loss.",
//       name: "EXPLORE NATURE",
//     },
//     {
//       id: 3,
//       imgUrl:
//        young,
//       desc: "Some beautiful roads cannot be discovered without getting loss.",
//       name: "EXPLORE NATURE",
//     },
//     {
//       id: 4,
//       imgUrl: Consulting,
//       desc: "Some beautiful roads cannot be discovered without getting loss.",
//       name: "EXPLORE NATURE",
//     },
//     {
//       id: 5,
//       imgUrl: web,
//       desc: "Some beautiful roads cannot be discovered without getting loss.",
//       name: "EXPLORE NATURE",
//     },
//   ];

//   return (
//     <>
//         {/* <MainNavbar/> */}
//     <div className="container">
//       <div className="loadbar" style={{ width: `${loadingProgress}%` }}></div>
//       <div id="slide" ref={slideRef}>
//         {data.map((item) => (
//           <div
//             key={item.id}
//             className="item"
//             style={{ backgroundImage: `url(${item.imgUrl})` }}
//           >
//             <div className="content">
//               <div className="name">{item.name}</div>
//               <div className="des">{item.desc}</div>
//               <button>See more</button>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="buttons">
//         <button id="prev" onClick={handleClickPrev}>
//           <FontAwesomeIcon icon={faAngleLeft} />
//         </button>
//         <button id="next" onClick={handleClickNext}>
//           <FontAwesomeIcon icon={faAngleRight} />
//         </button>
//       </div>
//     </div>
//     {/* <MainFooter/> */}
//     </>
//   );
// };

// export default Slider;
