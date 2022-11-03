import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/esm/Image';

import {Basement1, Basement2, Basement3} from '../../accessories/index';

const Basement = () => {
  return (
    <Container className='odd'>
      <Row  >
        <Col className='title'>
          <p>
            <h1>Basement</h1>
            <h4>Basement extends the comfort of your home and raises the value of your property.<br/>Let us help you plan, finish or renovate your basement.</h4>  
          </p>
        </Col>
      </Row>
      <Row >
        <Col  >
          <Image className='picFrame' src={Basement1}/>
        </Col>
        <Col>
          <Image className='picFrame' src={Basement2}/>
        </Col>
        <Col>
          <Image className='picFrame' src={Basement3}/>
        </Col>
      </Row>
    </Container>
  )
}

export default Basement