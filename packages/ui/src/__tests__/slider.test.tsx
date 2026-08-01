import { describe, it, expect, beforeAll } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Slider } from '../components/slider';

beforeAll(() => {
  globalThis.PointerEvent = MouseEvent as any;
});

describe('Slider', () => {
  it('renders Slider.Root', () => {
    render(<Slider.Root data-testid="r" />);
    expect(screen.getByTestId('r')).toBeInTheDocument();
  });

  it('Slider.Root applies default classes', () => {
    render(<Slider.Root data-testid="r" />);
    expect(screen.getByTestId('r')).toHaveClass('relative', 'flex', 'w-full', 'select-none');
  });

  it('Slider.Root combines custom className', () => {
    render(<Slider.Root data-testid="r" className="my-custom" />);
    expect(screen.getByTestId('r')).toHaveClass('my-custom');
  });

  it('renders Slider.Track', () => {
    render(
      <Slider.Root>
        <Slider.Track data-testid="t" />
      </Slider.Root>,
    );
    expect(screen.getByTestId('t')).toBeInTheDocument();
  });

  it('Slider.Track applies default classes', () => {
    render(
      <Slider.Root>
        <Slider.Track data-testid="t" />
      </Slider.Root>,
    );
    expect(screen.getByTestId('t')).toHaveClass('relative', 'h-3', 'w-full', 'rounded-full');
  });

  it('renders Slider.Range', () => {
    render(
      <Slider.Root defaultValue={50}>
        <Slider.Track>
          <Slider.Range data-testid="rg" />
        </Slider.Track>
      </Slider.Root>,
    );
    expect(screen.getByTestId('rg')).toBeInTheDocument();
  });

  it('Slider.Range applies default classes', () => {
    render(
      <Slider.Root defaultValue={50}>
        <Slider.Track>
          <Slider.Range data-testid="rg" />
        </Slider.Track>
      </Slider.Root>,
    );
    expect(screen.getByTestId('rg')).toHaveClass('absolute', 'h-full', 'rounded-full', 'bg-nb-primary');
  });

  it('renders Slider.Thumb', () => {
    render(
      <Slider.Root defaultValue={50}>
        <Slider.Control>
          <Slider.Track>
            <Slider.Range />
            <Slider.Thumb data-testid="th" />
          </Slider.Track>
        </Slider.Control>
      </Slider.Root>,
    );
    expect(screen.getByTestId('th')).toBeInTheDocument();
  });

  it('Slider.Thumb applies default classes', () => {
    render(
      <Slider.Root defaultValue={50}>
        <Slider.Control>
          <Slider.Track>
            <Slider.Range />
            <Slider.Thumb data-testid="th" />
          </Slider.Track>
        </Slider.Control>
      </Slider.Root>,
    );
    expect(screen.getByTestId('th')).toHaveClass('block', 'h-5', 'w-5', 'rounded-full', 'border-2', 'bg-nb-bg');
  });

  it('renders Slider.Control', () => {
    render(
      <Slider.Root>
        <Slider.Control data-testid="c" />
      </Slider.Root>,
    );
    expect(screen.getByTestId('c')).toBeInTheDocument();
  });

  it('has displayNames', () => {
    expect(Slider.Root.displayName).toBe('Slider.Root');
    expect(Slider.Track.displayName).toBe('Slider.Track');
    expect(Slider.Range.displayName).toBe('Slider.Range');
    expect(Slider.Thumb.displayName).toBe('Slider.Thumb');
    expect(Slider.Control.displayName).toBe('Slider.Control');
  });

  it('Slider.Root forwards ref', () => {
    const ref = { current: null };
    render(<Slider.Root ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
