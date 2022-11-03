import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/esm/Image';

import {Staircase1, Staircase2, Staircase3} from '../../accessories/index';

const Staircase = () => {
  return (
    <Container className='odd'>
      <Row  >
        <Col className='title'>
          <p>
            <h1>Staircase</h1>
            <h4>Staircase can be unique, bring attention and raise the value of your home.<br/>We can help with custom designs and see it properly done.</h4>  
          </p>
        </Col>
      </Row>
      <Row >
        <Col  >
          <Image className='picFrame' src={Staircase1}/>
        </Col>
        <Col>
          <Image className='picFrame' src={Staircase2}/>
        </Col>
        <Col>
          <Image className='picFrame' src={Staircase3}/>
        </Col>
      </Row>
    </Container>
  )
}

export default Staircase