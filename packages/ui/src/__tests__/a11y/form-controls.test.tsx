import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import {
  Checkbox,
  Field,
  Input,
  NumberField,
  Radio,
  Select,
  SelectNative,
  Switch,
  Textarea,
  Toggle,
} from '../../index';
import { axe } from './axe';

describe('a11y: form controls', () => {
  it('Switch has no violations', async () => {
    const { container } = render(<Switch.Root aria-label="Notifications" />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('Checkbox with label has no violations', async () => {
    const { container } = render(
      <Checkbox.Root>
        <Checkbox.Label>Accept terms</Checkbox.Label>
      </Checkbox.Root>,
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it('Input has no violations', async () => {
    const { container } = render(<Input aria-label="Search" />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('Textarea has no violations', async () => {
    const { container } = render(<Textarea aria-label="Message" />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('SelectNative has no violations', async () => {
    const { container } = render(
      <SelectNative aria-label="Country">
        <option value="us">United States</option>
        <option value="in">India</option>
      </SelectNative>,
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it('Radio group with labels has no violations', async () => {
    const { container } = render(
      <Radio.Group aria-label="Plan">
        <Radio.Item value="free">
          <Radio.Indicator />
          Free
        </Radio.Item>
        <Radio.Item value="pro">
          <Radio.Indicator />
          Pro
        </Radio.Item>
      </Radio.Group>,
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it('NumberField with label has no violations', async () => {
    const { container } = render(
      <NumberField.Root>
        <Field.Root>
          <Field.Label>Quantity</Field.Label>
          <NumberField.Input data-testid="nf-input" />
        </Field.Root>
        <NumberField.Increment />
        <NumberField.Decrement />
      </NumberField.Root>,
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it('Field with label and description has no violations', async () => {
    const { container } = render(
      <Field.Root>
        <Field.Label>Email</Field.Label>
        <Field.Control type="email" />
        <Field.Description>We never share your email.</Field.Description>
      </Field.Root>,
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it('Select with label has no violations', async () => {
    const { container } = render(
      <Select.Root defaultValue="a">
        <Select.Trigger aria-label="Fruit">
          <Select.Value />
          <Select.Icon />
        </Select.Trigger>
        <Select.Portal>
          <Select.Positioner>
            <Select.Popup>
              <Select.Item value="a">Apple</Select.Item>
              <Select.Item value="b">Banana</Select.Item>
            </Select.Popup>
          </Select.Positioner>
        </Select.Portal>
      </Select.Root>,
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it('Toggle has no violations', async () => {
    const { container } = render(<Toggle aria-label="Bold">B</Toggle>);
    expect(await axe(container)).toHaveNoViolations();
  });
});
