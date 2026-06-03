import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setLoading, setResults } from '../redux/features/searchSlice'
import { fetchGIF, fetchPhotos, fetchVideos } from '../api/media'

import Card from './Card'
import Loading from './Loading'

const Grid = () => {
    const query = useSelector((state) => state.search.query)
    const loading = useSelector((state) => state.search.loading)
    const resultsLoaded = useSelector((state) => state.search.resultsLoaded)
    const activeTab = useSelector((state) => state.search.activeTab)
    const results = useSelector((state) => state.search.results)

    const dispatch = useDispatch()

    useEffect(() => {
        if (!query.trim()) return

        const getData = async () => {
            dispatch(setLoading(true))

            try {
                const [photoRes, videoRes, gifRes] = await Promise.all([
                    fetchPhotos(query),
                    fetchVideos(query),
                    fetchGIF(query)
                ])

                const photos = photoRes.results.map((item) => ({
                    id: item.id,
                    type: 'photo',
                    title: item.alt_description || 'Photo',
                    thumbnail: item.urls.regular,
                    src: item.urls.full,
                    url: item.links.html
                }))

                const videos = videoRes.videos.map((item) => ({
                    id: item.id,
                    type: 'video',
                    title: item.user?.name || 'Video',
                    thumbnail: item.image,
                    src: item.video_files?.[0]?.link,
                    url: item.url
                }))

                const gifs = gifRes.data.map((item) => ({
                    id: item.id,
                    type: 'gif',
                    title: item.title || 'GIF',
                    thumbnail: item.images.fixed_width_still.url,
                    src: item.images.fixed_width.url,
                    url: item.url
                }))

                dispatch(
                    setResults({
                        photos,
                        videos,
                        gifs
                    })
                )
            } catch (err) {
                console.log(err)
            }

            dispatch(setLoading(false))
        }

        getData()
    }, [query, dispatch])

    let filteredResults = []

    if (activeTab === 'photos') {
        filteredResults = results.photos
    } else if (activeTab === 'videos') {
        filteredResults = results.videos
    } else if (activeTab === 'gif') {
        filteredResults = results.gifs
    }

    return (
        <div className="w-full flex justify-center">
            <div className="flex flex-wrap justify-center items-start gap-5 px-2 md:px-4 py-4 w-full max-w-7xl mx-auto">
                {loading ? (Array.from({ length: 10 }).map((_, idx) => (<Loading key={idx} />))) : 
                resultsLoaded ? (filteredResults.length > 0 ? (filteredResults.map((item) => (<Card key={item.id}item={item}/>))) : 
                (<p className="text-center text-gray-500 w-full">No results found</p>)) : null}

            </div>
        </div>
    )
}

export default Grid