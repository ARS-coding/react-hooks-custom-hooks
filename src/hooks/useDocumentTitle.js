import { useEffect } from "react";

function useDocumentTitle(pageTitle = "Underreacted") {
  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);
}

export default useDocumentTitle;
