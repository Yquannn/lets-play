import { Outlet } from "react-router-dom";
import Header from "../shared/components/partials/Header";
import HomePage from "../pages/Home";
// import Footer from "../partials/Header"; // Remove this line if not needed

const ContentLayout = () => {
  return (
    <div className="root-main">    
       <Header/>
       <p>content layout</p>
        <HomePage/>
      <Outlet />
    </div>
  );
}

export default ContentLayout;
