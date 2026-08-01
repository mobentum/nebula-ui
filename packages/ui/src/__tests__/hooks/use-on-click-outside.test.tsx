import { describe, it, expect } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/react';
import { useRef } from 'react';
import { useOnClickOutside } from '../../hooks/use-on-click-outside';

function TestComponent({
  handler,
}: {
  handler: (event: MouseEvent | TouchEvent) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, handler);
  return (
    <div>
      <div ref={ref} data-testid="inside">
        Inside
      </div>
      <div data-testid="outside">Outside</div>
    </div>
  );
}

describe('useOnClickOutside', () => {
  it('calls the handler when clicking outside', () => {
    const handler = vi.fn();
    render(<TestComponent handler={handler} />);
    fireEvent.mouseDown(screen.getByTestId('outside'));
    expect(handler).toHaveBeenCalledOnce();
  });

  it('does not call the handler when clicking inside', () => {
    const handler = vi.fn();
    render(<TestComponent handler={handler} />);
    fireEvent.mouseDown(screen.getByTestId('inside'));
    expect(handler).not.toHaveBeenCalled();
  });

  it('listens to touchstart events', () => {
    const handler = vi.fn();
    render(<TestComponent handler={handler} />);
    fireEvent.touchStart(screen.getByTestId('outside'));
    expect(handler).toHaveBeenCalledOnce();
  });
});
