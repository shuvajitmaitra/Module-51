import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Home = () => {
  const authInfo = useContext(AuthContext); //use context..... it can be accessible form anywhere
  console.log(authInfo);
  return (
    <div className="text-center text-5xl font-bold">
      <h1> Intro: {authInfo.intro}</h1>
    </div>
  );
};

export default Home;
