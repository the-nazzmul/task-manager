import Image from "next/image";
import developer from "../../../public/assets/developer.svg";
import doctor from "../../../public/assets/doctor.svg";
import student from "../../../public/assets/student.svg";
import ConsumerCard from "./ConsumerCard";

const Consumers = () => {
  return (
    <div className="my-24">
      <h1 className="text-center text-4xl font-bold">Consumers</h1>
      <h4 className="text-center mt-8">People who benefit most from our app</h4>
      <div className="flex items-center justify-between gap-8 px-4 mt-12">
        <ConsumerCard
          image={developer}
          title="Developers"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum,
              quasi asperiores! Qui vero officia voluptatem. Doloribus excepturi
              dolores veniam animi!"
        />
        <ConsumerCard
          image={doctor}
          title="Doctors"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum,
              quasi asperiores! Qui vero officia voluptatem. Doloribus excepturi
              dolores veniam animi!"
        />
        <ConsumerCard
          image={student}
          title="Students"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum,
              quasi asperiores! Qui vero officia voluptatem. Doloribus excepturi
              dolores veniam animi!"
        />
      </div>
    </div>
  );
};

export default Consumers;
