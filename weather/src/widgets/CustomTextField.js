import * as React from 'react';
import { useInput } from '@mui/base';
import { styled } from '@mui/system';

const StyledInputElement = styled('input')`
  width: 200px;
  font-size: 1rem;
  font-family: IBM Plex Sans, sans-serif;
  font-weight: 400;
  line-height: 1.4375em;
  background: #000;
  border: 1px solid #000;
  border-radius: 10px;
  padding: 6px 10px;
  color: #fff;
  transition: width 300ms ease;

  &:hover {
    background: #000;
    border-color: #000;
  }

  &:focus {
    outline: none;
    width: 220px;
    transition: width 200ms ease-out;
  }
`;

const CustomInput = React.forwardRef(function CustomInput(props, ref) {
  const { getRootProps, getInputProps } = useInput(props, ref);

  return (
    <div {...getRootProps()}>
      <StyledInputElement {...props} {...getInputProps()} />
    </div>
  );
});

export default function TextInput() {
  return <CustomInput aria-label="Demo input" placeholder="Enter a city" />;
}
