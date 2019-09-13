# Pagination React Hooks
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/berat/pagination-react-hooks/issues) [![npm version](https://badge.fury.io/js/pagination-react-hooks.svg)](https://badge.fury.io/js/pagination-react-hooks) <br>
[![https://nodei.co/npm/pagination-react-hooks.png?downloads=true&downloadRank=true&stars=true](https://nodei.co/npm/pagination-react-hooks.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/pagination-react-hooks)

> #### Pagination component prepared with React hooks. Load and use.
> My first component as an open source after learning React. If you want to contribute, I am waiting for you in the issue section.

<br>

## Installation
Install `pagination-react-hooks` with npm:

`npm i pagination-react-hooks`

with yarn:

`yarn add pagination-react-hooks`

<br>

## Example

To be practical you can see live in my react application [https://practical-react.herokuapp.com](https://practical-react.herokuapp.com).


<br>

## Usage
Add the component to the section you want to show and remember to use the parameters. That's all.

```js
import React from 'react';
import Pagination from 'pagination-react-hooks';

const Content = () => {

    const posts = [
        {id : "1", name: "Berat 1"},
        {id : "2", name: "Berat 2"},
        {id : "3", name: "Berat 3"},
        {id : "4", name: "Berat 4"},
        {id : "5", name: "Berat 5"},
        {id : "6", name: "Berat 6"},
    ]
    
    const show = (value) => (
        <li key={value.id} className="card">
            <span>{value.name}</span>         
        </li>
    )
    return (
        <Pagination
            data={posts}
            Show={show}
            displayNumber="7"
            previousText="Önceki"
            nextText="Sonraki"
        />
    )
}
export default Content;
```

<br>


## Params

| Parameters        | Description                        
|------------------|------------------------------------|
| posts         | The array of content to display.                 |
| Show         | The theme you want to sho your content                 |
| displayNumber         | The maximum number of content to display on the page.                |
| previousText         | Previous button text                 |
| nextText         | Next button text                |
