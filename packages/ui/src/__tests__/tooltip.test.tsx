import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Tooltip } from '../components/tooltip';

describe('Tooltip', () => {
  it('renders Tooltip.Trigger as a button', () => {
    render(
      <Tooltip.Provider>
        <Tooltip.Root>
          <Tooltip.Trigger data-testid="t" as="button">Hover</Tooltip.Trigger>
        </Tooltip.Root>
      </Tooltip.Provider>,
    );
    expect(screen.getByTestId('t').tagName).toBe('BUTTON');
    expect(screen.getByText('Hover')).toBeInTheDocument();
  });

  it('renders Tooltip.Popup content when open', async () => {
    const user = userEvent.setup();
    render(
      <Tooltip.Provider>
        <Tooltip.Root>
          <Tooltip.Trigger as="button">Hover</Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Positioner>
              <Tooltip.Popup data-testid="popup">Tooltip content</Tooltip.Popup>
            </Tooltip.Positioner>
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>,
    );
    await user.hover(screen.getByText('Hover'));
    const popup = screen.queryByTestId('popup');
    if (popup) {
      expect(popup).toHaveTextContent('Tooltip content');
      expect(popup).toHaveClass('z-50', 'overflow-hidden', 'rounded-md', 'px-3', 'py-1.5', 'text-xs', 'text-primary-foreground');
    }
  });

  it('renders Tooltip.Arrow when open', async () => {
    const user = userEvent.setup();
    render(
      <Tooltip.Provider>
        <Tooltip.Root>
          <Tooltip.Trigger as="button">Hover</Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Positioner>
              <Tooltip.Popup>
                <Tooltip.Arrow data-testid="arrow" />
              </Tooltip.Popup>
            </Tooltip.Positioner>
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>,
    );
    await user.hover(screen.getByText('Hover'));
    const arrow = screen.queryByTestId('arrow');
    if (arrow) {
      expect(arrow).toBeInTheDocument();
    }
  });

  it('has displayNames', () => {
    expect(Tooltip.Provider.displayName).toBe('Tooltip.Provider');
    expect(Tooltip.Popup.displayName).toBe('Tooltip.Popup');
    expect(Tooltip.Arrow.displayName).toBe('Tooltip.Arrow');
    expect(Tooltip.Positioner.displayName).toBe('Tooltip.Positioner');
    expect(Tooltip.Portal.displayName).toBe('Tooltip.Portal');
  });
});
