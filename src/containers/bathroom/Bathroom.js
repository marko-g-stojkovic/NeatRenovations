import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/esm/Image';

import {Bathroom1, Bathroom2, Bathroom3} from '../../accessories/index';

const Bathroom = () => {
  return (
    <Container className='even'>
      <Row  >
        <Col  className='title'>
          <p>
            <h1>Bathroom</h1>
            <h4>Bathroom along with a kitchen can be like a pearl necklase around house's neck.<br/>We can help you make a custom unique looking bathroom.</h4>  
          </p>
        </Col>
      </Row>
      <Row >
        <Col  >
          <Image className='picFrame' src={Bathroom1}/>
        </Col>
        <Col>
          <Image className='picFrame' src={Bathroom2}/>
        </Col>
        <Col>
          <Image className='picFrame' src={Bathroom3}/>
        </Col>
      </Row>
  </Container>
  )
}

export default Bathroom