import { Testimonial } from "@/constants";
import React from "react";

const Testimonials = () => {
  return (
    <div className="root-container pt-10 pb-20">
      <div className="space-y-16 text-basecolor">
        <div className="justify-items-center space-y-4 text-center">
          <h2 className="text-4xl font-medium">
            Trusted by creators and the <br className="hidden md:flex" />
            world's largest companies
          </h2>
          <span className="text-neutral-500">
            Join the growing number of customers and champions who trust Quide
            for their payments.
          </span>
        </div>

        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {Testimonial.map((item) => (
              <div
                key={item.id}
                className="bg-white border shadow p-6 rounded-md space-y-6 cursor-pointer hover:scale-105 hover:border-primary transition-all duration-500"
              >
                <div className="flex gap-2 items-center">
                  <img
                    src={item.avatar}
                    alt="avatar"
                    className="size-16 rounded-full object-cover"
                  />
                  <div className="flex flex-col gap-2">
                    <span className="font-semibold">{item.name}</span>
                    <span className="text-neutral-500 text-sm">{item.role}</span>
                  </div>
                </div>
                
                <p className="text-neutral-600">{item.comments}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
