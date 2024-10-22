import { Fragment, useState } from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Procedure from "../components/Procedure";
import Clients from "../components/Clients";
import FeedBackCard from "../components/FeedBackCard";
import StarRating from "../components/StarRating";

const HomePage = () => {
  const [userRating, setUserRating] = useState("");

  return (
    <Fragment>
      <Hero />
      <Features />
      <Procedure />
      <Clients />
    </Fragment>
  );
};

export default HomePage;
