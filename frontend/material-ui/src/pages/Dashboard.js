import React from 'react';
import Container from '@material-ui/core/Container';
import Appbar from "../components/header/Appbar"
import Crouse from "../components/body/corouse/Crouse"
import Menu from "../components/body/munus/Menu"
import ListMenu from "../components/body/list/ListMenu"
import BottomBar from "../components/footer/BottomBar"
// import BottomNavigation from "../components/footer/BottomNavigation"

function Dashboard(props) {
    return (
        <div>
            <Appbar/>
            <Crouse/>
            <Menu/>
            <Container >
            <ListMenu/>
            </Container>
            <div style={{marginBottom:100}}/>
            <BottomBar/>
            {/* <BottomNavigation/> */}
        </div>
    );
}

export default Dashboard;