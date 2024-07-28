import { Outlet } from "react-router-dom";
import Header from "../shared/components/partials/Header";
// import Footer from "../partials/Header"; // Remove this line if not needed

const RootLayout = () => {
  return (
    <div className="root-main">    
       <Header/>
       
      <Outlet />
    </div>
  );
}

export default RootLayout;
