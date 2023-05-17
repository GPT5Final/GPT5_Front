import React, { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled  from 'styled-components';
import { Footer } from '../../components/Footer';
import Header from '../../components/Header';
import Slider from 'react-slick';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axiosInstance from '../../axiosInstance';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const Btn = styled.button`
    border-top-left-radius: 15px;
    border-bottom-right-radius: 15px;
    border-top-right-radius: 5px;
    border-bottom-left-radius: 5px;
    background-color: white;
    border-style: none;
    width: 100px;
    height: 40px;
    border: 1px solid #C4C4C4;
`;





const Gyms = () => {

    const [index, setIndex] = useState(0);
    
    const [topTrainer, setTopTrainer] = useState(null);
    const [logIn, setLogIn] = useState(false);
    const [nickname, setNickname] = useState("");
    const [userAuth, setUserAuth] = useState(null);
    const history = useNavigate();

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const handleGymClick = (id) => {
        history(`/gym/${id}`);
    };


    useEffect(() => {
        const logInUser = JSON.parse(localStorage.getItem("login"));
        if (logInUser && logInUser.nickname) {
            setLogIn(true);
            setNickname(logInUser.nickname);
            setUserAuth(logInUser.auth);
        }
    }, []);

    const removePTags = (html) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");
        const pTags = doc.getElementsByTagName("p");
        for (let i = 0; i < pTags.length; i++) {
            const pTag = pTags[i];
            pTag.outerHTML = pTag.innerHTML;
        }
        return doc.body.innerHTML;
        }


    useEffect(() => {
        const fetchTopTrainer = async () => {
        try {
            const response = await axios.get("http://localhost:3000/topTrainer");
            const trainerData = response.data;
            trainerData.content = removePTags(trainerData.content);
            setTopTrainer(trainerData);
            console.log(response.data);
            
        } catch (error) {
            console.error("가장 좋아요가 많은 트레이너 정보를 가져오는데 실패했습니다.", error);
        }
        };    
    fetchTopTrainer();
    }, []);



    const [carouselItems, setCarouselItems] = useState([]);
    useEffect(() => {
        const fetchGyms = async () => {
            try {
                const response = await axiosInstance.get("/gymslist", {
                    params: {
                        nickname: nickname,
                    },
                });
                
                console.log(response.data)
                setCarouselItems(
                    response.data.gyms.map((gym) => ({
                    ...gym,
                    content: removePTags(gym.content),
                    isLiked: false,
                    }))
                    .sort((a, b) => b.love - a.love)           
                );
                console.log(response.data.gyms);
            } catch (error) {
            console.error("GYM 데이터를 가져오는데 실패했습니다.", error);
            }
        };
        
        fetchGyms();
    }, [nickname]);


    const handleCreate = () => {
        if (userAuth === 0) {
            history('/gymsupload');
        } else {
            alert("운영자만 글을 작성할 수 있습니다.");
        }
    };

    const MoreClick = () => {
        history('/trainers');
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };


    return (
        <>
            <Header />   
            <div className='slideImg' style={{ textAlign: 'center', marginTop: '10vh' }}>
            <Container>         
            <Slider {...settings}>
            {carouselItems.length > 0 ? (
                carouselItems.map((item, i) => (
                    <div key={i}>
                        {item.firstImage && (
                        <img
                            // className="d-block w-10"
                            src={`http://localhost:3000/static/images/${item.firstImage.newfilename}`}
                            alt={`Slide ${i + 1}`}
                            style={{ width: '500px', height: '400px' }}
                        />
                        )}
                        <h3 onClick={() => handleGymClick(item.gSeq)}>{item.title}</h3>
                        <p>{item.content}</p>
                    </div>
                    ))
                ) : (
                    <div>게시글이 없습니다.</div>
                )}
                </Slider><br/><br/>
                {userAuth === 0 && <Btn onClick={handleCreate}>글 작성</Btn>}                
            </Container>
            </div>

            <div style={{ textAlign: 'center'}}>
                <img src="./jamsil_info.png"/><br/><br/>
            </div>
            {topTrainer && (
                <Container style={{ marginTop: '3vh'}}>
                    <Row>
                    <Col sm={8} style={{ textAlign: 'center' }}>
                    {topTrainer.firstImage && (
                        <img
                        src={`http://localhost:3000/static/images/${topTrainer.firstImage.newfilename}`}
                        style={{ width: '30vw' }}
                        />
                    )}
                    </Col>
                    <Col sm={4}>
                        <h1>TRAINER</h1>
                        <br></br>
                        <br></br>
                        <div><b>CHIEF of Professional Personal Trainer</b></div>
                        <div>{topTrainer.title}</div>                        
                        <div>경력 : {topTrainer.content}</div>                        
                        <br></br>
                        <br></br>
                        <Btn onClick={MoreClick}>MORE</Btn>
                    </Col>
                    </Row>
                    
                </Container>
                )}
            <Footer />
        </>
    )
}

export default Gyms;