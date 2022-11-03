

import './app.css';
import Footer from './containers/footer/Footer';
import {NavigationB, Basement, Bathroom, Flooring, Kitchen, Painting, Staircase, Landing} from "./containers/index";

function App() {
  return (
    
    <div>
      <div>
        <NavigationB/>
      </div>
      <div>
        <Landing/>
        <Kitchen/>
        <Bathroom/>
        <Basement/>
        <Flooring/>
        <Staircase/>
        <Painting/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
