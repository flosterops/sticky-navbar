import { NavBar } from "./components";
import { useEffect, useState } from "react";
import { Companies } from "./components/Companies";
import { fetchCompanies } from "./requests/fetchCompanies";

const App = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const handleFetch = async () => {
      const data = await fetchCompanies();
      setCompanies(data);
    };

    handleFetch();
  }, []);

  return (
    <>
      <NavBar />
      <Companies companies={companies} />
    </>
  );
};

export { App };
