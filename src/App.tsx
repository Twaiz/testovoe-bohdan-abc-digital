import { Suspense } from "react";

import Loader from "./ui/Loader";
import Routing from "./components/Routing";

import "./styles/Main.module.css";

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routing />
    </Suspense>
  );
};

export default App;
