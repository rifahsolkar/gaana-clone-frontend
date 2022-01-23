import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Navbar from './Navbar';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Songs from './Songs';
import Ads from './Ads';
import Trend from './Routes/Trend';
import Album from "./Routes/Album";
import Moods from "./Routes/Moods";
import MyMusic from "./Routes/MyMusic";
import NewSongs from "./Routes/NewSongs";
import OldSongs from "./Routes/OldSongs";
import Podcast from "./Routes/Podcast";
import Radio from "./Routes/Radio";
import Footer from "./Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Navbar />

            <div className='mainpage'>
              <Songs />
              <Ads />
            </div>
          </Route>

          <Route exact path="/trending">
            <Navbar />
            <div className='mainpage'>
              <div className="combined">
                <Trend />
                <Footer />

              </div>
              <Ads />
            </div>
          </Route>

          <Route exact path="/album">
            <Navbar />
            <div className='mainpage'>
              <div className="combined">

                <Album />
                <Footer />
              </div>
              <Ads />
            </div>
          </Route>

          <Route exact path="/moods">
            <Navbar />
            <div className='mainpage'>
              <div className="combined">

                <Moods />
                <Footer />
              </div>
              <Ads />
            </div>
          </Route>

          <Route exact path="/mymusic">
            <Navbar />
            <div className='mainpage'>
              <div className="combined">
                <MyMusic />
                <Footer />
              </div>
              <Ads />
            </div>
          </Route>

          <Route exact path="/newsongs">
            <Navbar />
            <div className='mainpage'>
              <div className="combined">
                <NewSongs />
                <Footer />
              </div>
              <Ads />
            </div>

          </Route>

          <Route exact path="/oldsongs">
            <Navbar />
            <div className='mainpage'>
              <div className="combined">
                <OldSongs />
                <Footer />
              </div>
              <Ads />
            </div>

          </Route>

          <Route exact path="/podcast">
            <Navbar />
            <div className='mainpage'>
              <div className="combined">

                <Podcast />
                <Footer />

              </div>
              <Ads />
            </div>
          </Route>

          <Route exact path="/radio">
            <Navbar />
            <div className='mainpage'>
              <div className="combined">
                <Radio />
                <Footer />
              </div>

              <Ads />
            </div>
          </Route>


          <Route path="/">
            <h1>Page not found</h1>
          </Route>


        </Switch>
      </div>

    </Router>

  );
}

export default App;
