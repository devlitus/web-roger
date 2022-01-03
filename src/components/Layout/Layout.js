import { Header } from "../Header/Header";
import { Navbar } from "../Navbar/Navbar";
import "./Layout.css";
export const Layout = ({ children }) => {
  return (
    <>
      <Header>
        <Navbar />
      </Header>
      {children}
    </>
  );
};
