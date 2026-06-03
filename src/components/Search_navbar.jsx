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
    <div
      className={`fixed left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 transition-all duration-700 ease-in-out ${resultsLoaded || loading ? "top-16 w-[95%] max-w-6xl" : "top-1/2 w-[92%] max-w-3xl"}`}>
      <div className="flex items-center gap-2 sm:gap-4 px-2 sm:px-4 md:px-6 py-2.5 sm:py-3 rounded-full border border-white/20 bg-white/10 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.25)] transition-all duration-700">
        <Link to="/" className="shrink-0"><img src={darkMode ? "/Logo.png" : "/Light_Logo.png"} alt="MediaFlow" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full"/></Link>
        <div className="flex-1 min-w-0">
          <div className={`flex items-center gap-2 sm:gap-3 rounded-full px-3 sm:px-4 py-2.5 sm:py-3 ${darkMode ? "bg-white/10 hover:bg-white/20 text-white/50" : "bg-black/5 hover:bg-black/10 text-black/50"}`}>
            <Search size={16} className={`shrink-0 sm:w-5 sm:h-5 ${darkMode ? "text-white/70" : "text-black/70" }`}/>
            <input type="text" value={currentQuery} onChange={(e) => setCurrentQuery(e.target.value)} onKeyDown={(e) => e.key === "Enter" && handleSearch()} placeholder="Search photos, videos, GIFs..." className={`w-full bg-transparent outline-none text-sm sm:text-base ${darkMode ? "text-white placeholder:text-white/50" : "text-black placeholder:text-black/50"}`}/>
          </div>
        </div>
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          <button onClick={() => dispatch(toggleTheme())} className={`p-2 sm:p-3 rounded-full border transition-all duration-300 hover:scale-105 active:scale-95 ${darkMode ? "bg-white/10 border-white/10 hover:bg-white/20" : "bg-black/5 border-black/10 hover:bg-black/10"}`}>
            {darkMode ? (
              <Sun size={18} className="text-yellow-300" />
            ) : (
              <Moon size={18} className="text-black/70" />
            )}
          </button>
          <Link to="/saved" className={`p-2 sm:p-3 rounded-full border transition-all duration-300 hover:scale-105 active:scale-95 ${darkMode ? "bg-white/10 border-white/10 hover:bg-white/20" : "bg-black/5 border-black/10 hover:bg-black/10"}`}><Bookmark size={18} className={darkMode ? "text-white" : "text-black"}/></Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;