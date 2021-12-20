import React from "react"
import AboutComp from "./AboutComp"
import styled from "styled-components"
const About = ()=>{
    return(
        <Container>
             <AboutComp bg
             topic="WHO WE ARE"
             content="The Teens Solution Ministry of the Assemblies
              of God Nigeria does not subscribe to the wrong belief 
              that assumes that “the teen period is a fairly neutral 
              nvironment where ‘children’ toe the line and follow in 
              the footsteps of their parents’ spirituality.” Instead"
            />
             <AboutComp mr fd mt
              topic="OUR VISION"
              content="To raise a fresh 
              generation of teenagers who are 
              grounded in the Word of God, 
              equipped to exert strong and godly 
              influence on their generation and
               beyond thereby
               excelling in everything worthy"/>
             <AboutComp bg mt
             topic="OUR AIM"
             content="In Teens Solution Ministries, we have s
             hared assumptions, values, and beliefs, which govern 
             what we do. They’re not just mere dry creed we recite
              during special days or events. Rather, they are our 
              ministry objectives;"
             />
             <AboutComp mr fd mt
             topic="OUR MISSION"
             content="To bring teens to Christ and
              mature them for excellence in life and
               ministry through serial exposure to the Word 
               of God and Life Workshops. This develops them 
               into veritable tools for reaching their generation,
                ensuring greater 
             ministry in the nation and the world at large"/>
        </Container>
    )
}
export default About

const Wrapper = styled.div``
const Container = styled.div`
width: 100%;
display: flex;
min-height: calc(100vh - 450px);
height: 100%;
flex-direction: column;
align-items: center;
`