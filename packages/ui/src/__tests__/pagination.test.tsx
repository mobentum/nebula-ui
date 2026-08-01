import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Pagination } from '../components/pagination';

describe('Pagination', () => {
  it('renders Pagination.Root', () => {
    render(<Pagination.Root data-testid="r" />);
    expect(screen.getByTestId('r')).toBeInTheDocument();
  });

  it('Pagination.Root is a nav', () => {
    render(<Pagination.Root data-testid="r" />);
    expect(screen.getByTestId('r').tagName).toBe('NAV');
  });

  it('renders Pagination.List', () => {
    render(
      <Pagination.Root>
        <Pagination.List data-testid="l" />
      </Pagination.Root>,
    );
    expect(screen.getByTestId('l')).toBeInTheDocument();
  });

  it('renders Pagination.Item', () => {
    render(
      <Pagination.Root>
        <Pagination.List>
          <Pagination.Item data-testid="i" />
        </Pagination.List>
      </Pagination.Root>,
    );
    expect(screen.getByTestId('i')).toBeInTheDocument();
  });

  it('renders Pagination.Previous', () => {
    render(
      <Pagination.Root>
        <Pagination.List>
          <Pagination.Item>
            <Pagination.Previous data-testid="p">Previous</Pagination.Previous>
          </Pagination.Item>
        </Pagination.List>
      </Pagination.Root>,
    );
    expect(screen.getByTestId('p')).toHaveTextContent('Previous');
  });

  it('renders Pagination.Next', () => {
    render(
      <Pagination.Root>
        <Pagination.List>
          <Pagination.Item>
            <Pagination.Next data-testid="n">Next</Pagination.Next>
          </Pagination.Item>
        </Pagination.List>
      </Pagination.Root>,
    );
    expect(screen.getByTestId('n')).toHaveTextContent('Next');
  });

  it('renders Pagination.Page', () => {
    render(
      <Pagination.Root>
        <Pagination.List>
          <Pagination.Item>
            <Pagination.Page data-testid="p">1</Pagination.Page>
          </Pagination.Item>
        </Pagination.List>
      </Pagination.Root>,
    );
    expect(screen.getByTestId('p')).toHaveTextContent('1');
  });

  it('Pagination.Page as aria-current page', () => {
    render(
      <Pagination.Root>
        <Pagination.List>
          <Pagination.Item>
            <Pagination.Page data-testid="p" aria-current="page">1</Pagination.Page>
          </Pagination.Item>
        </Pagination.List>
      </Pagination.Root>,
    );
    expect(screen.getByTestId('p')).toHaveAttribute('aria-current', 'page');
  });

  it('renders Pagination.Ellipsis', () => {
    render(
      <Pagination.Root>
        <Pagination.List>
          <Pagination.Item>
            <Pagination.Ellipsis data-testid="e" />
          </Pagination.Item>
        </Pagination.List>
      </Pagination.Root>,
    );
    expect(screen.getByTestId('e')).toHaveTextContent('...');
  });

  it('combines custom className', () => {
    render(<Pagination.Root data-testid="r" className="my-custom" />);
    expect(screen.getByTestId('r')).toHaveClass('my-custom');
  });

  it('has displayNames', () => {
    expect(Pagination.Root.displayName).toBe('Pagination.Root');
    expect(Pagination.List.displayName).toBe('Pagination.List');
    expect(Pagination.Item.displayName).toBe('Pagination.Item');
    expect(Pagination.Previous.displayName).toBe('Pagination.Previous');
    expect(Pagination.Next.displayName).toBe('Pagination.Next');
    expect(Pagination.Page.displayName).toBe('Pagination.Page');
    expect(Pagination.Ellipsis.displayName).toBe('Pagination.Ellipsis');
  });
});
