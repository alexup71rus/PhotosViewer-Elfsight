import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducers } from './reducers/index';
import { App } from './pages/index';

const store = createStore(reducers, { users: [], images: [] });


render(<Provider store={store}><Router><Route exact path="*" render={ (ev)=><App routeLocation={ev} /> } /></Router></Provider>, document.getElementById('root'));
