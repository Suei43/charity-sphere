import {Home} from './components/Home';
import {Footer} from './components/Footer';
import {About} from './components/About';
import {Donate} from './components/Donate';
 
function App() {
  return (
    <div className='bg-gray-100'>
      <Home />
      <About />
      <Donate />
      <Footer />
    </div>
  );
}

export default App;
