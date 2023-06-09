import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Mypageheader from "../mypage/Mypageheader";
import Mypagemenu from "../mypage/Mypagemenu";
import { Container, Row, Col, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";

function InqWrite() {
  const [nickname, setNickname] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");

  const [files, setFiles] = useState([]);
  const [previews, setPreviews] = useState([]);
  const [inputs, setInputs] = useState([
    <input key={0} type="file" name="files" />,
  ]);

  let navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("login"));

    if (user !== undefined && user !== null) {
      setNickname(user.nickname);
    } else {
      alert("로그인 해주십시오.");
      navigate("/login");
    }
  }, []);

  //console.log(nickname);

  const handleFileChange = (event, index) => {
    const newFiles = [...files];
    newFiles[index] = event.target.files[0];
    setFiles(newFiles);

    const previewArray = [...previews];
    previewArray[index] = URL.createObjectURL(event.target.files[0]);
    setPreviews(previewArray);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the form from submitting normally

    if (title.trim() === "" && title.length < 0) {
      alert("제목을 입력해주세요.");
      return;
    } else if (content.trim() === "" && content.length < 0) {
      alert("내용을 입력해주세요.");
      return;
    }

    const formData = new FormData();

    formData.append("nickname", nickname);
    formData.append("category", category);
    //console.log(category);
    formData.append("title", title);
    formData.append("content", content);

    if (files.length < 1) {
      axios
        .post("http://localhost:3000/addInquiry", formData)
        .then(function (resp) {
          //console.log(resp.data);
          if (resp.data === "SUCCESS") {
            alert("문의가 접수 되었습니다.");
            navigate("/Inquiry");
          }
        })
        .catch(function (err) {
          alert(err);
        });
    } else {
      for (let i = 0; i < files.length; i++) {
        formData.append("files", files[i]);
      }

      axios
        .post("http://localhost:3000/imgFileUpload", formData)
        .then(function (resp) {
          //console.log(resp.data);
          if (resp.data === "SUCCESS") {
            alert("문의가 접수 되었습니다.");
            navigate("/Inquiry");
          }
        })
        .catch(function (err) {
          alert(err);
        });
    }
  };

  const handleReset = () => {
    setFiles([]);
    setPreviews([]);
    setInputs([<input key={0} type="file" name="files" />]);
  };

  const handleAddMore = () => {
    setInputs([
      ...inputs,
      <input key={inputs.length} type="file" name="files" />,
    ]);
    setFiles([...files, null]);
    setPreviews([...previews, null]);
  };

  const backBtn = () => {
    navigate("/Inquiry");
  };

  return (
    <>
      <div className="main_layout">
        <Mypageheader />
        <Container className="main_box">
          <Mypagemenu />
          <br />
          <h1 align="center">
            <strong>문의하기</strong>
          </h1>
          <br />
          <Row>
            <Col>
              <div>
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                  <h5>
                    <strong>select:</strong>
                  </h5>
                  <Form.Select
                    aria-label="Default select example"
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option>문의 유형을 선택해 주십시오.</option>
                    <option value="제휴 헬스장">제휴 헬스장</option>
                    <option value="트레이너">트레이너</option>
                    <option value="멘토">멘토</option>
                    <option value="멘티">멘티</option>
                    <option value="코인">코인</option>
                    <option value="그룹">그룹</option>
                    <option value="스트레칭">스트레칭</option>
                    <option value="식단">식단</option>
                    <option value="그 밖의 문의사항">그 밖의 문의사항</option>
                  </Form.Select>
                  <br />

                  <div style={{ display: "flex", flexWrap: "wrap" }}>
                    {previews.map((previewUrl, index) => (
                      <img
                        key={index}
                        src={previewUrl}
                        alt={`Preview ${index}`}
                        width="200"
                        height="200"
                        style={{ margin: "10px" }}
                      />
                    ))}
                  </div>
                  {inputs.map((input, index) => (
                    <div key={index}>
                      <input
                        type="file"
                        name="files"
                        onChange={(event) => handleFileChange(event, index)}
                      />
                    </div>
                  ))}
                  <br />

                  <div className="form-group">
                    <h5>
                      <strong>Title:</strong>
                    </h5>
                    <input
                      type="text"
                      placeholder="제목을 입력해 주십시오."
                      className="form-control"
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>
                  <br />
                  <div className="form-group">
                    <h5>
                      <strong>content:</strong>
                    </h5>
                    <textarea
                      className="form-control"
                      placeholder="내용을 입력해 주십시오."
                      style={{ height: "300px" }}
                      onChange={(e) => setContent(e.target.value)}
                    />
                  </div>
                  <br />
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div>
                      <Button
                        style={{ marginRight: "10px" }}
                        type="button"
                        variant="primary"
                        onClick={handleAddMore}
                      >
                        Add More
                      </Button>
                      <Button
                        style={{ marginRight: "10px" }}
                        type="button"
                        variant="primary"
                        onClick={handleReset}
                      >
                        Reset
                      </Button>
                    </div>
                    <div>
                      <Button
                        type="button"
                        onClick={backBtn}
                        style={{ marginRight: "10px" }}
                      >
                        Back
                      </Button>
                      <Button
                        type="submit"
                        variant="primary"
                        style={{ marginRight: "10px" }}
                      >
                        Upload
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default InqWrite;
