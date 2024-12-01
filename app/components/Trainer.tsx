import React from "react";
import TrainerCard from "./TrainerCard";

const Trainer = () => {
  return (
    <div className="bg-black py-12 w-full">
      <div className="text-center mb-8">
        <h2 className="text-4xl md:text-4xl animate-pulse bg-white hover:bg-black hover:text-white  font-serif text-black">
          ---Our Most experienced Trainer
        </h2>
      </div>

      {/* Trainer Cards Section */}
      <TrainerCard />
    </div>
  );
};

export default Trainer;
