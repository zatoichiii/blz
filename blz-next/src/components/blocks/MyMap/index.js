import React from 'react';
import styles from "./Map.module.scss"
import Container from "../../UI/Container";
import {Map, YMaps, Placemark} from '@pbe/react-yandex-maps';

const MyMap = () => {
    return (
            <YMaps>
                <Map defaultState={{ center: [47.283395, 39.683841], zoom: 12 }} width="100%" height="300px">
                    <Placemark geometry={[47.283395, 39.683841]} />
                </Map>
            </YMaps>
    );
};

export default MyMap;