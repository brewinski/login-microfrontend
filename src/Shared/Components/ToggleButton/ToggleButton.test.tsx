import { ToggleButton } from './ToggleButton';
import React from 'react';
import { 
  cleanup, 
  fireEvent, 
  render,
  queryByAttribute,
} from "@testing-library/react";
import sinon, { spy } from 'sinon';

it('sets the toggle to on when true is provided to isOn.', () => {
  const dom = render(
    <ToggleButton name="toggle-1" isOn={true} handleToggle={() => {}} />
  );
  const input = queryByAttribute('id', dom.container, 'toggle-1') as HTMLInputElement;
  expect(input.checked).toBe(true);
});

it('sets the toggle to off when false is provided to isOn.', () => {
  const dom = render(
    <ToggleButton name="toggle-1" isOn={false} handleToggle={() => {}} />
  );
  const input = queryByAttribute('id', dom.container, 'toggle-1') as HTMLInputElement;
  expect(input.checked).toBe(false);
});

it('executes the handleToggle callback when the input changes.', () => {
  // setup
  const callback = spy();
  const dom = render(
    <ToggleButton name="toggle-1" isOn={true} handleToggle={callback} />
  );
  const label = queryByAttribute('for', dom.container, 'toggle-1') as HTMLElement;
  // action
  fireEvent.click(label);
  fireEvent.click(label);
  // assert
  expect(callback.calledTwice).toBe(true);
});

it('should set the input id and the label for value', () => {
    // setup
    const callback = spy();
    const dom = render(
      <ToggleButton name="toggle-1" isOn={true} handleToggle={callback} />
    );
    const input = queryByAttribute('id', dom.container, 'toggle-1') as HTMLInputElement;
    const label = queryByAttribute('for', dom.container, 'toggle-1') as HTMLElement;
    // assert
    expect(input && label).toBeTruthy();
})

afterEach(cleanup);