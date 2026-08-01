import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Collapsible } from '../components/collapsible';

describe('Collapsible', () => {
  it('renders Collapsible.Root', () => {
    render(<Collapsible.Root data-testid="r" />);
    expect(screen.getByTestId('r')).toBeInTheDocument();
  });

  it('renders Collapsible.Trigger', () => {
    render(
      <Collapsible.Root>
        <Collapsible.Trigger data-testid="t">Toggle</Collapsible.Trigger>
      </Collapsible.Root>,
    );
    expect(screen.getByTestId('t')).toHaveTextContent('Toggle');
  });

  it('Collapsible.Trigger is a button', () => {
    render(
      <Collapsible.Root>
        <Collapsible.Trigger data-testid="t">Toggle</Collapsible.Trigger>
      </Collapsible.Root>,
    );
    expect(screen.getByTestId('t').tagName).toBe('BUTTON');
  });

  it('Collapsible.Trigger applies default classes', () => {
    render(
      <Collapsible.Root>
        <Collapsible.Trigger data-testid="t">Toggle</Collapsible.Trigger>
      </Collapsible.Root>,
    );
    expect(screen.getByTestId('t')).toHaveClass('flex', 'w-full', 'rounded-md', 'px-3', 'py-2', 'text-sm', 'font-medium');
  });

  it('renders Collapsible.Panel', () => {
    render(
      <Collapsible.Root defaultOpen>
        <Collapsible.Panel data-testid="p">Content</Collapsible.Panel>
      </Collapsible.Root>,
    );
    expect(screen.getByTestId('p')).toHaveTextContent('Content');
  });

  it('Collapsible.Panel applies default classes', () => {
    render(
      <Collapsible.Root defaultOpen>
        <Collapsible.Panel data-testid="p">Content</Collapsible.Panel>
      </Collapsible.Root>,
    );
    expect(screen.getByTestId('p')).toHaveClass('overflow-hidden', 'text-sm');
  });

  it('opens panel when trigger is clicked', async () => {
    const user = userEvent.setup();
    render(
      <Collapsible.Root>
        <Collapsible.Trigger>Toggle</Collapsible.Trigger>
        <Collapsible.Panel data-testid="p">Content</Collapsible.Panel>
      </Collapsible.Root>,
    );
    await user.click(screen.getByText('Toggle'));
    const panel = screen.getByTestId('p');
    expect(panel).toHaveAttribute('data-open', '');
  });

  it('Collapsible.Root combines custom className', () => {
    render(<Collapsible.Root data-testid="r" className="my-custom" />);
    expect(screen.getByTestId('r')).toHaveClass('my-custom');
  });

  it('Collapsible.Root forwards ref', () => {
    const ref = { current: null };
    render(<Collapsible.Root ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it('has displayNames', () => {
    expect(Collapsible.Root.displayName).toBe('Collapsible.Root');
    expect(Collapsible.Trigger.displayName).toBe('Collapsible.Trigger');
    expect(Collapsible.Panel.displayName).toBe('Collapsible.Panel');
  });
});
