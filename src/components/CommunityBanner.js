import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import styled from 'styled-components';
import axios from 'axios';

const Banner = styled.div`
  border: 1px solid black;
  border-radius: 15px;
  text-align: center;
  background-color: white;
  height: 110px;
  font-size: 15px;
`;

const Chat = styled.div`
  margin: 0 auto;
  width: 70px;
  height: 70px;
  background-color: #C4C4C4;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;

function CommunityBanner() {
  const [bannerList, setBannerList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('http://localhost:3000/Bannerlist')
      .then((response) => {
        const data = response.data;
        // console.log(data);

        if (data && data.list && Array.isArray(data.list)) {
          const filteredBanners = data.list.filter(
            (banner) =>
              (banner.banner === '1000' ||
               banner.banner === '2500' ||
               banner.banner === '5000') &&
               banner.del === 0
          );

          const randomBanners = filteredBanners
            .sort(() => Math.random() - 0.5)
            .slice(0, 5);

          setBannerList(randomBanners);
        } else {
          console.error('배너 데이터 형식이 올바르지 않습니다:', data);
        }
      })
      .catch((error) => {
        console.error('배너 데이터를 가져오는 중 오류가 발생했습니다:', error);
      });
  }, []);

  const handleBannerClick = (seq) => {
    navigate(`/CommunityDetail/${seq}`);
  };

  const cutText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + '...';
    }
    return text;
  };

  return (
    <Container
      style={{
        float: 'left',
        textAlign: 'center',
        borderRadius: '30px',
        width: '250px',
        height: '630px',
      }}
    >
      <Nav defaultActiveKey="/home" className="flex-column">
        {bannerList.map((banner) => (
          <Nav.Link
            key={banner.seq}
            onClick={() => handleBannerClick(banner.seq)}
            className="nav-link"
            style={{ color: 'black', textDecoration: 'none' }}
          >
            <Banner>
              <div>{cutText(banner.title, 23)}</div>
              <br />
              <div>{cutText(banner.content, 23)}</div>
            </Banner>
          </Nav.Link>
        ))}
      </Nav>
      <div style={{ marginTop: '50px' }}>
        <Chat>채팅</Chat>
      </div>
    </Container>
  );
}

export default CommunityBanner;
