import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Breadcrumb } from '../components/breadcrumb';

describe('Breadcrumb', () => {
  it('renders Breadcrumb.Root', () => {
    render(<Breadcrumb.Root data-testid="r" />);
    expect(screen.getByTestId('r')).toBeInTheDocument();
  });

  it('Breadcrumb.Root is a nav', () => {
    render(<Breadcrumb.Root data-testid="r" />);
    expect(screen.getByTestId('r').tagName).toBe('NAV');
  });

  it('Breadcrumb.Root has aria-label', () => {
    render(<Breadcrumb.Root data-testid="r" />);
    expect(screen.getByTestId('r')).toHaveAttribute('aria-label', 'breadcrumb');
  });

  it('renders Breadcrumb.List', () => {
    render(
      <Breadcrumb.Root>
        <Breadcrumb.List data-testid="l" />
      </Breadcrumb.Root>,
    );
    expect(screen.getByTestId('l')).toBeInTheDocument();
  });

  it('Breadcrumb.List applies default classes', () => {
    render(
      <Breadcrumb.Root>
        <Breadcrumb.List data-testid="l" />
      </Breadcrumb.Root>,
    );
    expect(screen.getByTestId('l')).toHaveClass('flex', 'flex-wrap', 'items-center', 'gap-1.5');
  });

  it('renders Breadcrumb.Item', () => {
    render(
      <Breadcrumb.Root>
        <Breadcrumb.List>
          <Breadcrumb.Item data-testid="i" />
        </Breadcrumb.List>
      </Breadcrumb.Root>,
    );
    expect(screen.getByTestId('i')).toBeInTheDocument();
  });

  it('renders Breadcrumb.Link', () => {
    render(
      <Breadcrumb.Root>
        <Breadcrumb.List>
          <Breadcrumb.Item>
            <Breadcrumb.Link data-testid="l" href="/">Home</Breadcrumb.Link>
          </Breadcrumb.Item>
        </Breadcrumb.List>
      </Breadcrumb.Root>,
    );
    expect(screen.getByTestId('l')).toHaveAttribute('href', '/');
    expect(screen.getByTestId('l')).toHaveTextContent('Home');
  });

  it('renders Breadcrumb.Separator with default content', () => {
    render(
      <Breadcrumb.Root>
        <Breadcrumb.List>
          <Breadcrumb.Item>
            <Breadcrumb.Link href="/">Home</Breadcrumb.Link>
            <Breadcrumb.Separator data-testid="s" />
          </Breadcrumb.Item>
        </Breadcrumb.List>
      </Breadcrumb.Root>,
    );
    expect(screen.getByTestId('s')).toHaveTextContent('/');
  });

  it('Breadcrumb.Separator has aria-hidden', () => {
    render(
      <Breadcrumb.Root>
        <Breadcrumb.List>
          <Breadcrumb.Item>
            <Breadcrumb.Separator data-testid="s" />
          </Breadcrumb.Item>
        </Breadcrumb.List>
      </Breadcrumb.Root>,
    );
    expect(screen.getByTestId('s')).toHaveAttribute('aria-hidden', 'true');
  });

  it('renders Breadcrumb.Page as current page', () => {
    render(
      <Breadcrumb.Root>
        <Breadcrumb.List>
          <Breadcrumb.Item>
            <Breadcrumb.Page data-testid="p">Current</Breadcrumb.Page>
          </Breadcrumb.Item>
        </Breadcrumb.List>
      </Breadcrumb.Root>,
    );
    expect(screen.getByTestId('p')).toHaveAttribute('aria-current', 'page');
  });

  it('Breadcrumb.Page applies default classes', () => {
    render(
      <Breadcrumb.Root>
        <Breadcrumb.List>
          <Breadcrumb.Item>
            <Breadcrumb.Page data-testid="p">Current</Breadcrumb.Page>
          </Breadcrumb.Item>
        </Breadcrumb.List>
      </Breadcrumb.Root>,
    );
    expect(screen.getByTestId('p')).toHaveClass('font-medium', 'text-nb-fg');
  });

  it('combines custom className', () => {
    render(<Breadcrumb.Root data-testid="r" className="my-custom" />);
    expect(screen.getByTestId('r')).toHaveClass('my-custom');
  });

  it('has displayNames', () => {
    expect(Breadcrumb.Root.displayName).toBe('Breadcrumb.Root');
    expect(Breadcrumb.List.displayName).toBe('Breadcrumb.List');
    expect(Breadcrumb.Item.displayName).toBe('Breadcrumb.Item');
    expect(Breadcrumb.Link.displayName).toBe('Breadcrumb.Link');
    expect(Breadcrumb.Separator.displayName).toBe('Breadcrumb.Separator');
    expect(Breadcrumb.Page.displayName).toBe('Breadcrumb.Page');
  });
});
