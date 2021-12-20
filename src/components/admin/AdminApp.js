import React from 'react'
import styled from "styled-components"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import EventUpload from './EventUpload'

const AdminApp = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route exact path="/eventupload" element={<EventUpload/>} />
                </Routes>
            </Router>
        </div>
    )
}

export default AdminApp

const Container = styled.div``
const Wrapper = styled.div``
