import React from "react";
import {Router} from "react-router-dom";
import { Hijo } from "./hijo";



export function Main() {

    return (
        <div>
            <Hijo Nombre="Chiquito" />
            <Hijo Nombre="Filomena" />
        </div>
    );
}

