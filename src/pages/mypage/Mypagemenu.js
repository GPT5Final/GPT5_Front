import React, { useState,useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

function Mypagemenu(){
    const [nickname, setNickname] = useState("");
    
    const TokenEmail = localStorage.getItem("email");

    const token = useMemo(() => ({ email: TokenEmail }), [TokenEmail]);

    useEffect(() => {
        
        axios.post("http://localhost:3000/allmember", token)
            .then((response) => {
                setNickname(response.data.nickname);                
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);
    return(
        <div>
            <div align="right">
                {nickname}
                <Link><img src="../mail.webp" alt="mail" style={{ width: '30px', height : '30px' }}></img></Link>
                <Link><img src="../bell.webp" alt="bell" style={{ width: '30px', height : '30px' }}></img></Link>
            </div>
        </div>
    )
}
export default Mypagemenu;