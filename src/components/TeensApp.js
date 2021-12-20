import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Header'
import Leaders from "./Leaders"
import Home from './Home'
import Footer from "./Footer"
import styled from "styled-components"
import About from "./About"
import Blog from "./Blog"
import BlogDetail from "./BlogDetail"
const TeensApp = () => {
    return (
        <Container>
            <Router>
            <Header/>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route exact path="/about" element={<About/>}/>
                    <Route exact path="/leaders" element={<Leaders/>}/>
                    <Route exact path="/blog" element={<Blog/>}/>
                    <Route exact path="/blog/:id" element={<BlogDetail/>}/>
                </Routes>
                <Footer/>
            </Router>
        </Container>
    )
}

export default TeensApp

const Container = styled.div`
width: 100%;

`