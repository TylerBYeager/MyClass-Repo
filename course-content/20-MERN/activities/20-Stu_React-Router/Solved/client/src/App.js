import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/Home';
import SingleThought from './pages/SingleThought';
import Header from './components/Header';
import Footer from './components/Footer';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
            <Route exact path="/">
              <Home />
            </Route>
            {/* Create a route to display a single thought's comments based on its `thoughtId` provided in the URL */}
            {/* 🔑 To navigate to the thoughts page, we first must define a route. Because the route is dynamic and will change based on the id of the thought we want to display, we use a :thoughtID parameter: */}
            <Route exact path="/thoughts/:thoughtId">
              <SingleThought />
            </Route>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
