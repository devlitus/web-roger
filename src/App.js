import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import { Header } from "./components/Header/Header";
import { Logo } from "./components/Logo/Logo";
import { Menu } from "./components/Menu/Menu";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { MenuSocialMedia } from "./components/MenuSocialMedia/MenuSocialMedia";
import { AppRouter } from "./components/AppRouting/AppRouter";

export const App = () => {
  const screenSize = window.screen.width;
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScreenSize, setIsScreenSize] = useState(screenSize);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsScreenSize(window.screen.width);
    },false);
  }, [screenSize]);

  const handlerSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  
  return (
    <>
      <Header>
        <Logo />
        {(isScreenSize <= 768) ? <MenuSocialMedia /> : <Menu />}
        {isScreenSize <= 768 && <FontAwesomeIcon size="2x" icon={faBars} onClick={handlerSidebar} />}
      </Header>
      <Sidebar isSidebarOpen={isSidebarOpen}>
        <FontAwesomeIcon
          icon={faTimes}
          className="sidebar-icon__close"
          onClick={handlerSidebar}
        />
        <Menu handlerSidebar={handlerSidebar} />
      </Sidebar>
      <AppRouter />
    </>
  );
};
