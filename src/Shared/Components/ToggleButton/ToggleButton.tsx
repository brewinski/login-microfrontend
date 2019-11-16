import React, { ChangeEvent } from "react";
import './ToggleButton.css';
import styled, { StyledComponent } from "styled-components";

const ToggleLabel: StyledComponent<"label", any, {isOn: boolean}, never> = styled.label`
  background: ${(props: any) => props.isOn ? props.theme.toggle.onColor : props.theme.toggle.background }
`;

const ToggleSpan = styled.span`
  background: ${(props: any) => props.theme.toggle.toggle}
`;

export const ToggleButton = ({isOn, handleToggle, name}: { 
  isOn: boolean, 
  handleToggle: (callback: ChangeEvent<HTMLInputElement>) => void,
  name: string
}) => {
  return (
    <>
      <input
        checked={isOn}
        onChange={handleToggle}
        className="react-switch-checkbox"
        id={name}
        type="checkbox" />
      <ToggleLabel 
        isOn={isOn}
        className="react-switch-label"
        htmlFor={name} >
        <ToggleSpan 
          className={`react-switch-button`} />
      </ToggleLabel>
    </>
  )
}
