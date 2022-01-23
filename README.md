# react-iconfont

> A Library Project For React To Use Iconfont Intelligently

## Installation

```bash
$ npm i -S @jayson991/react-iconfont
```

```javascript
import IconFont from '@jayson991/react-iconfont';
```

## Iconfont

### Source Support

- [Icomoon](https://icomoon.io/)
- [Iconfont](https://www.iconfont.cn/)

### Method Support

- FontClass
  - type: icon
- Symbol, SVG
  - type: svg

## Usage

```javascript
import React from 'react';
import IconFont from '@jayson991/react-iconfont';

// import for IconFont usage
import './iconfont.css';
import './iconfont.js';

const App = () => (
  <>
    <div>
      Hello
      <IconFont type='icon' name='circle-checked' color='f00' size='30' />
      FontIcon
    </div>

    <div>
      Hello
      <IconFont type='svg' name='circle-checked' color='f00' size='30' />
      SvgIcon
    </div>
  </>
);

export default App;
```

### Property Support

| Property | Description                                                    |
| -------- | :------------------------------------------------------------- |
| name     | IconFont Name, String, default: ''                             |
| type     | Icon or SVG, String, default: 'icon'                           |
| size     | IconFont Size, String, default: '' (Browser Setting)           |
| color    | IconFont Color, String, default: '' (Only Support `#${color}`) |
