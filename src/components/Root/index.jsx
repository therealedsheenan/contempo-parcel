import React from 'react';

// $FlowFixMe
import { ThemeProvider } from 'styled-components';

import theme from './theme';

// reset styles
// import '../../styles/base';

const Root = (props: { children: Object }) => (
  <main>
    {props.children}
  </main>
);

export default Root;
