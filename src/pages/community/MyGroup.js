import React, { useEffect } from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../../components/Header';
import { Footer } from '../../components/Footer';
import CommunityMenu from '../../components/CommunityMenu';
import CommunityBanner from '../../components/CommunityBanner';
import { Map } from 'react-kakao-maps-sdk'


const GymInfo = styled.div`
float: left; 
`;

function MyGroup() {

    return (
        <>
            <Header />
            <Container style={{ float: 'center', height: '770px' }}>
                <CommunityMenu />
                <Row>
                    <Col style={{ float: 'left' }}>
                        <GymInfo style={{ border: '1px solid', borderRadius: '15px' }}>
                            <div style={{ width: '800px', height: '750px' }}>나의 그룹</div>
                        </GymInfo>
                    </Col>
                    <CommunityBanner />
                </Row>
            </Container>
            <Footer marginTop={'30px'} />
        </>
    )
}

export default MyGroup
