import Sidebar from "./components/SideBar";
import NavBar from "./components/Navbar";
import SearchBar from "./components/Search";
import Tabs from "./components/Tabs";
import StoryCard from "./components/StoryCard";
import { storyCards, tabsData } from "./utils/constant";

export default function Home() {




  return (
    <div className="flex ">

      <div className="w-[220px] bg-white shadow-md flex flex-col">
        <Sidebar />
      </div>
      {/* main content */}

      <div className="flex-1  flex flex-col">
        <NavBar />

        <div className="flex-1 p-6">
          {/* search bar */}
          <SearchBar />

          {/* tabs  */}
          <Tabs tabsData={tabsData} />

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
            {storyCards.map((card) => (
              <StoryCard key={card.id} card={card} />
            ))}
          </div>
        </div>
      </div>



    </div>
  );
}
