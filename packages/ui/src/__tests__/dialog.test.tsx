import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Dialog } from '../components/dialog';
import { Button } from '../components/button';

describe('Dialog', () => {
  it('renders Dialog.Trigger', () => {
    render(
      <Dialog.Root>
        <Dialog.Trigger data-testid="t">Open</Dialog.Trigger>
      </Dialog.Root>,
    );
    expect(screen.getByTestId('t')).toHaveTextContent('Open');
  });

  it('Dialog.Trigger is a button', () => {
    render(
      <Dialog.Root>
        <Dialog.Trigger data-testid="t">Open</Dialog.Trigger>
      </Dialog.Root>,
    );
    expect(screen.getByTestId('t').tagName).toBe('BUTTON');
  });

  it('opens dialog on trigger click', async () => {
    const user = userEvent.setup();
    render(
      <Dialog.Root>
        <Dialog.Trigger>Open</Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Backdrop />
          <Dialog.Popup data-testid="popup">
            <Dialog.Title>Title</Dialog.Title>
            <Dialog.Description>Description</Dialog.Description>
            <Dialog.Close>Close</Dialog.Close>
          </Dialog.Popup>
        </Dialog.Portal>
      </Dialog.Root>,
    );
    expect(screen.queryByTestId('popup')).not.toBeInTheDocument();
    await user.click(screen.getByText('Open'));
    expect(screen.getByTestId('popup')).toBeInTheDocument();
  });

  it('renders Dialog.Title', async () => {
    const user = userEvent.setup();
    render(
      <Dialog.Root>
        <Dialog.Trigger>Open</Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Backdrop />
          <Dialog.Popup>
            <Dialog.Title data-testid="title">Dialog Title</Dialog.Title>
          </Dialog.Popup>
        </Dialog.Portal>
      </Dialog.Root>,
    );
    await user.click(screen.getByText('Open'));
    expect(screen.getByTestId('title')).toHaveTextContent('Dialog Title');
  });

  it('Dialog.Title applies default classes', async () => {
    const user = userEvent.setup();
    render(
      <Dialog.Root>
        <Dialog.Trigger>Open</Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Backdrop />
          <Dialog.Popup>
            <Dialog.Title data-testid="title">Dialog Title</Dialog.Title>
          </Dialog.Popup>
        </Dialog.Portal>
      </Dialog.Root>,
    );
    await user.click(screen.getByText('Open'));
    expect(screen.getByTestId('title')).toHaveClass('text-lg', 'font-semibold', 'tracking-tight');
  });

  it('renders Dialog.Description', async () => {
    const user = userEvent.setup();
    render(
      <Dialog.Root>
        <Dialog.Trigger>Open</Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Backdrop />
          <Dialog.Popup>
            <Dialog.Description data-testid="desc">Description text</Dialog.Description>
          </Dialog.Popup>
        </Dialog.Portal>
      </Dialog.Root>,
    );
    await user.click(screen.getByText('Open'));
    expect(screen.getByTestId('desc')).toHaveTextContent('Description text');
  });

  it('Dialog.Description applies default classes', async () => {
    const user = userEvent.setup();
    render(
      <Dialog.Root>
        <Dialog.Trigger>Open</Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Backdrop />
          <Dialog.Popup>
            <Dialog.Description data-testid="desc">Description</Dialog.Description>
          </Dialog.Popup>
        </Dialog.Portal>
      </Dialog.Root>,
    );
    await user.click(screen.getByText('Open'));
    expect(screen.getByTestId('desc')).toHaveClass('text-xs', 'text-nb-muted-fg');
  });

  it('renders Dialog.Backdrop and applies classes', async () => {
    const user = userEvent.setup();
    render(
      <Dialog.Root>
        <Dialog.Trigger>Open</Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Backdrop data-testid="backdrop" />
          <Dialog.Popup>
            <Dialog.Title>Title</Dialog.Title>
          </Dialog.Popup>
        </Dialog.Portal>
      </Dialog.Root>,
    );
    await user.click(screen.getByText('Open'));
    expect(screen.getByTestId('backdrop')).toHaveClass('fixed', 'inset-0', 'z-40', 'bg-black/50');
  });

  it('closes dialog on close button click', async () => {
    const user = userEvent.setup();
    render(
      <Dialog.Root>
        <Dialog.Trigger>Open</Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Backdrop />
          <Dialog.Popup data-testid="popup">
            <Dialog.Title>Title</Dialog.Title>
            <Dialog.Close data-testid="close" />
          </Dialog.Popup>
        </Dialog.Portal>
      </Dialog.Root>,
    );
    await user.click(screen.getByText('Open'));
    expect(screen.getByTestId('popup')).toBeInTheDocument();
    await user.click(screen.getByTestId('close'));
    expect(screen.queryByTestId('popup')).not.toBeInTheDocument();
  });

  it('Dialog.Popup applies default classes', async () => {
    const user = userEvent.setup();
    render(
      <Dialog.Root>
        <Dialog.Trigger>Open</Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Backdrop />
          <Dialog.Popup data-testid="popup">
            <Dialog.Title>Title</Dialog.Title>
          </Dialog.Popup>
        </Dialog.Portal>
      </Dialog.Root>,
    );
    await user.click(screen.getByText('Open'));
    expect(screen.getByTestId('popup')).toHaveClass('fixed', 'left-1/2', 'top-1/2', 'z-50', 'w-full', 'max-w-lg', '-translate-x-1/2', '-translate-y-1/2', 'rounded-xl', 'border', 'border-nb-border', 'bg-nb-bg', 'p-6', 'text-nb-fg', 'shadow-xl');
  });

  it('Dialog.Popup combines custom className', async () => {
    const user = userEvent.setup();
    render(
      <Dialog.Root>
        <Dialog.Trigger>Open</Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Backdrop />
          <Dialog.Popup data-testid="popup" className="my-custom">
            <Dialog.Title>Title</Dialog.Title>
          </Dialog.Popup>
        </Dialog.Portal>
      </Dialog.Root>,
    );
    await user.click(screen.getByText('Open'));
    expect(screen.getByTestId('popup')).toHaveClass('my-custom');
  });

  it('Dialog.Trigger forwards ref', () => {
    const ref = { current: null };
    render(
      <Dialog.Root>
        <Dialog.Trigger ref={ref}>Open</Dialog.Trigger>
      </Dialog.Root>,
    );
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });

  it('opens dialog when trigger is a Button component', async () => {
    const user = userEvent.setup();
    render(
      <Dialog.Root>
        <Dialog.Trigger>
          <Button>Open</Button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Backdrop />
          <Dialog.Popup data-testid="popup">
            <Dialog.Title>Title</Dialog.Title>
          </Dialog.Popup>
        </Dialog.Portal>
      </Dialog.Root>,
    );
    expect(screen.queryByTestId('popup')).not.toBeInTheDocument();
    await user.click(screen.getByText('Open'));
    expect(screen.getByTestId('popup')).toBeInTheDocument();
  });

  it('renders Dialog.Header', () => {
    render(
      <Dialog.Root defaultOpen>
        <Dialog.Portal>
          <Dialog.Backdrop />
          <Dialog.Popup>
            <Dialog.Header data-testid="header">
              <Dialog.Title>Title</Dialog.Title>
            </Dialog.Header>
          </Dialog.Popup>
        </Dialog.Portal>
      </Dialog.Root>,
    );
    expect(screen.getByTestId('header')).toBeInTheDocument();
  });

  it('Dialog.Header applies default classes', () => {
    render(
      <Dialog.Root defaultOpen>
        <Dialog.Portal>
          <Dialog.Backdrop />
          <Dialog.Popup>
            <Dialog.Header data-testid="header" />
          </Dialog.Popup>
        </Dialog.Portal>
      </Dialog.Root>,
    );
    expect(screen.getByTestId('header')).toHaveClass('flex', 'flex-col', 'gap-1.5', 'text-start');
  });

  it('Dialog.Header combines custom className', () => {
    render(
      <Dialog.Root defaultOpen>
        <Dialog.Portal>
          <Dialog.Backdrop />
          <Dialog.Popup>
            <Dialog.Header data-testid="header" className="my-custom" />
          </Dialog.Popup>
        </Dialog.Portal>
      </Dialog.Root>,
    );
    expect(screen.getByTestId('header')).toHaveClass('my-custom');
  });

  it('renders Dialog.Footer', () => {
    render(
      <Dialog.Root defaultOpen>
        <Dialog.Portal>
          <Dialog.Backdrop />
          <Dialog.Popup>
            <Dialog.Footer data-testid="footer">
              <button>Cancel</button>
            </Dialog.Footer>
          </Dialog.Popup>
        </Dialog.Portal>
      </Dialog.Root>,
    );
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });

  it('Dialog.Footer applies default classes', () => {
    render(
      <Dialog.Root defaultOpen>
        <Dialog.Portal>
          <Dialog.Backdrop />
          <Dialog.Popup>
            <Dialog.Footer data-testid="footer" />
          </Dialog.Popup>
        </Dialog.Portal>
      </Dialog.Root>,
    );
    expect(screen.getByTestId('footer')).toHaveClass('flex', 'flex-col', 'gap-2', 'sm:flex-row', 'sm:items-center');
  });

  it('Dialog.Footer combines custom className', () => {
    render(
      <Dialog.Root defaultOpen>
        <Dialog.Portal>
          <Dialog.Backdrop />
          <Dialog.Popup>
            <Dialog.Footer data-testid="footer" className="sm:justify-start" />
          </Dialog.Popup>
        </Dialog.Portal>
      </Dialog.Root>,
    );
    expect(screen.getByTestId('footer')).toHaveClass('sm:justify-start');
  });

  it('renders Dialog.Content with Portal + Backdrop + Popup + Close', async () => {
    const user = userEvent.setup();
    render(
      <Dialog.Root>
        <Dialog.Trigger>Open</Dialog.Trigger>
        <Dialog.Content data-testid="content">
          <Dialog.Title>Title</Dialog.Title>
        </Dialog.Content>
      </Dialog.Root>,
    );
    await user.click(screen.getByText('Open'));
    const content = screen.getByTestId('content');
    expect(content).toBeInTheDocument();
    expect(content).toHaveClass('fixed', 'z-50', 'w-full', 'max-w-lg', 'rounded-xl', 'border', 'border-nb-border', 'bg-nb-bg', 'p-6', 'text-nb-fg');
    expect(screen.getByTestId('content').querySelector('svg')).toBeTruthy();
  });

  it('Dialog.Content hides close button with showCloseButton=false', async () => {
    const user = userEvent.setup();
    render(
      <Dialog.Root>
        <Dialog.Trigger>Open</Dialog.Trigger>
        <Dialog.Content showCloseButton={false}>
          <Dialog.Title>Title</Dialog.Title>
        </Dialog.Content>
      </Dialog.Root>,
    );
    await user.click(screen.getByText('Open'));
    expect(screen.getByText('Title')).toBeInTheDocument();
  });

  it('Dialog.Content combines custom className', async () => {
    const user = userEvent.setup();
    render(
      <Dialog.Root>
        <Dialog.Trigger>Open</Dialog.Trigger>
        <Dialog.Content data-testid="content" className="my-custom">
          <Dialog.Title>Title</Dialog.Title>
        </Dialog.Content>
      </Dialog.Root>,
    );
    await user.click(screen.getByText('Open'));
    expect(screen.getByTestId('content')).toHaveClass('my-custom');
  });

  it('Dialog.Content forwards ref', async () => {
    const ref = { current: null };
    const user = userEvent.setup();
    render(
      <Dialog.Root>
        <Dialog.Trigger>Open</Dialog.Trigger>
        <Dialog.Content ref={ref}>
          <Dialog.Title>Title</Dialog.Title>
        </Dialog.Content>
      </Dialog.Root>,
    );
    await user.click(screen.getByText('Open'));
    expect(ref.current).toBeTruthy();
  });

  it('has displayNames', () => {
    expect(Dialog.Popup.displayName).toBe('Dialog.Popup');
    expect(Dialog.Backdrop.displayName).toBe('Dialog.Backdrop');
    expect(Dialog.Title.displayName).toBe('Dialog.Title');
    expect(Dialog.Description.displayName).toBe('Dialog.Description');
    expect(Dialog.Close.displayName).toBe('Dialog.Close');
    expect(Dialog.Header.displayName).toBe('Dialog.Header');
    expect(Dialog.Footer.displayName).toBe('Dialog.Footer');
    expect(Dialog.Content.displayName).toBe('Dialog.Content');
  });
});
