import React from 'react';
import styled from 'styled-components';
import {BrowserRouter} from 'react-router-dom'
import Listscreen from './ListScreen';
import { GlobalStyle } from './styles';


const Layout = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

const Wrapper = styled.div`
display:flex;`


const Title = styled.h1`
color: #D5B9B3;
height: 30px;
display: flex;
justify-items:center;
text-decoration:none;
font-size:70px;
font-family: "Arial Narrow", monospace;


`;


function App() {
  return (
    <>
    <GlobalStyle />
      <BrowserRouter>

      <Layout>
<Wrapper>
      <Title>
todos
      </Title>
    </Wrapper>
    <Listscreen/>
    </Layout>
         


        
      </BrowserRouter>

      </>
  );
}

export default App;
