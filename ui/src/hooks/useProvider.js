import { useContext } from "react";

import { Context } from "store/context";

const useProvider = () => useContext(Context);

export default useProvider;
