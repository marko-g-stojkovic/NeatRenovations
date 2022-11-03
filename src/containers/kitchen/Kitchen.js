import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import {Kitchen1, Kitchen2, Kitchen3} from '../../accessories/index';

const Kitchen = () => {
  return (
  <Container className='odd'>
    <Row>
      <Col className='title'>
        <p>
          <h1>Kitchen</h1>
          <h4>Kitchen is a delicate part of the house and can be center of attention.<br/> Let us help you achieve that.</h4>
        </p>
      </Col>
    </Row>
    <Row >
      <Col  >
        <Image className='picFrame' src={Kitchen1}/>
      </Col>
      <Col>
        <Image className='picFrame' src={Kitchen2}/>
      </Col>
      <Col>
        <Image className='picFrame' src={Kitchen3}/>
      </Col>
    </Row>
  </Container>
  )
}

export default Kitchen