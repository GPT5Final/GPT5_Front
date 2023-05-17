import React, { useState, useEffect, useRef} from 'react';
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
import { createGlobalStyle } from 'styled-components';

const Btn = styled.button`
    border-top-left-radius: 15px;
    border-bottom-right-radius: 15px;
    border-top-right-radius: 5px;
    border-bottom-left-radius: 5px;
    border: none;
    padding: 1rem 2rem;
    background-color: black;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
    background-color: coral;
    }
`;

const GlobalStyle = createGlobalStyle`
    body {
    font-family: 'Noto Sans KR', sans-serif;
    }
`;

const BoldText = styled.li`
    font-weight: bold;
    color: ${props => props.isCrowded ? 'red' : 'green'};
`;

const FileInput = styled.input`
    display: none;  
`;

const FileLabel = styled.label`
    border-top-left-radius: 15px;
    border-bottom-right-radius: 15px;
    border-top-right-radius: 5px;
    border-bottom-left-radius: 5px;
    border: none;
    display: inline-block;
    padding: 1rem 1rem;
    background-color: black;
    color: white;
    cursor: pointer;
`;





const Gyms = () => {
    const [resp, setResp] = useState();
    const [img, setImg] = useState("./dft.jpg");
    const imgRef = useRef();     
    
    function imageLoad() {
        const file = imgRef.current.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImg(reader.result);
            onSubmit();
        }
    }
    const onSubmit = (e) => {
        let formData = new FormData();   
        formData.append("uploadFile", document.frm.uploadFile.files[0]);      
        axios.post("http://localhost:3000/od_fileUpload", formData)
        .then(res=>{    
            let objArr= res.data.predictions[0].detection_names;
            let personCount = objArr.filter(obj => obj === 'person').length;
            let isCrowded = personCount >= 10;  // 10명 이상이면 혼잡한 것으로 판단합니다.
            let message = isCrowded ? '혼잡' : '원활';  // 혼잡도에 따른 메시지를 정합니다.
            setResp(<BoldText isCrowded={isCrowded}>{`적정인원(10): 현재인원 ${personCount} - ${message}`}</BoldText>);
        })
        .catch(function(error){
            console.log(error);
        });
    }
    
    

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
            <GlobalStyle />
            <Header />   
            <div className='slideImg' style={{ textAlign: 'center', marginTop: '10vh' }}>
            <Container>         
            <Slider {...settings}>
            {carouselItems.length > 0 ? (
                carouselItems.map((item, i) => (
                    <div key={i}>
                        {item.firstImage && (
                        <img
                            className="d-block w-100"
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
            <br/><br/>

            <hr/>
            <div style={{ textAlign: 'center'}}>                
                <form name='frm' encType="multipart/form-data">
                <FileLabel htmlFor="uploadFile">
                    혼잡도 확인
                </FileLabel>
                <FileInput type="file" id="uploadFile" name="uploadFile" onChange={imageLoad} ref={imgRef} /><br/><br/>
                    <img style={{width:"320px", height:"240px"}} src={img} alt="" /><br/><br/>
                </form>
                <ul>
                    {resp}
                </ul>
            </div><br/><br/><br/><hr/>

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