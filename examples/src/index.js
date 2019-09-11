import React from 'react';
import { render} from 'react-dom';
import Pagination from '../../src';

const App = () => (
    <Pagination posts displayNumber previousText nextText Show  />
);
render(<App />, document.getElementById("root"));