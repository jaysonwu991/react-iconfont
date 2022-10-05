import React from 'react';
import { render } from '@testing-library/react';

import IconFont from './index';
import '../assets/iconfont.css';

jest.mock('../assets/iconfont.js');

describe('IconFont', () => {
  it('should render successfully when it is icon', () => {
    const { asFragment } = render(<IconFont name='node.js' type='icon' />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render successfully when it is svg symbol', () => {
    const { asFragment } = render(<IconFont name='node.js' type='svg'  />);

    expect(asFragment()).toMatchSnapshot();
  });
});
