import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Box } from '@mui/system'
import { Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed } from './components'

function app() {
    return (
        <BrowserRouter>
            <Box /*prop*/ sx={{ backgroundColor: '#000' }}>
                <Navbar />
            </Box>
            <Route path='/' exact element={<Feed />} />
            <Route path='/video/:id' element={<VideoDetail />} />
            <Route path='/channel/:id' element={<ChannelDetail />} />
            <Route path='/search/:searchTerm' element={<SearchFeed />} />
        </BrowserRouter>
    )
}

export default app