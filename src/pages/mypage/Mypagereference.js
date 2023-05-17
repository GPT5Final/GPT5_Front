import React, { useState, useEffect, useRef,useMemo } from "react"; 
import axios from "axios";
import Mypageheader from './Mypageheader';
import { Button, Container,Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./Chatbox.css";
import { ReactMediaRecorder } from "react-media-recorder";

function Mypagereference(){
    const [str, setStr] = useState('');
    const [resp, setResp] = useState('');
    const [email, setEmail] = useState("");
    const [nickname, setNickname] = useState("");
    const [coin, setCoin] = useState("");
    const [profile, setProfile] = useState("default.png");
    const [image, setImage] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);
    const fileInputRef = useRef();
    const [umessage, setUmessage] = useState('');
    const scrollRef = useRef();

    const TokenEmail = localStorage.getItem("email");
    const token = useMemo(() => ({ email: TokenEmail }), [TokenEmail]);

    let history = useNavigate();

    const fileupload = (e) => {
        e.preventDefault();
    
        let formData = new FormData();
        formData.append("uploadFile", document.frm.uploadFile.files[0]);
    
        axios.post("http://localhost:3000/fileUpload", formData)
        .then(function(resp){
          alert('success');
          setResp(resp.data.text);
        })
        .catch(function(err){
          alert(err);
        })
    }

    const handleOnKeyPress = e => {
        if (e.key === 'Enter') {
            sendBtnClick(); // Enter 입력이 되면 클릭 이벤트 실행
        }
      };

    useEffect(() => {
        axios.post("http://localhost:3000/allmember", token)
            .then((response) => {
                setEmail(response.data.email);
                setNickname(response.data.nickname);
                setProfile(response.data.profile);
                setCoin(response.data.coin);
            })
            .catch((err) => {
                alert(err)
            });
    }, [token]);

    function sendBtnClick(){
        // 입력한 문자열을 chatbox 에 추가
        let elementUser = document.createElement('div');
        elementUser.setAttribute('align', 'right');

        let element = document.createElement('div');
        element.innerHTML = umessage;
        element.setAttribute("class", "usermsg");   // <div align="right"><div className="usermsg">{umessage}</div></div>

        const chatbox = document.getElementById("chatbox");
        elementUser.appendChild(element);
        chatbox.appendChild(elementUser);
        chatbox.appendChild(document.createElement('br'));

        setUmessage('');
        // 데이터 받기(back-end)
        axios.post("http://localhost:3000/chatBot", null, { params:{ "msg":umessage } })
        .then(function(resp){
            // alert(JSON.stringify(resp.data));
            // alert(resp.data.bubbles[0].type);
            // console.log(resp.data.bubbles[0].data.description);

            ChatbotAnswer(resp.data);

            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;

        }).catch(function(err){
            alert(err);
        })
    }

    function ChatbotAnswer(respData){
        let type = respData.bubbles[0].type;
        // 판별(문자열, 링크, 이미지, 버튼)
        if(type === "text"){
            let element = document.createElement("div");
            element.innerHTML = respData.bubbles[0].data.description;
            element.setAttribute("class", "botmsg");

            const chatbox = document.getElementById("chatbox");
            chatbox.appendChild(element);
            chatbox.appendChild(document.createElement('br'));
        }
        else if(type === "template"){
            // image
            if(respData.bubbles[0].data.cover.type === "image"){
                let element = document.createElement("img");
                element.setAttribute("src", respData.bubbles[0].data.cover.data.imageUrl);
                element.setAttribute("width", "200px");
                element.setAttribute("height", "140px");

                const chatbox = document.getElementById("chatbox");
                chatbox.appendChild(element);
                chatbox.appendChild(document.createElement('br'));
            }
            
            // a tag(link)
            else if(respData.bubbles[0].data.cover.type === "text"){
                alert(JSON.stringify(respData.bubbles[0].data.contentTable[0][0].data.title));
                // alert(JSON.stringify(respData.bubbles[0].data.contentTable[0][0].data.data.action.data.url));
                let result = respData.bubbles[0].data.cover.data.description;

                let title = respData.bubbles[0].data.contentTable[0][0].data.title;
                let url = respData.bubbles[0].data.contentTable[0][0].data.data.action.data.url;
                
                let element = document.createElement("a");
                element.innerHTML = title;
                element.setAttribute("href", url);
                element.setAttribute("class", "botmsg");
                element.setAttribute("target", "_blank")

                const chatbox = document.getElementById("chatbox");
                chatbox.appendChild(element);
                chatbox.appendChild(document.createElement('br'));
                
            }
        }

        // chatbox 에 추가
    }
    return(
        <div className='cal_layout'>
            <Mypageheader />
            <Container className="cal_box" >
            <div className="wrapper">
            <div className="menu">
                <h3 className="welcome">Gpt-Bot과 대화하기</h3>
            </div>

            <div className="chatbox" id="chatbox" ref={scrollRef}>            

            </div>

            <div className="myform">
                
                
            </div>    
            <ReactMediaRecorder
                audio
                render={({ status, startRecording, stopRecording,mediaBlobUrl }) =>(
                <div>
                    <p>{status}</p>

                    <input type="text" className="usermsgwrite" style={{width:'360px'}}
                    value={umessage} onChange={(e)=>setUmessage(e.target.value)} placeholder={resp} onKeyPress={handleOnKeyPress} />

                    <Link><img src="../mic.png" alt="mic" style={{ width: '30px', height : '30px' }} onClick={startRecording} ></img></Link>

                    <Link><img src="../stop.png" alt="stop" style={{ width: '30px', height : '30px' }} a href={mediaBlobUrl} onClick={stopRecording} download="mysound.wav" onSubmit={fileupload}></img></Link>
                    
                    <input type="button" className="submitmsg" onClick={sendBtnClick} value="전송" />
                    
                    <a href={mediaBlobUrl} download="mysound.wav">download</a>
                        <form name='frm' onSubmit={fileupload} encType="multipart/form-data">
                            <input type="file" name='uploadFile' accept='*' />
                            <input type="submit" value="file upload" />
                        </form>
                </div>  
                )}
            />

            <hr/>
        </div>
                
            </Container>
        </div>
    )
}

export default Mypagereference;
