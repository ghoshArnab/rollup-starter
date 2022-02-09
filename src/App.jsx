import React from 'react';
import { Input } from '@pega/cosmos-react-core';
import Button from '@mui/material/Button';
import AccessAlarm from '@mui/icons-material/AccessAlarm';
import ThreeDRotation from '@mui/icons-material/ThreeDRotation';

import { Text } from 'rebass';

import 'antd/dist/antd.css';
import 'semantic-ui-css/semantic.min.css';

import { DatePicker } from 'antd';

import { Message } from 'semantic-ui-react';

import ons from 'onsenui';
import { Card } from 'react-onsenui';

import logo from './logo.svg';
import './App.css';
import './app0.scss';

import StyledHomeCsHomeWrapper from './styled';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" width={50} />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <StyledHomeCsHomeWrapper>
          <Input type="text" className="hello0" id="hello1" />
          <Button variant="contained">Hello World</Button>
          <AccessAlarm />
          <ThreeDRotation />

          <DatePicker />

          <Message info> some info text from semantic</Message>

          <Card>
            <p>Some content from onsenui</p>
          </Card>
        </StyledHomeCsHomeWrapper>
        <Text fontSize={[3, 4, 5]} fontWeight="bold" color="primary">
          Text from Rebass
        </Text>
      </header>
    </div>
  );
}

export default App;
