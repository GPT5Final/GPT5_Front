import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../../components/Header';
import { Footer } from '../../components/Footer';
import CommunityMenu from '../../components/CommunityMenu';
import CommunityBanner from '../../components/CommunityBanner';
import { Link } from 'react-router-dom';
import axios from "axios";
import Pagination from "react-js-pagination";

function MentorMentee() {
    const [communitylist, setCommunitylist] = useState([]);
    const [page, setPage] = useState(1);
    const [totalCnt, setTotalCnt] = useState(0);
    const [choice, setChoice] = useState('');
    const [search, setSearch] = useState('');

    function handlePageChange(pageNumber) {
        setPage(pageNumber);
    }

    function searchBtn() {
        if (choice.trim() === "" || search.trim() === "") return;
        setPage(1); 
        getCommunitylist(1);
    }

    const getCommunitylist = (pageNumber) => {
        const params = {
            pageNumber: pageNumber
        };

        if (choice.trim() !== "" && search.trim() !== "") {
            params.choice = choice;
            params.search = search;
        }

        axios
            .get("http://localhost:3000/MentorMenteelist", { params: params })
            .then(response => {
                setCommunitylist(response.data.list);
                setTotalCnt(response.data.cnt);
            })
            .catch(error => {
                console.log(error);
            });
    };
    
    useEffect(() => {
        getCommunitylist(page);
    }, [page]);


    return (
        <>
            <Header />
            <Container style={{ float: 'center' }}>
                <CommunityMenu />
                <Row>
                    <Col style={{ float: 'left' }}>
                        <div style={{ height: '660px', overflowY: 'auto' }}>
                            <table border="1" align="center" style={{ width: '810px' }}>
                                <colgroup>
                                    <col style={{ width: '50px' }} />
                                    <col style={{ width: '320px' }} />
                                    <col style={{ width: '100px' }} />
                                    <col style={{ width: '70px' }} />
                                    <col style={{ width: '80px' }} />
                                    <col style={{ width: '90px' }} />
                                    <col style={{ width: '100px' }} />
                                </colgroup>
                                <thead>
                                    <tr style={{ textAlign: 'center' }}>
                                        <th style={{ border: '1px solid' }}>번호</th>
                                        <th style={{ border: '1px solid' }}>제목</th>
                                        <th style={{ border: '1px solid' }}>위치</th>
                                        <th style={{ border: '1px solid' }}>실력</th>
                                        <th style={{ border: '1px solid' }}>분위기</th>
                                        <th style={{ border: '1px solid' }}>스타일</th>
                                        <th style={{ border: '1px solid' }}>작성자</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {communitylist.map(function (community, i) {
                                        const cutTitle = community.title.length > 36 ? community.title.substring(0, 36) + '...' : community.title;
                                        const cutLocation = community.location.length > 9 ? community.location.substring(0, 9) + '...' : community.location;
                                        const cutNickname = community.nickname.length > 9 ? community.nickname.substring(0, 9) + '...' : community.nickname;
                                        return (
                                            <tr key={i} style={{ textAlign: 'center', border: '1px solid' }}>
                                                <td style={{ border: '1px solid', height: '60px' }}>{community.seq}</td>
                                                <td align="left" style={{ height: '60px' }}>
                                                    <Link to={`/CommunityDetail/${community.seq}`} style={{ padding: '3px', textDecoration: 'none', color: 'black', display: 'block', height: '100%', overflow: 'hidden' }}>
                                                        {cutTitle}
                                                    </Link>
                                                </td>
                                                <td style={{ height: '60px' }}>{cutLocation}</td>
                                                <td style={{ height: '60px' }}>{community.tag1}</td>
                                                <td style={{ height: '60px' }}>{community.tag2}</td>
                                                <td style={{ height: '60px' }}>{community.tag3}</td>
                                                <td style={{ height: '60px' }}>{cutNickname}</td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                        <div className="pagination-container">
                            <Pagination
                                activePage={page}
                                itemsCountPerPage={10}
                                totalItemsCount={totalCnt}
                                pageRangeDisplayed={5}
                                onChange={handlePageChange}
                                itemClass="page-item"
                                linkClass="page-link"
                            />
                        </div>
                        <select value={choice} onChange={(e) => setChoice(e.target.value)} style={{ marginLeft: '250px', marginTop: '10px' }}>
                            <option value="">검색</option>
                            <option value="title">제목</option>
                            <option value="content">내용</option>
                            <option value="location">장소</option>
                            <option value="nickname">작성자</option>
                        </select>
                        <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="검색어" />
                        <button onClick={searchBtn}>검색</button>
                        <Link to="/community/MakeGroup" style={{ float: 'right', marginRight: '15px', marginTop: '10px', border: '1px solid', textDecoration: 'none', color: 'black' }}>그룹 만들기</Link>
                    </Col>
                    <CommunityBanner />
                </Row>
            </Container>
            <Footer marginTop={'30px'} />
        </>
    )
}

export default MentorMentee;
