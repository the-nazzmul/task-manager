import Image from "next/image";
import React from "react";

const ConsumerCard = ({ image, title, description }) => {
  return (
    <div className="bg-gray-200 p-8 rounded-lg text-center">
      <Image src={image} width={400} height={400} alt="image" />
      <div className="mt-4 space-y-2">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ConsumerCard;
