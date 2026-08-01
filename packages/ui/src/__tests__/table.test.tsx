import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Table } from '../components/table';

describe('Table', () => {
  it('renders Table.Root', () => {
    render(<Table.Root data-testid="t" />);
    expect(screen.getByTestId('t')).toBeInTheDocument();
  });

  it('Table.Root renders as table', () => {
    render(<Table.Root data-testid="t" />);
    expect(screen.getByTestId('t').tagName).toBe('TABLE');
  });

  it('renders Table.Header', () => {
    render(
      <Table.Root>
        <Table.Header data-testid="h" />
      </Table.Root>,
    );
    expect(screen.getByTestId('h')).toBeInTheDocument();
  });

  it('renders Table.Body', () => {
    render(
      <Table.Root>
        <Table.Body data-testid="b" />
      </Table.Root>,
    );
    expect(screen.getByTestId('b')).toBeInTheDocument();
  });

  it('renders Table.Row', () => {
    render(
      <Table.Root>
        <Table.Body>
          <Table.Row data-testid="r" />
        </Table.Body>
      </Table.Root>,
    );
    expect(screen.getByTestId('r')).toBeInTheDocument();
  });

  it('renders Table.Head', () => {
    render(
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.Head data-testid="h">Name</Table.Head>
          </Table.Row>
        </Table.Header>
      </Table.Root>,
    );
    expect(screen.getByTestId('h')).toHaveTextContent('Name');
  });

  it('Table.Head applies default classes', () => {
    render(
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.Head data-testid="h">Name</Table.Head>
          </Table.Row>
        </Table.Header>
      </Table.Root>,
    );
    expect(screen.getByTestId('h')).toHaveClass('h-12', 'px-4', 'text-left', 'font-medium');
  });

  it('renders Table.Cell', () => {
    render(
      <Table.Root>
        <Table.Body>
          <Table.Row>
            <Table.Cell data-testid="c">Value</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>,
    );
    expect(screen.getByTestId('c')).toHaveTextContent('Value');
  });

  it('Table.Cell applies default classes', () => {
    render(
      <Table.Root>
        <Table.Body>
          <Table.Row>
            <Table.Cell data-testid="c">Value</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>,
    );
    expect(screen.getByTestId('c')).toHaveClass('p-4', 'align-middle');
  });

  it('renders Table.Caption', () => {
    render(
      <Table.Root>
        <Table.Caption data-testid="c">Caption</Table.Caption>
      </Table.Root>,
    );
    expect(screen.getByTestId('c')).toHaveTextContent('Caption');
  });

  it('combines custom className', () => {
    render(<Table.Root data-testid="t" className="my-custom" />);
    expect(screen.getByTestId('t')).toHaveClass('my-custom');
  });

  it('forwards ref to Root', () => {
    const ref = { current: null };
    render(<Table.Root ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLTableElement);
  });

  it('has displayNames', () => {
    expect(Table.Root.displayName).toBe('Table.Root');
    expect(Table.Header.displayName).toBe('Table.Header');
    expect(Table.Body.displayName).toBe('Table.Body');
    expect(Table.Row.displayName).toBe('Table.Row');
    expect(Table.Head.displayName).toBe('Table.Head');
    expect(Table.Cell.displayName).toBe('Table.Cell');
    expect(Table.Caption.displayName).toBe('Table.Caption');
  });
});
