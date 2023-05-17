import React from 'react';
import './Footer.css';
import {Link} from 'react-router-dom';
export const Footer = (props) => {
    return (
        <footer class="footer">
            <div class="footer-left col-md-4 col-sm-6">
                <p class="about">
                <span> GPT-5</span> GymPT-5는 대한민국 최대, 최고의 GYMs 플렛폼으로
                    제휴GYM과 회원님들뿐 아니라 가입한 모든 사람들이 소통
                    하며 건강한 생활체육문화 조성을 지향합니다.
                </p>
                <div class="icons">
                <Link><img src='facebook-f.svg' style={{width:'30px', height:'30px'}}/></Link>
                <Link><img src='instagram.svg' style={{width:'30px', height:'30px'}}/></Link>
                <Link><img src='twitter.svg' style={{width:'30px', height:'30px'}}/></Link>
                </div>
            </div>
            <div class="footer-center col-md-4 col-sm-6">
                <div>
                <i class="fa fa-map-marker"></i>
                <p> MultiCapmus, Final 7 Team</p>
                </div>
                <div>
                <i class="fa fa-phone"></i>
                
                </div>
                <div>
                <i class="fa fa-envelope"></i>
                <p><Link> Gpt5@gmail.com</Link></p>
                </div>
            </div>
            <div class="footer-right col-md-4 col-sm-6">
                <h2> Gpt-5<span> <img src='./gpt_logo.png' alt='logo' style={{width:'100px',height:'100px'}}></img></span></h2>
                <p class="menu">
                <Link> develop by </Link>&nbsp; | &nbsp;
                <Link> 나인채</Link>&nbsp; | &nbsp;
                <Link> 최정민</Link>&nbsp; | &nbsp;
                <Link> 김동민</Link>&nbsp; | &nbsp;
                <Link> 김도현</Link>&nbsp; | &nbsp;
                <Link> 이민성</Link>
                </p>
                <p class="name"> Gympt-5 &copy; 2023</p>
            </div>
        </footer>      
    )
};
