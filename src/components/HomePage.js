import React, { useEffect, useState } from "react";
import About from "./About";
import ArticleList from "./ArticleList";
import useDocumentTitle from "../hooks/useDocumentTitle";
import useQuery from "../hooks/useQuery";

function HomePage() {
  const { data, isLoaded } = useQuery("http://localhost:3000/posts");
  // set the document title
  useDocumentTitle()

  return (
    <>
      <About />
      {isLoaded ? <ArticleList posts={data} /> : <h3>Loading...</h3>}
    </>
  );
}

export default HomePage;
