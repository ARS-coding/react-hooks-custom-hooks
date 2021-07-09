import React, { useEffect, useState } from "react";
import About from "./About";
import ArticleList from "./ArticleList";
import useDocumentTitle from "../hooks/useDocumentTitle";
import useQuery from "../hooks/useQuery";

function HomePage() {
  // fetch the data
  const { data: post, isLoaded } = useQuery("http://localhost:3000/posts");
  
  // set the document title
  useDocumentTitle()
  
  return (
    <>
      <About />
      {isLoaded ? <ArticleList posts={post} /> : <h3>Loading...</h3>}
    </>
  );
}

export default HomePage;
