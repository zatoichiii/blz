import React from 'react';
import styles from "./Map.module.scss"
import Container from "../../UI/Container";
import {Map, YMaps} from '@pbe/react-yandex-maps';

const MyMap = () => {
    return (
        <Container>
            <YMaps>
                <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }} width="100%" height="300px"/>
            </YMaps>
        </Container>
    );
};

export default MyMap;