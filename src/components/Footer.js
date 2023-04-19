import React from 'react';
import { Link } from 'react-router-dom'; // Link 컴포넌트를 추가합니다.
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Footer = (props) => {
    return (
        <div
            style={{
                marginTop: `${
                    props.marginTop !== undefined ? props.marginTop : '20vh'
                }`,
                backgroundColor: '#A3AFBB',
                display: 'flex',
                justifyContent: 'space-around',
                color: '#C4C4C4',
            }}
        >
            <div style={{ flex: '0.3 auto' }}></div>
            <div style={{ flex: '0.3 auto' }}>
                <h3>Menu</h3>
                <Link to="/" style={{ color: '#C4C4C4' }}>Home</Link>
                <div>Home</div>
                <div>Home</div>
            </div>
            <div style={{ flex: '0.4 auto' }}>
                <h3>Help</h3>
                <div>Home</div>
                <div>Home</div>
                <div>Home</div>
            </div>
            <div style={{}}></div>
        </div>
    );
};
