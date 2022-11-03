import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/esm/Image';

import {Painting1, Painting2, Painting3} from '../../accessories/index';

const Painting = () => {
  return (
    <Container className='even'>
      <Row  >
        <Col className='title'>
          <p>
            <h1>Painting</h1>
            <h4>Painting indoor just as outdoor of your house gives a neat clean vibe.<br/>Let us see it properly done. We can spray or roll, depends on the situation.</h4>  
          </p>
        </Col>
      </Row>
      <Row >
        <Col  >
          <Image className='picFrame' src={Painting1}/>
        </Col>
        <Col>
          <Image className='picFrame' src={Painting2}/>
        </Col>
        <Col>
          <Image className='picFrame' src={Painting3}/>
        </Col>
      </Row>
    </Container>
  )
}

export default Painting