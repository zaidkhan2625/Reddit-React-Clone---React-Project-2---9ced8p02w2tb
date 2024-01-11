import { useStateValue } from "./StatePeovider";
import LoginResultComponent from "./LoginResultComponent";
import React from "react";
import Result from "./Result"
function Home() {

  const { isloggedin } = useStateValue();

  return (
    <>
      {isloggedin ? <LoginResultComponent /> : <Result />}
    </>
  );
}

export default Home;