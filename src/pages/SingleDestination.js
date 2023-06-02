import React from "react";
import { useParams } from "react-router";

const SingleDestination = () => {
  const { title } = useParams();
  return (
    <div>
      <h1>Single Destination Page</h1>
      <p>{title}</p>
    </div>
  );
};

export default SingleDestination;
