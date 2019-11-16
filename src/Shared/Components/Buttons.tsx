import styled from 'styled-components';

// Define our button, but with the use of props.theme this time
const DefaultButton = styled.button`
  font-size: 1em;
  margin: 0.25em;
  padding: 0.25em 1em;
  border-radius: 3px;
  /* Color the border and text with theme.main */
  color: ${(props: any) => props.theme.default};
  border: 2px solid ${(props: any) => props.theme.default};
  background: ${(props: any) => props.theme.background};
  cursor: auto;
`;

const PrimaryButton = styled(DefaultButton)`
  color: ${(props: any) => props.theme.primary}
  border: 2px solid ${(props: any) => props.theme.primary}
`;

const SecondaryButton = styled(DefaultButton)`
  color: ${(props: any) => props.theme.secondary}
  border: 2px solid ${(props: any) => props.theme.secondary}
`;

export {
    DefaultButton,
    PrimaryButton,
    SecondaryButton,
}