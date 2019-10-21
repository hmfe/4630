import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"; 
import { Button } from './_components/Button/Button';
import { Nav } from './_components/Nav/Nav';
import Search from './_components/Search/Search';

import './App.scss';

function App() {
  return (
    <Router>
      <>
        <Nav />
        <main>
          <section className="search-section">
            <Route exact path="/">
                <Search />
            </Route>
          </section>
          <section>
            <Route exact path="/button">
                <Button />
            </Route>
          </section>
        </main>
      </>
    </Router>
  );
}

export default App;
