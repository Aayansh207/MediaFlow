import { Image, Play, Film } from "lucide-react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setActiveTab } from "../redux/features/searchSlice"

const FilterDock = () => {
  const { resultsLoaded, loading, activeTab } = useSelector((state) => state.search);
  const darkMode = useSelector((state) => state.theme.mode) === "dark";
  const dispatch = useDispatch();

  if (!resultsLoaded && !loading) return null;

  return (
    <div className={`fixed bottom-5 left-1/2 -translate-x-1/2 z-50 flex gap-2 p-2 rounded-full backdrop-blur-xl border shadow-[0_8px_32px_rgba(0,0,0,0.25)] ${darkMode ? "bg-white/10 border-white/20" : "bg-white/40 border-white/30"}`}>
      <button onClick={() => dispatch(setActiveTab("photos"))} className={`px-4 py-2 rounded-full transition-all ${activeTab==="photos" ? (darkMode ? "bg-white/20 text-white" : "bg-black/10 text-black") : (darkMode ? "text-white/70 hover:bg-white/10" : "text-black/70 hover:bg-black/5")}`}>Photos</button>
      <button onClick={() => dispatch(setActiveTab("videos"))} className={`px-4 py-2 rounded-full transition-all ${activeTab==="videos" ? (darkMode ? "bg-white/20 text-white" : "bg-black/10 text-black") : (darkMode ? "text-white/70 hover:bg-white/10" : "text-black/70 hover:bg-black/5")}`}>Videos</button>
      <button onClick={() => dispatch(setActiveTab("gif"))} className={`px-4 py-2 rounded-full transition-all ${activeTab==="gif" ? (darkMode ? "bg-white/20 text-white" : "bg-black/10 text-black") : (darkMode ? "text-white/70 hover:bg-white/10" : "text-black/70 hover:bg-black/5")}`}>GIFs</button>
    </div>
  );
};

export default FilterDock