import React from 'react';
import ReactDOM from 'react-dom';

import Timetable from './Timetable';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Timetable />, div);
  ReactDOM.unmountComponentAtNode(div);
});
