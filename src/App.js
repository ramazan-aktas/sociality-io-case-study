import Sidebar from "./components/sidebar/Sidebar";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
function App() {
  const { companyName } = useParams();
  // If companyName is undefined, navigate to the solution page
  const navigate = useNavigate();
  useEffect(() => {
    if (companyName === undefined) {
      
      navigate("/socialorientation_test/publish/feed");
    }

    return () => {
      console.log("Navigation is successfull")
    };
    // eslint-disable-next-line
  }, [companyName]);

  return (
    <div className="grid grid-cols-11 w-full font-raleway overflow-clip min-h-screen">
      <Sidebar />

      {/* Right Column */}
      <div className="bg-[#f5f7f8] h-auto col-span-9 px-1 sm:px-4 md:px-8 lg:px-12 pt-8 pb-12">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
