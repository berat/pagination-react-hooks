import React from 'react';
import { render} from 'react-dom';
import Pagination from './Pagination';
import './css/main.css';

const App = () => (
    <Pagination />
);
render(<App />, document.getElementById("root"));