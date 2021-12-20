import React from "react"
import styled from "styled-components"
import img from "./images/bg1.jpg"
const AboutComp = ({fd,mr,topic,bg,content,mt})=>{
    return(
        <Container mt={mt}>
            <Wrapper>
            <WhoWeAreComp fd={fd}>
                   <PictureHolder bg={bg} mt={mt}>
                   <Picture ig={img}>
                        <OverLay></OverLay>
                    </Picture>
                   </PictureHolder>
                    <Contents mr={mr}>
                        <Topic>{topic}</Topic>
                        <MainText>
                        {content}
                        </MainText>
                    </Contents>
                </WhoWeAreComp>
            </Wrapper>
        </Container>
    )
}
export default AboutComp

const MainText = styled.div`
margin-top: 20px;
font-weight: 450;
font-family: poppins;
letter-spacing: 0.1px;
font-size: 15px;
line-height: 30px;
@media screen and (max-width: 790px){
    font-size: 13px;
}
@media screen and (max-width: 639px){
    margin-top: 10px;
    line-height: 25px;
    font-size: 12px;
}
@media screen and (max-width: 623px){
  line-height: 23px;
}
@media screen and (max-width: 560px){
    font-size: 15px;
    text-align: center;
}
`
const Topic = styled.div`
font-family: hobo std;
font-size: 30px;
color: gold;
@media screen and (max-width: 790px){
    font-size: 22px;
}
@media screen and (max-width: 623px){
    font-size: 18px;
}
@media screen and (max-width: 560px){
    font-size: 25px;
}
`
const Contents = styled.div`
width: 400px;
margin-right: ${({mr})=>mr?"100px": "0px"};
@media screen and (max-width: 749px){
    width: 300px;
     margin-right: ${({mr})=>mr?"40px": "0px"}
}
@media screen and (max-width: 560px){
    width: 85%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-right: ${({mr})=>mr?"0px": "0px"};
}
@media screen and (max-width: 950px){
 
    margin-right: ${({mr})=>mr?"40px": "0px"};
}
@media screen and (max-width: 950px){
   
    margin-right: ${({mr})=>mr?"40px": "0px"};
}
@media screen and (max-width: 562px){

    margin-right: ${({mr})=>mr?"0px": "0px"};
}
`
const OverLay = styled.div`
width: 100%;
height: 100%;
background-color: rgb(0,0,0,0.3);
`
const Picture = styled.div`
width: 300px;
height: 250px;
border-radius: 10px;
overflow: hidden;
background-image: url(${({ig})=>ig});
background-size: cover;
background-repeat: no-repeat;
@media screen and (max-width: 790px){
    width: 260px;
    height: 210px;
}
@media screen and (max-width: 750px){
    width: 260px;
    height: 210px;
    /* display: none; */
}
@media screen and (max-width: 623px){
    width: 220px;
    height: 170px;
    /* display: none; */
}
`
const PictureHolder = styled.div`
margin-right: ${({bg})=>bg?"150px": "0px"};
@media screen and (max-width: 950px){
    background-color: white;
    margin-right: ${({bg})=>bg?"100px": "0px"};
}
@media screen and (max-width: 880px){
    background-color: blue;
    margin-right: ${({bg})=>bg?"80px": "0px"};
}
@media screen and (max-width: 820px){
    background-color: green;
    margin-right: ${({bg})=>bg?"50px": "0px"};
}
@media screen and (max-width: 639px){
    background-color: green;
    margin-right: ${({bg})=>bg?"35px": "0px"};
}
@media screen and (max-width: 575px){
    display: none;
    margin-top: ${({mt})=>mt? "-70px" : "0px"};
}

`

const WhoWeAreComp = styled.div`
display: flex;
flex-direction: ${({fd})=>fd? "row-reverse": "row"};
align-items: center;
margin-bottom: 60px;
justify-content:center;
@media screen and (max-width: 575px){
    flex-wrap: wrap;
    justify-content: center;
}
`

const Wrapper = styled.div`
display: flex;
justify-content: center;
padding-top: 50px;
`
const Container = styled.div`
width: 100%;
height: 330px;
margin-top: ${({mt})=>mt? "-70px" : "0px"};
/* background-color: red; */
/*  / */


`