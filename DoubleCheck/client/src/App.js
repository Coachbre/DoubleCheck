// admin function not used yet
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Spinner } from "reactstrap";
import Header from "./components/Header";
import ApplicationViews from "./components/ApplicationViews";
import { onLoginStatusChange } from "./modules/authManager";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);


  // const userIsAdmin = () => {
  //   getCurrentUserType().then((userType) => {
  //     if (userType.name === "Admin") {
  //       setIsAdmin(true);
  //     } else {
  //       setIsAdmin(false);
  //     }
  //   });
  // };

  useEffect(() => {
    onLoginStatusChange(setIsLoggedIn);
  }, []);

  // useEffect(() => {
  //   if (isLoggedIn) {
  //     userIsAdmin();
  //   }
  // }, [isLoggedIn]);

  if (isLoggedIn === null) {
    return <Spinner className="app-spinner dark" />;
  }

  return (
    <Router>
      <Header isLoggedIn={isLoggedIn} className="header"/>
      <ApplicationViews isLoggedIn={isLoggedIn} />
    </Router>
  );
}

export default App;