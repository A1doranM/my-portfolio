import React from "react";
import {Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "./testimonials.css";

import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

function Testimonials(props) {
    return (
        <section id="testimonials">
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>

            <Swiper className="container testimonials__container"
                    modules={[Pagination]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
            >
                <SwiperSlide>
                    <div className="testimonial">
                        <div className="client__avatar">
                            <img src={AVTR1} className="client__avatar"/>
                        </div>
                        <h5 className="client__name">Test name</h5>
                        <small className="client__review">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Architecto commodi cupiditate dignissimos dolores eaque ex explicabo fugiat impedit labore
                            laborum, modi molestias neque nesciunt nobis quo repellendus sapiente, tempore
                            tenetur.
                        </small>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="testimonial">
                        <div className="client__avatar">
                            <img src={AVTR2} className="client__avatar"/>
                        </div>
                        <h5 className="client__name">Test name</h5>
                        <small className="client__review">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Architecto commodi cupiditate dignissimos dolores eaque ex explicabo fugiat impedit labore
                            laborum, modi molestias neque nesciunt nobis quo repellendus sapiente, tempore
                            tenetur.
                        </small>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="testimonial">
                        <div className="client__avatar">
                            <img src={AVTR3} className="client__avatar"/>
                        </div>
                        <h5 className="client__name">Test name</h5>
                        <small className="client__review">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Architecto commodi cupiditate dignissimos dolores eaque ex explicabo fugiat impedit labore
                            laborum, modi molestias neque nesciunt nobis quo repellendus sapiente, tempore
                            tenetur.
                        </small>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="testimonial">
                        <div className="client__avatar">
                            <img src={AVTR4} className="client__avatar"/>
                        </div>
                        <h5 className="client__name">Test name</h5>
                        <small className="client__review">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Architecto commodi cupiditate dignissimos dolores eaque ex explicabo fugiat impedit labore
                            laborum, modi molestias neque nesciunt nobis quo repellendus sapiente, tempore
                            tenetur.
                        </small>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    );
}

export default Testimonials;