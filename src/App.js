import { AppRouter } from "./AppRouting/router";
import { Navbar } from "./components/Navbar";
export const App = () => {
  return (
    <>
      <Navbar />
      <AppRouter />
    </>
  );
};
