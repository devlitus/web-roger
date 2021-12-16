
import 'animate.css';
import './Sidebar.css';
export const Sidebar = ({ children, isSidebarOpen }) => {
  return (
    <div className={`sidebar ${isSidebarOpen ? 'animate__animated animate__fadeInRight' : 'animate__animated animate__fadeOutRight'}`}>
      {children}
    </div>
  )
}
