// import { Header } from "./components/Header/Header";
import { AppRouter } from "./components/AppRouting/AppRouter";

// import { Navbar } from "./components/Navbar/Navbar";
import { Layout } from "./components/Layout/Layout";
// import { Home } from "./pages/Home/Home";
import "./App.css";
export const App = () => {
  return (
    <>
      <Layout>
        <AppRouter />
      </Layout>
    </>
  );
};
