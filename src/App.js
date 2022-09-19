import sociality_logo from "./img/Sociality-logo.png";
import Avatar from "./components/Avatar";
import Legend from "./components/legend/Legend";
import ListPostCards from "./components/ListPostCards";
import Sidebar from "./components/sidebar/Sidebar";
function App() {
  return (
    <div className="grid grid-cols-12 w-full font-raleway overflow-clip min-h-screen">
      
      <div className="bg-[#f5f7f8] col-span-3 lg:col-span-2 h-full">
        <Sidebar/>
        {/* Logo Section */}
        <div className="w-full bg-[#31363b] h-12">
          <img src={sociality_logo} className="mx-auto py-3"></img>
        </div>
        {/* Logo Section END*/}
        <div className="grid grid-cols-4 min-h-full">
          <div className="bg-[#303438] col-span-1 min-h-full"></div>
          <div className="col-span-3 bg-[#44484d] min-h-full"></div>
        </div>
      </div>

      {/* Right Column */}
      <div className="bg-[#f5f7f8] h-auto col-span-9 lg:col-span-10 px-1 sm:px-4 md:px-8 lg:px-12 pt-8 pb-12">
        {/* Right Column Top section */}
        <div className="w-full grid grid-cols-4">
          <Legend />
          <Avatar fileName="Picture.png" />
        </div>
        {/* Right Column Top section END*/}
        <div className="grid grid-cols-1 xl:grid-cols-3 h-full pb-12 gap-6">
          <ListPostCards username="socialorientation_test"/>
        </div>
      </div>


    </div>
  );
}

export default App;
