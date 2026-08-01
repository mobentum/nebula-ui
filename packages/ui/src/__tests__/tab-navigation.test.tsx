import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TabNavigation } from '../components/tab-navigation';

describe('TabNavigation', () => {
  it('renders TabNavigation.Root', () => {
    render(<TabNavigation.Root data-testid="r" />);
    expect(screen.getByTestId('r')).toBeInTheDocument();
  });

  it('renders TabNavigation.List', () => {
    render(
      <TabNavigation.Root defaultValue="tab1">
        <TabNavigation.List data-testid="l" />
      </TabNavigation.Root>,
    );
    expect(screen.getByTestId('l')).toBeInTheDocument();
  });

  it('TabNavigation.List applies default classes', () => {
    render(
      <TabNavigation.Root defaultValue="tab1">
        <TabNavigation.List data-testid="l" />
      </TabNavigation.Root>,
    );
    expect(screen.getByTestId('l')).toHaveClass('inline-flex', 'h-10', 'items-center', 'border-b', 'border-nb-border');
  });

  it('renders TabNavigation.Tab', () => {
    render(
      <TabNavigation.Root defaultValue="tab1">
        <TabNavigation.List>
          <TabNavigation.Tab data-testid="t" value="tab1">Overview</TabNavigation.Tab>
        </TabNavigation.List>
      </TabNavigation.Root>,
    );
    const tab = screen.getByTestId('t');
    expect(tab.tagName).toBe('BUTTON');
    expect(tab).toHaveTextContent('Overview');
  });

  it('TabNavigation.Tab applies default classes', () => {
    render(
      <TabNavigation.Root defaultValue="tab1">
        <TabNavigation.List>
          <TabNavigation.Tab data-testid="t" value="tab1">Overview</TabNavigation.Tab>
        </TabNavigation.List>
      </TabNavigation.Root>,
    );
    expect(screen.getByTestId('t')).toHaveClass('inline-flex', 'items-center', 'px-4', 'py-2', 'text-sm', 'font-medium');
  });

  it('marks the selected tab as selected', () => {
    render(
      <TabNavigation.Root defaultValue="tab1">
        <TabNavigation.List>
          <TabNavigation.Tab data-testid="a" value="tab1">Overview</TabNavigation.Tab>
          <TabNavigation.Tab data-testid="b" value="tab2">Details</TabNavigation.Tab>
        </TabNavigation.List>
      </TabNavigation.Root>,
    );
    expect(screen.getByTestId('a')).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByTestId('b')).toHaveAttribute('aria-selected', 'false');
  });

  it('switches selection on click', async () => {
    const user = userEvent.setup();
    render(
      <TabNavigation.Root defaultValue="tab1">
        <TabNavigation.List>
          <TabNavigation.Tab data-testid="a" value="tab1">Overview</TabNavigation.Tab>
          <TabNavigation.Tab data-testid="b" value="tab2">Details</TabNavigation.Tab>
        </TabNavigation.List>
      </TabNavigation.Root>,
    );
    await user.click(screen.getByTestId('b'));
    expect(screen.getByTestId('a')).toHaveAttribute('aria-selected', 'false');
    expect(screen.getByTestId('b')).toHaveAttribute('aria-selected', 'true');
  });

  it('combines custom className', () => {
    render(
      <TabNavigation.Root>
        <TabNavigation.List data-testid="l" className="my-custom" />
      </TabNavigation.Root>,
    );
    expect(screen.getByTestId('l')).toHaveClass('my-custom');
  });

  it('has displayNames', () => {
    expect(TabNavigation.Root.displayName).toBe('TabNavigation.Root');
    expect(TabNavigation.List.displayName).toBe('TabNavigation.List');
    expect(TabNavigation.Tab.displayName).toBe('TabNavigation.Tab');
  });
});
