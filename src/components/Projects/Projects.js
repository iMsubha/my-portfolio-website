import React from 'react';
import { Container, Row } from 'react-bootstrap';
import bookCorner from '../../images/bookCorner.png';
import championsLeague from '../../images/championsLeague.png';
import fb from '../../images/fb-1.png';
import interiorDesign from '../../images/interiorDesign.png';
import rapidShuttle from '../../images/rapidShuttle.png';
import sportsWiki from '../../images/sportsWiki.png';
import HeaderTop from '../HeaderTop/HeaderTop';
import ProjectDetails from "../ProjectDetails/ProjectDetails";
const Projects = () => {
    const dataImg = [
        {
          img:`${interiorDesign}`,
          cols: 1,
          title: 'Interior Design Website',
          live:'https://interior-design-website.web.app/',
          code:'https://github.com/iMsubha/interio-design-client'
        },
        {
          img:`${bookCorner}`,
          cols: 2,
          title: 'Book Corner Website',
          live:'https://book-corner-app.firebaseapp.com/',
          code:'https://github.com/iMsubha/book-corner-client'
        },
        {
            img:`${sportsWiki}`,
            cols: 1,
            title: 'Sports Wiki',
            live:'https://hungry-bohr-2412b4.netlify.app/',
            code:'https://github.com/iMsubha/sports-wiki'
          },
         
        {
          img:`${championsLeague}`,
          cols: 1,
          title: 'Champions League',
          live:'https://quizzical-bell-b3754c.netlify.app/',
          code:'https://github.com/iMsubha/champions-league'
        },
        {
            img:`${rapidShuttle}`,
            cols: 1,
            title: 'Rapid Shuttle',
            live:'https://react-auth-b8204.web.app/',
            code:'https://github.com/iMsubha/rapid-shuttle'
          },
          {
            img:`${fb}`,
            cols: 1,
            title: 'Facebook Clone',
            live:'https://facebook-clone-b6f0c.web.app/',
            code:'https://github.com/iMsubha/facebook-clone'
          },
      ];
    
    return (
        <Container>
            <HeaderTop/>
             <Row className="mt-5">
                 {
                    dataImg.map(data =><ProjectDetails  data={data}></ProjectDetails>)
                 }
             </Row>
        </Container>
    );
};

export default Projects;