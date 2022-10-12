import React from "react";
import {Copyright} from "./Copyright";
import {RedesSociais} from "./RedesSociais";

export function Footer(){
    return (
    <div className="footer">
        <h2>Aqui é o footer da página</h2>
        <RedesSociais/>
        <Copyright/>
    </div>
    )
}