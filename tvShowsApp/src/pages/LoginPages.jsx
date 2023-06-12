import { useContext } from "react";
import { AuthContext } from "../auth/context/AuthContext";
import Window from "../ui/components/Window";
import Spinner from "../ui/components/Spinner";



const LoginPage = () => {
  const { logged } = useContext(AuthContext);
  console.log({ logged });

  return (
    <>
      {!logged ? (
        <>
          <Window title={"SERIES"} paragraph={"Popular Series"} />
          <Window title={"MOVIES"} paragraph={"Popular Movies"} />
        </>
      ) : (
        <Spinner/>
      )}
    </>
  );
};

export default LoginPage;
