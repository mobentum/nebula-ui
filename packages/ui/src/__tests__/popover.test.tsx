import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Popover } from '../components/popover';

describe('Popover', () => {
  it('renders Popover.Trigger', () => {
    render(
      <Popover.Root>
        <Popover.Trigger data-testid="t">Open</Popover.Trigger>
      </Popover.Root>,
    );
    expect(screen.getByTestId('t')).toHaveTextContent('Open');
  });

  it('Popover.Trigger is a button', () => {
    render(
      <Popover.Root>
        <Popover.Trigger data-testid="t">Open</Popover.Trigger>
      </Popover.Root>,
    );
    expect(screen.getByTestId('t').tagName).toBe('BUTTON');
  });

  it('opens popover on trigger click', async () => {
    const user = userEvent.setup();
    render(
      <Popover.Root>
        <Popover.Trigger>Open</Popover.Trigger>
        <Popover.Portal>
          <Popover.Positioner>
            <Popover.Popup data-testid="popup">
              <Popover.Title>Title</Popover.Title>
              <Popover.Description>Description</Popover.Description>
            </Popover.Popup>
          </Popover.Positioner>
        </Popover.Portal>
      </Popover.Root>,
    );
    await user.click(screen.getByText('Open'));
    expect(screen.getByTestId('popup')).toBeInTheDocument();
  });

  it('renders Popover.Title', async () => {
    const user = userEvent.setup();
    render(
      <Popover.Root>
        <Popover.Trigger>Open</Popover.Trigger>
        <Popover.Portal>
          <Popover.Positioner>
            <Popover.Popup>
              <Popover.Title data-testid="title">Popover Title</Popover.Title>
            </Popover.Popup>
          </Popover.Positioner>
        </Popover.Portal>
      </Popover.Root>,
    );
    await user.click(screen.getByText('Open'));
    expect(screen.getByTestId('title')).toHaveTextContent('Popover Title');
  });

  it('Popover.Title applies default classes', async () => {
    const user = userEvent.setup();
    render(
      <Popover.Root>
        <Popover.Trigger>Open</Popover.Trigger>
        <Popover.Portal>
          <Popover.Positioner>
            <Popover.Popup>
              <Popover.Title data-testid="title">Title</Popover.Title>
            </Popover.Popup>
          </Popover.Positioner>
        </Popover.Portal>
      </Popover.Root>,
    );
    await user.click(screen.getByText('Open'));
    expect(screen.getByTestId('title')).toHaveClass('text-base', 'font-semibold');
  });

  it('renders Popover.Description', async () => {
    const user = userEvent.setup();
    render(
      <Popover.Root>
        <Popover.Trigger>Open</Popover.Trigger>
        <Popover.Portal>
          <Popover.Positioner>
            <Popover.Popup>
              <Popover.Description data-testid="desc">Description text</Popover.Description>
            </Popover.Popup>
          </Popover.Positioner>
        </Popover.Portal>
      </Popover.Root>,
    );
    await user.click(screen.getByText('Open'));
    expect(screen.getByTestId('desc')).toHaveTextContent('Description text');
  });

  it('Popover.Description applies default classes', async () => {
    const user = userEvent.setup();
    render(
      <Popover.Root>
        <Popover.Trigger>Open</Popover.Trigger>
        <Popover.Portal>
          <Popover.Positioner>
            <Popover.Popup>
              <Popover.Description data-testid="desc">Description</Popover.Description>
            </Popover.Popup>
          </Popover.Positioner>
        </Popover.Portal>
      </Popover.Root>,
    );
    await user.click(screen.getByText('Open'));
    expect(screen.getByTestId('desc')).toHaveClass('text-xs', 'text-nb-muted-fg');
  });

  it('renders Popover.Arrow', async () => {
    const user = userEvent.setup();
    render(
      <Popover.Root>
        <Popover.Trigger>Open</Popover.Trigger>
        <Popover.Portal>
          <Popover.Positioner>
            <Popover.Popup>
              <Popover.Arrow data-testid="arrow" />
            </Popover.Popup>
          </Popover.Positioner>
        </Popover.Portal>
      </Popover.Root>,
    );
    await user.click(screen.getByText('Open'));
    expect(screen.getByTestId('arrow')).toBeInTheDocument();
  });

  it('renders Popover.Close and closes on click', async () => {
    const user = userEvent.setup();
    render(
      <Popover.Root>
        <Popover.Trigger>Open</Popover.Trigger>
        <Popover.Portal>
          <Popover.Positioner>
            <Popover.Popup data-testid="popup">
              <Popover.Title>Title</Popover.Title>
              <Popover.Close data-testid="close" />
            </Popover.Popup>
          </Popover.Positioner>
        </Popover.Portal>
      </Popover.Root>,
    );
    await user.click(screen.getByText('Open'));
    expect(screen.getByTestId('popup')).toBeInTheDocument();
    await user.click(screen.getByTestId('close'));
    expect(screen.queryByTestId('popup')).not.toBeInTheDocument();
  });

  it('Popover.Popup applies default classes', async () => {
    const user = userEvent.setup();
    render(
      <Popover.Root>
        <Popover.Trigger>Open</Popover.Trigger>
        <Popover.Portal>
          <Popover.Positioner>
            <Popover.Popup data-testid="popup">
              <Popover.Title>Title</Popover.Title>
            </Popover.Popup>
          </Popover.Positioner>
        </Popover.Portal>
      </Popover.Root>,
    );
    await user.click(screen.getByText('Open'));
    expect(screen.getByTestId('popup')).toHaveClass('z-[60]', 'w-72', 'rounded-md', 'border', 'border-nb-border', 'bg-nb-popover', 'text-nb-popover-fg', 'p-4', 'shadow-lg');
  });

  it('Popover.Popup combines custom className', async () => {
    const user = userEvent.setup();
    render(
      <Popover.Root>
        <Popover.Trigger>Open</Popover.Trigger>
        <Popover.Portal>
          <Popover.Positioner>
            <Popover.Popup data-testid="popup" className="my-custom">
              <Popover.Title>Title</Popover.Title>
            </Popover.Popup>
          </Popover.Positioner>
        </Popover.Portal>
      </Popover.Root>,
    );
    await user.click(screen.getByText('Open'));
    expect(screen.getByTestId('popup')).toHaveClass('my-custom');
  });

  it('has displayNames', () => {
    expect(Popover.Popup.displayName).toBe('Popover.Popup');
    expect(Popover.Title.displayName).toBe('Popover.Title');
    expect(Popover.Description.displayName).toBe('Popover.Description');
    expect(Popover.Close.displayName).toBe('Popover.Close');
    expect(Popover.Arrow.displayName).toBe('Popover.Arrow');
    expect(Popover.Positioner.displayName).toBe('Popover.Positioner');
    expect(Popover.Portal.displayName).toBe('Popover.Portal');
  });
});
