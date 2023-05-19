import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faComments, faSearch, faUsers, faPlusCircle, faUserCircle } from '@fortawesome/free-solid-svg-icons'

const menuItems = [
  { name: "홈", icon: faHome, link: "/community/Home" },
  { name: "운동 이야기", icon: faComments, link: "/community/ExerciseTalk" },
  { name: "인증멘토 찾기", icon: faSearch, link: "/community/PartnerMentor" },
  { name: "멘토&멘티찾기", icon: faUsers, link: "/community/MentorMentee" },
  { name: "그룹 만들기", icon: faPlusCircle, link: "/community/MakeGroup" },
  { name: "나의 그룹", icon: faUserCircle, link: "/community/MyGroup" },
]

function CommunityMenu() {
  return (
    <Container style={styles.container}>
      <Nav defaultActiveKey="/home" className="flex-column">
        {menuItems.map(item => (
          <Nav.Link as={Link} to={item.link} style={styles.navLink} key={item.name}>
            <FontAwesomeIcon icon={item.icon} style={styles.icon} />
            {item.name}
          </Nav.Link>
        ))}
      </Nav>
    </Container>
  );
}

const styles = {
  container: {
    float: 'left', 
    textAlign: 'center', 
    padding: '5px', 
    backgroundColor: '#2D2D2D', 
    borderRadius: '30px', 
    width: '200px', 
    marginRight: '10px', 
    color: 'white'
  },
  navLink: {
    marginTop: '30px', 
    color: 'white', 
    textDecoration: 'none',
    fontSize: '18px'
  },
  icon: {
    marginRight: '10px',
  }
}

export default CommunityMenu;