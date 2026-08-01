import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Tabs } from '../components/tabs';

describe('Tabs', () => {
  it('renders Tabs.Root', () => {
    render(<Tabs.Root data-testid="r" />);
    expect(screen.getByTestId('r')).toBeInTheDocument();
  });

  it('renders Tabs.List', () => {
    render(
      <Tabs.Root>
        <Tabs.List data-testid="l" />
      </Tabs.Root>,
    );
    expect(screen.getByTestId('l')).toBeInTheDocument();
  });

  it('Tabs.List applies default classes', () => {
    render(
      <Tabs.Root>
        <Tabs.List data-testid="l" />
      </Tabs.Root>,
    );
    expect(screen.getByTestId('l')).toHaveClass('inline-flex', 'h-10', 'items-center', 'rounded-lg', 'bg-nb-muted', 'p-1');
  });

  it('renders Tabs.Tab', () => {
    render(
      <Tabs.Root defaultValue="tab1">
        <Tabs.List>
          <Tabs.Tab data-testid="t" value="tab1">Tab 1</Tabs.Tab>
        </Tabs.List>
      </Tabs.Root>,
    );
    expect(screen.getByTestId('t')).toHaveTextContent('Tab 1');
  });

  it('Tabs.Tab is a button', () => {
    render(
      <Tabs.Root defaultValue="tab1">
        <Tabs.List>
          <Tabs.Tab data-testid="t" value="tab1">Tab 1</Tabs.Tab>
        </Tabs.List>
      </Tabs.Root>,
    );
    expect(screen.getByTestId('t').tagName).toBe('BUTTON');
  });

  it('Tabs.Tab applies default classes', () => {
    render(
      <Tabs.Root defaultValue="tab1">
        <Tabs.List>
          <Tabs.Tab data-testid="t" value="tab1">Tab 1</Tabs.Tab>
        </Tabs.List>
      </Tabs.Root>,
    );
    expect(screen.getByTestId('t')).toHaveClass('inline-flex', 'items-center', 'rounded-md', 'px-3', 'py-1.5', 'text-sm', 'font-medium');
  });

  it('renders Tabs.Panel', () => {
    render(
      <Tabs.Root defaultValue="tab1">
        <Tabs.List>
          <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel data-testid="p" value="tab1">Content 1</Tabs.Panel>
      </Tabs.Root>,
    );
    expect(screen.getByTestId('p')).toHaveTextContent('Content 1');
  });

  it('Tabs.Panel applies default classes', () => {
    render(
      <Tabs.Root defaultValue="tab1">
        <Tabs.List>
          <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel data-testid="p" value="tab1">Content 1</Tabs.Panel>
      </Tabs.Root>,
    );
    expect(screen.getByTestId('p')).toHaveClass('mt-2', 'rounded-md', 'p-4', 'text-sm');
  });

  it('switches tab on click', async () => {
    const user = userEvent.setup();
    render(
      <Tabs.Root defaultValue="tab1">
        <Tabs.List>
          <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
          <Tabs.Tab value="tab2">Tab 2</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="tab1">Content 1</Tabs.Panel>
        <Tabs.Panel value="tab2">Content 2</Tabs.Panel>
      </Tabs.Root>,
    );
    expect(screen.getByText('Content 1')).toBeInTheDocument();
    await user.click(screen.getByText('Tab 2'));
    expect(screen.getByText('Content 2')).toBeInTheDocument();
  });

  it('Tabs.Root combines custom className', () => {
    render(<Tabs.Root data-testid="r" className="my-custom" />);
    expect(screen.getByTestId('r')).toHaveClass('my-custom');
  });

  it('Tabs.Root forwards ref', () => {
    const ref = { current: null };
    render(<Tabs.Root ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it('has displayNames', () => {
    expect(Tabs.Root.displayName).toBe('Tabs.Root');
    expect(Tabs.List.displayName).toBe('Tabs.List');
    expect(Tabs.Tab.displayName).toBe('Tabs.Tab');
    expect(Tabs.Panel.displayName).toBe('Tabs.Panel');
  });
});
