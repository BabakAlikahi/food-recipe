import React from 'react';
import Popular from "../components/Popular";
import Veggie from "../components/Veggie";
import {Container} from "reactstrap";

const Home = () => {
    return (
        <Container>
            <Veggie/>
            <Popular/>
        </Container>
    );
};

export default Home;
