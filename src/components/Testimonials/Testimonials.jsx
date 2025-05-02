import React from "react";
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "Sara Ali",
    text: "This app has made shopping so much easier! The user-friendly interface and the variety of products offered are fantastic. I highly recommend it to everyone!",
    img: "https://picsum.photos/101/101", // Replace with an image of Malala
  },
  {
    id: 2,
    name: "Hamza Ahmed",
    text: "I’ve been using this app for months and the service is always top-notch.Everything is just a click away. Great job on this platform!",
    img: "https://picsum.photos/102/102", // Replace with an image of Benazir Bhutto
  },
  {
    id: 3,
    name: "Mujtaba Shah",
    text: "As someone who's always on the go, this app is perfect for shopping on the move. The delivery is fast, and I’m always happy with my purchases. Highly recommended!",
    img: "https://picsum.photos/104/104", // Replace with an image of Imran Khan
  },
  {
    id: 4,
    name: "Mohsin Khan",
    text: "I've been using the app for a while now, and it's very efficient. The variety of products and fast delivery time make it my go-to app for shopping.",
    img: "https://picsum.photos/103/103", // Replace with an image of Fawad Khan
  },
];

const Testimonials = () => {
  let settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            What our customers are saying
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Testimonials
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Hear from some of the most respected individuals in Pakistan on how
            they feel about our shopping platform.
          </p>
        </div>

        {/* Testimonial cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div className="my-6" key={data.id}>
                <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-slate-600 bg-primary/10 relative">
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt={data.name}
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs dark:text-slate-300 text-gray-500">
                        {data.text}
                      </p>
                      <h1 className="text-xl font-bold dark:text-slate-300 text-black/80 dark:text-light">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0"></p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
