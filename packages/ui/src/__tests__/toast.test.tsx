import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Toast } from '../components/toast';

describe('Toast', () => {
  it('renders Toast.Viewport', () => {
    render(
      <Toast.Provider>
        <Toast.Viewport data-testid="v" />
      </Toast.Provider>,
    );
    expect(screen.getByTestId('v')).toBeInTheDocument();
  });

  it('Toast.Viewport applies default classes', () => {
    render(
      <Toast.Provider>
        <Toast.Viewport data-testid="v" />
      </Toast.Provider>,
    );
    expect(screen.getByTestId('v')).toHaveClass('fixed', 'bottom-4', 'end-4', 'z-50', 'max-w-sm');
  });

  it('Toast.Viewport combines custom className', () => {
    render(
      <Toast.Provider>
        <Toast.Viewport data-testid="v" className="my-custom" />
      </Toast.Provider>,
    );
    expect(screen.getByTestId('v')).toHaveClass('my-custom');
  });

  it('Toast.Viewport forwards ref', () => {
    const ref = { current: null };
    render(
      <Toast.Provider>
        <Toast.Viewport ref={ref} />
      </Toast.Provider>,
    );
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it('has displayNames', () => {
    expect(Toast.Root.displayName).toBe('Toast.Root');
    expect(Toast.Title.displayName).toBe('Toast.Title');
    expect(Toast.Description.displayName).toBe('Toast.Description');
    expect(Toast.Close.displayName).toBe('Toast.Close');
    expect(Toast.Viewport.displayName).toBe('Toast.Viewport');
  });
});
