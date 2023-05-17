import React, { useState,useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

function Mypagemenu(){
    const [nickname, setNickname] = useState("");
    const [profile, setProfile] = useState('default.png');

    const TokenEmail = localStorage.getItem("email");

    const token = useMemo(() => ({ email: TokenEmail }), [TokenEmail]);

    useEffect(() => {
        axios.post("http://localhost:3000/allmember", token)
            .then((response) => {
                setNickname(response.data.nickname); 
                setProfile(response.data.profile);               
            })
            .catch((error) => {
                console.error(error);
            });
    }, [token]);
    return(
        <div>
            <div align="right">
                <Link to="/mypage"><img alt="프로필이미지" src={`http://localhost:3000/images/${profile}`}
                    style={{cursor: "pointer"}}
                    width="30px"
                    height="30px"/>
                </Link>    
                {nickname}
                <Link><img src="../mail.webp" alt="mail" style={{ width: '30px', height : '30px' }}></img></Link>
                <Link><img src="../bell.webp" alt="bell" style={{ width: '30px', height : '30px' }}></img></Link>
            </div>
        </div>
    )
}
export default Mypagemenu;