import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Songs from './Songs';
import Ads from './Ads';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <div className='mainpage'>
          <Songs/>
          <Ads/>
        </div>
        
      </header>
    </div>
  );
}

export default App;
