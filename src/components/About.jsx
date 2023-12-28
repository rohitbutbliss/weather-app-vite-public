import { useParams } from "react-router-dom";

const About = () => {
  const { name } = useParams();
  return (
    <div className="bg-pink-500 text-white text-2xl">
      Hey {name}, this is about page About
    </div>
  );
};

export default About;
