import { Outlet } from "react-router-dom";

const CareersLayout = () => {
    return ( 
        <div className="careers-layout">
            <h2>Careers</h2>
            <Outlet/>
        </div>
      );
}
 
export default CareersLayout;