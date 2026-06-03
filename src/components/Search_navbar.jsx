import React from "react";
import { useState } from "react";
import { Bookmark, Search, Sun, Moon } from "lucide-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { setQuery, setLoading } from "../redux/features/searchSlice";
import { toggleTheme } from "../redux/features/themeSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const query = useSelector((state) => state.search.query);
  const resultsLoaded = useSelector((state) => state.search.resultsLoaded);
  const loading = useSelector((state) => state.search.loading);
  const darkMode = useSelector((state) => state.theme.mode) === "dark";
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [currentQuery, setCurrentQuery] = useState(query);
  const handleSearch = () => {
    if (currentQuery.trim() !== "") {
      navigate("/");
      dispatch(setLoading(true));
      dispatch(setQuery(currentQuery));
    }
  };

  return (
    <div className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-700 ease-in-out ${resultsLoaded||loading ? "top-4 w-[92%] max-w-6xl" : "top-6 md:top-1/2 md:-translate-y-1/2 w-[90%] max-w-3xl"}`}>
      <div className=" flex items-center justify-between gap-4 px-4 md:px-6 py-3 rounded-full border border-white/20 bg-white/10 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.25)] transition-all duration-700">
        <div className="flex items-center gap-3 min-w-fit">
          <Link to="/">
            {darkMode ? (<img className="overflow-hidden rounded-full max-w-10 max-h-10" src="\Logo.png" alt="" />) :
              (<img className="overflow-hidden rounded-full max-w-10 max-h-10" src="\Light_Logo.png" alt="" />)}
          </Link>
        </div>
        <div className="flex-1">
          <div className={`flex items-center gap-3 ${darkMode ? "bg-white/10 border-white/10 hover:bg-white/20 text-white/50" : "bg-black/5 border-black/10 hover:bg-black/10 text-black/50"} rounded-full px-4 py-3`}>
            <Search size={20} className={darkMode ? "text-white/70" : "text-black/70"} />
            <input type="text" value={currentQuery} onKeyDown={(e) => { if (e.key === "Enter") { handleSearch(); } }} onChange={(e) => setCurrentQuery(e.target.value)} placeholder="Search photos, videos, GIFs..." className={`w-full bg-transparent outline-none ${darkMode ? 'text-white placeholder:text-white/50' : 'text-black placeholder:text-black/50'}`} />
          </div>
        </div>
        <div className="flex items-center gap-2 md:gap-3 min-w-fit">
          <button onClick={() => dispatch(toggleTheme())} className={` p-3 rounded-full border transition-all duration-500 hover:scale-105 active:scale-95 ${darkMode ? "bg-white/10 border-white/10 hover:bg-white/20" : "bg-black/5 border-black/10 hover:bg-black/10"}`}>
            {darkMode ? (<Sun className="text-yellow-300" size={22} />) : (<Moon className="text-black/70" size={22} />)}
          </button>
          <Link to="/saved" className={`p-3 rounded-full border transition-all duration-500 hover:scale-105 active:scale-95 ${darkMode ? "bg-white/10 border-white/10 hover:bg-white/20" : "bg-black/5 border-black/10 hover:bg-black/10"} `}><Bookmark className={`${darkMode ? "text-white" : "text-black"}`} size={22} /></Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;