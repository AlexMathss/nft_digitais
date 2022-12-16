import React from 'react';
import Collections from '../Pages/Collections';
import Home from '../Pages/Home';
import Story from '../Pages/Story';
import Live from '../Pages/Live';
import Creater from '../Pages/Creater';
import Choose from '../Pages/Choose';
import Market from '../Pages/Market';

export default function  Routes(){
    return(
        <>
            <Home/>
            <Story/>
            <Collections/>
            <Live/>
            <Creater/>
            <Choose/>
            <Market/>
        </>
    );
}