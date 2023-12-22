import { Outlet } from "react-router-dom";


const LayOut = () => {
      return (
            <div className="font-poppins">
                  <Outlet></Outlet>
            </div>
      );
};

export default LayOut;