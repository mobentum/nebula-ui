import { describe, it, expect, beforeAll } from 'vitest';
import { render, screen } from '@testing-library/react';
import { AlertDialog } from '../components/alert-dialog';

beforeAll(() => {
  globalThis.PointerEvent = MouseEvent as any;
});

describe('AlertDialog', () => {
  it('renders AlertDialog.Trigger', () => {
    render(
      <AlertDialog.Root>
        <AlertDialog.Trigger data-testid="t">Delete</AlertDialog.Trigger>
      </AlertDialog.Root>,
    );
    expect(screen.getByTestId('t')).toHaveTextContent('Delete');
  });

  it('renders AlertDialog.Title', () => {
    render(
      <AlertDialog.Root defaultOpen>
        <AlertDialog.Portal>
          <AlertDialog.Backdrop />
          <AlertDialog.Popup>
            <AlertDialog.Title data-testid="t">Are you sure?</AlertDialog.Title>
          </AlertDialog.Popup>
        </AlertDialog.Portal>
      </AlertDialog.Root>,
    );
    expect(screen.getByTestId('t')).toHaveTextContent('Are you sure?');
  });

  it('renders AlertDialog.Description', () => {
    render(
      <AlertDialog.Root defaultOpen>
        <AlertDialog.Portal>
          <AlertDialog.Backdrop />
          <AlertDialog.Popup>
            <AlertDialog.Description data-testid="d">This action cannot be undone.</AlertDialog.Description>
          </AlertDialog.Popup>
        </AlertDialog.Portal>
      </AlertDialog.Root>,
    );
    expect(screen.getByTestId('d')).toHaveTextContent('This action cannot be undone.');
  });

  it('renders AlertDialog.Cancel', () => {
    render(
      <AlertDialog.Root defaultOpen>
        <AlertDialog.Portal>
          <AlertDialog.Backdrop />
          <AlertDialog.Popup>
            <AlertDialog.Cancel data-testid="c">Cancel</AlertDialog.Cancel>
          </AlertDialog.Popup>
        </AlertDialog.Portal>
      </AlertDialog.Root>,
    );
    expect(screen.getByTestId('c')).toHaveTextContent('Cancel');
  });

  it('AlertDialog.Title applies default classes', () => {
    render(
      <AlertDialog.Root defaultOpen>
        <AlertDialog.Portal>
          <AlertDialog.Backdrop />
          <AlertDialog.Popup>
            <AlertDialog.Title data-testid="t">Title</AlertDialog.Title>
          </AlertDialog.Popup>
        </AlertDialog.Portal>
      </AlertDialog.Root>,
    );
    expect(screen.getByTestId('t')).toHaveClass('text-lg', 'font-semibold', 'tracking-tight');
  });

  it('AlertDialog.Popup applies default classes', () => {
    render(
      <AlertDialog.Root defaultOpen>
        <AlertDialog.Portal>
          <AlertDialog.Backdrop />
          <AlertDialog.Popup data-testid="p">
            <AlertDialog.Title>Title</AlertDialog.Title>
          </AlertDialog.Popup>
        </AlertDialog.Portal>
      </AlertDialog.Root>,
    );
    expect(screen.getByTestId('p')).toHaveClass('fixed', 'left-1/2', 'top-1/2', 'z-50', 'w-full', 'max-w-lg', '-translate-x-1/2', '-translate-y-1/2', 'rounded-xl', 'border', 'border-nb-border', 'bg-nb-bg', 'p-6', 'text-nb-fg', 'shadow-xl');
  });

  it('has displayNames', () => {
    expect(AlertDialog.Backdrop.displayName).toBe('AlertDialog.Backdrop');
    expect(AlertDialog.Popup.displayName).toBe('AlertDialog.Popup');
    expect(AlertDialog.Title.displayName).toBe('AlertDialog.Title');
    expect(AlertDialog.Description.displayName).toBe('AlertDialog.Description');
    expect(AlertDialog.Close.displayName).toBe('AlertDialog.Close');
    expect(AlertDialog.Cancel.displayName).toBe('AlertDialog.Cancel');
  });
});
