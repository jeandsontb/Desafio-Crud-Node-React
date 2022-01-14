import { useContext } from "react";

import { CompanyContext } from "../context/CompanyContext";

const useCompany = () => {
  const context = useContext(CompanyContext);

  if(!context) {
    throw new Error('Nenhum dado encontrado!');
  }

  return context;
}

export default useCompany