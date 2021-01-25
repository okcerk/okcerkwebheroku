import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga";

const LocationChangeRegister = () => {
  const location = useLocation();
  useEffect(() => {
    const path = location.pathname + (location.search ? `?${location.search}` : "");
    ReactGA.set({ page: path }); // Update the user's current page
    ReactGA.pageview(path); // Record a pageview for the given page
  }, [location]);
  return <></>;
};

export default LocationChangeRegister;
