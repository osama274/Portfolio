import React from "react";
import "./testimonials.css";
import AVTR5 from "../../assets/avatar5.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVT4 from "../../assets/avatar4.jpg";
import { Navigation } from "swiper";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper-bundle.min.css";
import "swiper/modules/pagination/pagination.min.css";

const Testimonials = () => {
  const data = [
    {
      avatar: AVTR5,
      name: "Tina Snow",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum reiciendis consectetur sit doloribus quo? Molestiae earum dicta ab voluptatibus. Voluptate asperiores sapiente praesentium commodi et error quod eveniet maxime consequuntur?",
    },
    {
      avatar: AVTR2,
      name: "Shatta Wale",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum reiciendis consectetur sit doloribus quo? Molestiae earum dicta ab voluptatibus. Voluptate asperiores sapiente praesentium commodi et error quod eveniet maxime consequuntur?",
    },
    {
      avatar: AVTR3,
      name: "Kwame Despite",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum reiciendis consectetur sit doloribus quo? Molestiae earum dicta ab voluptatibus. Voluptate asperiores sapiente praesentium commodi et error quod eveniet maxime consequuntur?",
    },
    {
      avatar: AVT4,
      name: "Sonia Smith",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum reiciendis consectetur sit doloribus quo? Molestiae earum dicta ab voluptatibus. Voluptate asperiores sapiente praesentium commodi et error quod eveniet maxime consequuntur?",
    },
  ];
  return (
    <section id="testimonials">
      <h5>Review from client</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Navigation, Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt=" Avatar" />
              </div>
              <h5 className="client__name"> {name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
