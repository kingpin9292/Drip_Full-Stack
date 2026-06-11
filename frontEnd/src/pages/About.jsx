import React from "react";
import Tittle from "../components/Tittle";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Tittle text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img src={assets.about_img} alt="" className="w-full md:max-w-[450px]" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>Drip was born out of a passion for innovation and a desire to revolutionize fashion</p>
          <p>Since our inception, we've worked hard to curate a diverse selection of apparel</p>
          <b className="text-gray-800">Our Mission</b>
          <p>Our missoin at Drip is to empower customers with choice, convenience and confidence</p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Tittle text1={"WHY"} text2={"US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">we as d afs s dsa </p>
        </div>

        <div className="border border-gray-300 px-10 md:px-16 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">asd asd wq asd d</p>
        </div>
        <div className="border  border-gray-300 px-10 md:px-16 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">asd asd wq asd d</p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
};

export default About;
