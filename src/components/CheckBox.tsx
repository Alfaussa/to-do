import React, { ComponentProps } from "react";
import styled, { StyledComponent } from "styled-components";

  const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  `
const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  // Hide checkbox visually but remain accessible to screen readers.
  // Source: https://polished.js.org/docs/#hidevisually
  border: 0;
  clip: rect(0 0 0 0);

  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
  
`



  const StyledCheckbox = styled.div<{checked:boolean;}>`
  display: inline-block;
  width: 20px;
  height: 20px;
  background: ${props => props.checked ? '#71B16D' : 'white'};
  border: 1px solid #c6c2c2;
  border-radius: 25px;
  transition: all 150ms;
  text-decoration: ${props => props.checked ? 'line-through' : "none"};

`;


type Props = ComponentProps<StyledComponent<'input', any, {}>> & {
    checked: boolean;

};

const Checkbox: React.FC<Props> = ({ checked, ...props }) => (
  <CheckboxContainer >
    <HiddenCheckbox {...props} type="checkbox" checked={checked}  />
    <StyledCheckbox checked={checked}>
    </StyledCheckbox>
  </CheckboxContainer>
);


export default Checkbox;

