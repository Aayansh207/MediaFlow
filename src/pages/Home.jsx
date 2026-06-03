import React from 'react'
import Navbar from '../components/Search_navbar'
import Grid from '../components/Grid'
import Tab from '../components/Tab'

const Home = () => {
    return (
        <div>
            <Navbar />
            <div className="pt-28 px-4">
                <Grid />
            </div>
            <Tab />
        </div>
    )
}

export default Home