
import styled from 'styled-components'

const WeatherLogo = styled.img`
width: 140px;
height: 140px
margin: 40px auto;
`
const ChhoseCityLabel = styled.span`
color:black;
font-size:18px;
font-weight: bold;
`


const CityComponent = () => {
    return (
        <>
        <WeatherLogo src="/icons/perfect-day.svg"/>
        </>
    );

};

export default CityComponent;