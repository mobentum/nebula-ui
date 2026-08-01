import { describe, it, expect, beforeAll } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Drawer } from '../components/drawer';

beforeAll(() => {
  globalThis.PointerEvent = MouseEvent as any;
});

describe('Drawer', () => {
  it('renders Drawer.Trigger', () => {
    render(
      <Drawer.Root>
        <Drawer.Trigger data-testid="t">Open</Drawer.Trigger>
      </Drawer.Root>,
    );
    expect(screen.getByTestId('t')).toHaveTextContent('Open');
  });

  it('Drawer.Trigger is a button', () => {
    render(
      <Drawer.Root>
        <Drawer.Trigger data-testid="t">Open</Drawer.Trigger>
      </Drawer.Root>,
    );
    expect(screen.getByTestId('t').tagName).toBe('BUTTON');
  });

  it('renders Drawer.Title', () => {
    render(
      <Drawer.Root defaultOpen>
        <Drawer.Panel>
          <Drawer.Title data-testid="title">Drawer Title</Drawer.Title>
        </Drawer.Panel>
      </Drawer.Root>,
    );
    expect(screen.getByTestId('title')).toHaveTextContent('Drawer Title');
  });

  it('Drawer.Title applies default classes', () => {
    render(
      <Drawer.Root defaultOpen>
        <Drawer.Panel>
          <Drawer.Title data-testid="title">Title</Drawer.Title>
        </Drawer.Panel>
      </Drawer.Root>,
    );
    expect(screen.getByTestId('title')).toHaveClass('text-lg', 'font-semibold', 'tracking-tight');
  });

  it('renders Drawer.Description', () => {
    render(
      <Drawer.Root defaultOpen>
        <Drawer.Panel>
          <Drawer.Description data-testid="desc">Description</Drawer.Description>
        </Drawer.Panel>
      </Drawer.Root>,
    );
    expect(screen.getByTestId('desc')).toHaveTextContent('Description');
  });

  it('Drawer.Description applies default classes', () => {
    render(
      <Drawer.Root defaultOpen>
        <Drawer.Panel>
          <Drawer.Description data-testid="desc">Description</Drawer.Description>
        </Drawer.Panel>
      </Drawer.Root>,
    );
    expect(screen.getByTestId('desc')).toHaveClass('text-sm', 'text-nb-muted-fg');
  });

  it('renders Drawer.Backdrop', () => {
    render(
      <Drawer.Root defaultOpen>
        <Drawer.Backdrop data-testid="backdrop" />
        <Drawer.Panel>
          <Drawer.Title>Title</Drawer.Title>
        </Drawer.Panel>
      </Drawer.Root>,
    );
    expect(screen.getByTestId('backdrop')).toHaveClass('fixed', 'inset-0', 'z-40', 'bg-black/50');
  });

  it('Drawer.Panel applies default classes', () => {
    render(
      <Drawer.Root defaultOpen>
        <Drawer.Panel data-testid="panel">
          <Drawer.Title>Title</Drawer.Title>
        </Drawer.Panel>
      </Drawer.Root>,
    );
    expect(screen.getByTestId('panel')).toHaveClass('fixed', 'inset-y-0', 'end-0', 'z-50', 'w-full', 'max-w-md', 'border-s', 'bg-nb-bg', 'p-6', 'shadow-xl');
  });

  it('Drawer.Panel combines custom className', () => {
    render(
      <Drawer.Root defaultOpen>
        <Drawer.Panel data-testid="panel" className="my-custom">
          <Drawer.Title>Title</Drawer.Title>
        </Drawer.Panel>
      </Drawer.Root>,
    );
    expect(screen.getByTestId('panel')).toHaveClass('my-custom');
  });

  it('opens drawer on trigger click', async () => {
    const user = userEvent.setup();
    render(
      <Drawer.Root>
        <Drawer.Trigger>Open</Drawer.Trigger>
        <Drawer.Backdrop />
        <Drawer.Panel data-testid="panel">
          <Drawer.Title>Title</Drawer.Title>
          <Drawer.Close data-testid="close" />
        </Drawer.Panel>
      </Drawer.Root>,
    );
    await user.click(screen.getByText('Open'));
    expect(screen.getByTestId('panel')).toBeInTheDocument();
  });

  it('has displayNames', () => {
    expect(Drawer.Backdrop.displayName).toBe('Drawer.Backdrop');
    expect(Drawer.Panel.displayName).toBe('Drawer.Panel');
    expect(Drawer.Title.displayName).toBe('Drawer.Title');
    expect(Drawer.Description.displayName).toBe('Drawer.Description');
    expect(Drawer.Close.displayName).toBe('Drawer.Close');
  });
});
