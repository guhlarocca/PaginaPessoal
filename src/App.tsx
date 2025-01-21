import { Suspense } from "react";
import Home from "./components/home";

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Home />
    </Suspense>
  );
}

export default App;
