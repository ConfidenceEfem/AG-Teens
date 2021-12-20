import React from "react"
import styled from "styled-components"
import logo from "../images/logo.png"
import avatar from "../images/avatar.png"
const EventUpload = ()=>{
    const [hour, setHour] = React.useState(0)
    const [min, setMin] = React.useState(0)
    const [day, setDay] = React.useState(0)

    return(
        <Container>
            <Left>
                <LeftItems>
                    <Navs>ADD EVENT</Navs>
                </LeftItems>
            </Left>
            <Right>
                <Header>
                    <HeaderItems>
                        <LogoHolder>
                        <Logo src={logo}/>
                        </LogoHolder>
                        <Text>ADMIN DASHBOARD</Text>
                    </HeaderItems>
                </Header>
            
                <EventImage src={avatar}/>
                <Upload htmlFor="pix">Upload Image</Upload>
                <input type="file" id="pix" style={{display: "none"}}/>
                <Inputs placeholder="Enter event title"/>
                <Inputs placeholder="Enter event registration link"/>
                <TimeAndCountHolder>
                   <TextAndInput>
                       <Label>Event Time</Label>
                        <Hour type="Number"
                        value={hour}
                        onChange={(e)=>{
                            if(hour>=9 || hour==-1){
                                setHour(0)
                            }else{
                                setHour(e.target.value)
                            }    
                        }}
                       /> <span>:</span> <Min type="Number"
                       value={min}
                        onChange={(e)=>{
                            if(min>=60){
                                setMin(0)
                            }else{
                                setMin(e.target.value)
                            }    
                        }}
                        />
                   </TextAndInput>
                   <TextAndInput>
                       <Label>Days to Go</Label>
                       <Days type="Number"
                       value={day}
                       onChange={(e)=>{
                               setDay(e.target.value)
                       }}
                       />
                   </TextAndInput>
                </TimeAndCountHolder>
            </Right>
        </Container>
    )
}
export default EventUpload
const Navs = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
background-color: whitesmoke;
height: 40px;
font-weight: bold;
font-family: arial;
`
const LeftItems = styled.div`
width: 90%;
display: flex;
margin-top: 110px;
flex-direction: column;
align-items: center;
`
const Days = styled.input`
width: 100px;
`
const Min = styled.input`
width: 90px; 
`
const Hour = styled.input`
width: 90px; 
`
const Label = styled.div`
font-weight: bold;
font-size: 13px;
margin-bottom: 5px;
`
const TextAndInput = styled.div`
margin: 0 20px;
span{
    font-weight: bold;
}
`
const TimeAndCountHolder = styled.div`
display: flex;
width: 600px;
justify-content: center;
margin-top: 10px;
`
// const RightItems = styled.div`
// flex-direction: column;
// height: 100%auto;
// display: flex;
// align-items: center;
// width: 90%;
// overflow-y: scroll;

// `
const Inputs = styled.input`
width: 600px;
height: 35px;
border: solid 2px #0E0E10;
outline: none;
margin-bottom: 10px;;
`
const Upload = styled.label`
width: 250px; height: 40px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 10px;
background-color:#0E0E10;
color: white;
font-family: Arial, Helvetica, sans-serif;
font-size: 18px;
letter-spacing: 0.3px;
transition: all 350ms;
transform: scale(1);
margin-bottom: 30px;
:hover{
    transform: scale(1.02);
    cursor: pointer;
}
`
const EventImage = styled.img`
width: 700px;
height: 350px;
object-fit: cover;
border: solid 2px #0E0E10;
margin-bottom: 20px;
`
const LogoHolder = styled.div`
display: flex;
flex: 1;
margin-left: 30px;
display: flex;
align-items: center;
`
const Text = styled.div`
color: #0E0E10;
font-family: hobo std;
font-size: 30px;
font-weight: bold;
`
const Logo = styled.img`
`
const HeaderItems = styled.div`
display: flex;
align-items: center;
width: 95%;
`
const Header = styled.div`
width: 100%;
display: flex;
height: 100px;
box-shadow: 1px 1px 3px 1px lightgray;
margin-bottom: 30px;
/* justify-content: center; */
`

const Right = styled.div`
width: 75%;
min-height: 100vh;
height: 100%;
display: flex;
flex-direction: column;
background-color: #eee;
align-items: center;
position: relative;
`
const Left = styled.div`
height: 100vh;
width: 25%;
display: flex;
flex-direction: column;
background-color:#0E0E10;
position: sticky;
align-items: center;
`
const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`