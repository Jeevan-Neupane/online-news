import { useContext } from "react";
import { AppContext } from "../ContextApi/Context";

const useGlobalContext = () => {
  const Data = useContext(AppContext);
  return Data;
};

export default useGlobalContext;
