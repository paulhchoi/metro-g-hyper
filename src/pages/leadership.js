import React from 'react';
// import { Link } from 'gatsby'

import Layout from '../components/layout';
import Footer from '../components/Footer';
import Header from '../components/Header';


/* import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col' */


const Leadership = () => (

  <Layout>
    <Header />

    <div class="wrapper">

        <section id="leaders" class="wrapper">
            <div class="inner">
                <h1 class="major">Leadership</h1>

                <div class="row">
                  <div class="col-3 col-12-medium">
                    <img src="http://via.placeholder.com/250x250" alt=""/>

                    <h2>Donny Cho</h2>
                    <h4>Senior Pastor and Executive Director</h4>
                   
                  </div>

                  <div class="col-9 col-12-medium">
                    <p>
                      Donny Cho is the Senior Pastor of Metro Church, founded out of a small prayer meeting that began in September 2008. 
                      Metro is a church-planting movement that is committed to personal and corporate renewal, the re-training and mobilization of “outward-faced” teams, 
                      and the rebuilding of the city. Donny Cho is responsible for establishing the overall vision, direction, strategy, and objectives for the Metro community, 
                      and is a regular preacher during its Sunday Worship Service. He leads the training, development, and empowerment of the church’s staff and leadership teams. 
                      Donny graduated from Plymouth-Whitemarsh High School, completed a double-major in Biology and Chemistry at Brandeis University, 
                      and completed the four-year Leadership And Ministry Preparation (LAMPhilly) program in Philadelphia (for city ministry training). 
                      He and his wife Angela have been married since February 2010.
                    </p>
                  </div>
                </div>

                <div class="row">
                  <div class="col-3 col-12-medium">
                    <img src="http://via.placeholder.com/250x250" alt=""/>

                    <h2>Timothy Shin</h2>
                    <h4>Executive Pastor and Director of Worship Ministries</h4>
                   
                  </div>

                  <div class="col-9 col-12-medium">
                    <p>
                      Timothy Shin is responsible for operational leadership over many of Metro’s primary ministries and strategic objectives, 
                      and is a regular worship leader during its Sunday Worship Service. As the Director of Worship at Metro, 
                      Timothy Shin also oversees the training and development of the worship staff for congregational worship, 
                      and serves as a regular worship leader during the Sunday Worship Service. 
                      He is also responsible for the establishment of strategic initiatives for the future mobilization of worship ministries throughout the Metro network. 
                      Tim graduated from The College of New Jersey with a Bachelor of Science in Finance and Management, 
                      and is studying to complete his pastoral degree at Reformed Theological Seminary.
                    </p>
                  </div>
                </div>

                <div class="row">
                  <div class="col-3 col-12-medium">
                    <img src="http://via.placeholder.com/250x250" alt=""/>

                    <h2>Hee Jun Rho</h2>
                    <h4>Executive Pastor and Director of Worship Ministries</h4>
                   
                  </div>

                  <div class="col-9 col-12-medium">
                    <p>
                      Hee Jun Rho is a product director at Cadient Group and has been a Philadelphia-area resident since 2005, 
                      after he graduated with an MBA from Georgetown University. He has been a brother, confidante, and partner in ministry, 
                      having served alongside Donny Cho since their University and Graduate School days in the Boston area (1992-2003). 
                      He earned his undergraduate degree in Biology at the Massachusetts Institute of Technology (MIT) in Cambridge, MA, 
                      and also earned his MBA at Georgetown University. Choosing to work in Philadelphia with the prospect of being a part of a Gospel-movement in the city, 
                      Hee Jun was ordained as a Ruling Elder in 2009, and has a heart for biblical counseling, and connecting with people along their spiritual journeys. 
                      Residing in the King of Prussia area after years of living along the Ben Franklin Parkway, 
                      Hee Jun Rho has been a consistent friend and trustworthy partner in the Gospel ministry.
                    </p>
                  </div>
                </div>
            </div>

           
        </section>

    </div>
    {/* <Container fluid="true">

      <h1>Leadership</h1>

      <Row>
      
        <Col lg={3}>
          <img src="http://via.placeholder.com/200x200" alt=""></img>
        </Col>

        <Col lg={9}>
          <p>
            Profile description should go here.
            Profile description should go here.
            Profile description should go here.
            Profile description should go here.
            Profile description should go here.
            Profile description should go here.
            Profile description should go here.
          </p>
        </Col>

      </Row>
    </Container> */}

    <Footer/>
  </Layout>
);

export default Leadership;
