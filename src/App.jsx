import Tasks from "./components/Tasks";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <Tasks />
      <Toaster position="top-right" />
    </>
  );
};

export default App;
