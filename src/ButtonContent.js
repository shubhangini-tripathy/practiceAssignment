import React from 'react';
import { Message } from 'semantic-ui-react';
import { Grid, Image, Button, Link } from 'semantic-ui-react';

const ButtonContent = (props) => (

  <Message info>
    <Message.Header>Was this what you wanted?</Message.Header>
    <Button primary onClick={() => { props.history.push('/') }}>Back</Button>
  </Message>
);

export default ButtonContent;
