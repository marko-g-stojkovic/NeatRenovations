import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/esm/Image';

import {Flooring1, Flooring2, Flooring3} from '../../accessories/index';

const Flooring = () => {
  return (
    <Container className='even'>
      <Row  >
        <Col className='title'>
          <p>
            <h1>Flooring</h1>
            <h4>We focus on clean eco and alergy free flooring.<br/>Hardwood, Laminate, Vinyl and Tiles are what we install.<br/>Let us help you have a neat floor.</h4>  
          </p>
        </Col>
      </Row>
      <Row >
        <Col  >
          <Image className='picFrame' src={Flooring1}/>
        </Col>
        <Col>
          <Image className='picFrame' src={Flooring2}/>
        </Col>
        <Col>
          <Image className='picFrame' src={Flooring3}/>
        </Col>
      </Row>
    </Container>
  )
}

export default Flooring