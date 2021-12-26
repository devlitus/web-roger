import "animate.css";
import "./Sidebar.css";
export const Sidebar = ({ children, isSidebarOpen }) => {
  const addClass = () => {};
  return (
    <div
      className={`sidebar ${
        isSidebarOpen
          ? "animate__animated animate__fadeInRight"
          : "animate__animated animate__fadeOutRight"
      }`}
      style={{
        display: isSidebarOpen && "block",
      }}
    >
      {children}
    </div>
  );
};

/* style={{
  display: isSidebarOpen ? "block" : "none",
}} */
// animate__animated animate__fadeInRight
// animate__animated animate__fadeOutRight
