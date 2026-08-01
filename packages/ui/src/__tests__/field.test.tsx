import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Field, Fieldset } from '../components/field';

describe('Field', () => {
  it('renders Field.Root', () => {
    render(<Field.Root data-testid="r" />);
    expect(screen.getByTestId('r')).toBeInTheDocument();
  });

  it('renders Field.Label', () => {
    render(
      <Field.Root>
        <Field.Label data-testid="l">Name</Field.Label>
      </Field.Root>,
    );
    expect(screen.getByTestId('l')).toHaveTextContent('Name');
  });

  it('Field.Label applies default classes', () => {
    render(
      <Field.Root>
        <Field.Label data-testid="l">Name</Field.Label>
      </Field.Root>,
    );
    expect(screen.getByTestId('l')).toHaveClass('text-sm', 'font-medium', 'block');
  });

  it('renders Field.Control', () => {
    render(
      <Field.Root>
        <Field.Control data-testid="c" />
      </Field.Root>,
    );
    expect(screen.getByTestId('c')).toBeInTheDocument();
  });

  it('renders Field.Description', () => {
    render(
      <Field.Root>
        <Field.Description data-testid="d">Help text</Field.Description>
      </Field.Root>,
    );
    expect(screen.getByTestId('d')).toHaveTextContent('Help text');
  });

  it('Field.Description applies default classes', () => {
    render(
      <Field.Root>
        <Field.Description data-testid="d">Help text</Field.Description>
      </Field.Root>,
    );
    expect(screen.getByTestId('d')).toHaveClass('text-xs', 'text-nb-muted-fg', 'mt-1');
  });

  it('Field.Root combines custom className', () => {
    render(<Field.Root data-testid="r" className="my-custom" />);
    expect(screen.getByTestId('r')).toHaveClass('my-custom');
  });

  it('Field.Label forwards ref', () => {
    const ref = { current: null };
    render(
      <Field.Root>
        <Field.Label ref={ref}>Name</Field.Label>
      </Field.Root>,
    );
    expect(ref.current).toBeInstanceOf(HTMLLabelElement);
  });

  it('has displayNames', () => {
    expect(Field.Root.displayName).toBe('Field.Root');
    expect(Field.Label.displayName).toBe('Field.Label');
    expect(Field.Control.displayName).toBe('Field.Control');
    expect(Field.Error.displayName).toBe('Field.Error');
    expect(Field.Description.displayName).toBe('Field.Description');
  });
});

describe('Fieldset', () => {
  it('renders Fieldset.Root', () => {
    render(<Fieldset.Root data-testid="r" />);
    expect(screen.getByTestId('r')).toBeInTheDocument();
  });

  it('Fieldset.Root is a fieldset element', () => {
    render(<Fieldset.Root data-testid="r" />);
    expect(screen.getByTestId('r').tagName).toBe('FIELDSET');
  });

  it('Fieldset.Root applies default classes', () => {
    render(<Fieldset.Root data-testid="r" />);
    expect(screen.getByTestId('r')).toHaveClass('rounded-lg', 'border', 'border-nb-border', 'p-6');
  });

  it('renders Fieldset.Legend', () => {
    render(
      <Fieldset.Root>
        <Fieldset.Legend data-testid="l">Details</Fieldset.Legend>
      </Fieldset.Root>,
    );
    expect(screen.getByTestId('l')).toHaveTextContent('Details');
  });

  it('Fieldset.Legend applies default classes', () => {
    render(
      <Fieldset.Root>
        <Fieldset.Legend data-testid="l">Details</Fieldset.Legend>
      </Fieldset.Root>,
    );
    expect(screen.getByTestId('l')).toHaveClass('text-sm', 'font-semibold');
  });

  it('Fieldset.Root combines custom className', () => {
    render(<Fieldset.Root data-testid="r" className="my-custom" />);
    expect(screen.getByTestId('r')).toHaveClass('my-custom');
  });

  it('Fieldset.Root forwards ref', () => {
    const ref = { current: null };
    render(<Fieldset.Root ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLFieldSetElement);
  });

  it('has displayNames', () => {
    expect(Fieldset.Root.displayName).toBe('Fieldset.Root');
    expect(Fieldset.Legend.displayName).toBe('Fieldset.Legend');
  });
});
