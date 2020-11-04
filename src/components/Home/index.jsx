import React from "react";
import { gql, useQuery } from "@apollo/client";

const Home = () => {
  const query = gql`
    query Companies {
      company {
        id
        name
        bio
        picture
      }
    }
  `;
  const { loading, error, data } = useQuery(query);
  console.log("data", data);
  console.log("error", error);
  console.log("loading", loading);

  return "hola mundo";
};

export default Home;
