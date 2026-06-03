import { useDispatch, useSelector } from 'react-redux'
import { addCollection, removeCollection } from '../redux/features/collectionSlice'

const Card = ({ item }) => {
    const darkMode = useSelector((state) => state.theme.mode) === "dark";
    const collectionItems = useSelector((state) => state.collection.items);
    const isSaved = collectionItems.some((savedItem) => savedItem.id === item.id);
    const dispatch = useDispatch()
    const toggleCollection = () => {
        if (isSaved) {
            console.log('Removing from collection:', item.id);
            dispatch(removeCollection(item.id));
        } else {
            console.log('Adding to collection:', item);
            dispatch(addCollection(item));
        }
    }

    return (
        <div className={`w-full sm:w-[48%] md:w-[31%] lg:w-[23%] xl:w-[18%] relative h-80 rounded-xl overflow-hidden hover:-translate-y-1 transition-all duration-300 ${darkMode ? "bg-[#181818]" : "bg-white"}`} >
            <a target='_blank' className='h-full' href={item.url} rel="noreferrer">
                {item.type === 'photo' ? <img className='h-full w-full object-cover object-center' src={item.thumbnail} alt="" /> : ''}
                {item.type === 'video' ? <video className='h-full w-full object-cover object-center' autoPlay loop muted src={item.src}></video> : ''}
                {item.type === 'gif' ? <img className='h-full w-full object-cover object-center' src={item.src} alt="" /> : ''}
            </a>

            <div id="bottom" className={`absolute bottom-3 left-3 right-3 flex items-center justify-between gap-3 px-4 py-3 rounded-2xl backdrop-blur-xl border shadow-[0_8px_32px_rgba(0,0,0,0.25)] ${darkMode ? "bg-white/10 border-white/20 text-white/90" : "bg-white/40 border-white/30 text-black/90"}`}>
                <h2 className="flex-1 text-sm font-medium line-clamp-2">{item.title}</h2>
                <button
                    onClick={toggleCollection}
                    className={`px-4 py-2 rounded-xl backdrop-blur-xl border transition-all duration-300 active:scale-95 ${isSaved
                            ? darkMode
                                ? "bg-white/10 border-emerald-400/30 text-emerald-300 hover:bg-emerald-500/10"
                                : "bg-white/40 border-emerald-200/60 text-emerald-600 shadow-sm shadow-emerald-100/50 hover:bg-emerald-50/40"
                            : darkMode
                                ? "bg-white/10 border-white/20 hover:bg-white/20 text-white"
                                : "bg-white/10 border-white/20 hover:bg-white/20 text-black"
                        }`}
                >
                    {isSaved ? "Unsave" : "Save"}
                </button>
            </div>
        </div>
    )
}

export default Card