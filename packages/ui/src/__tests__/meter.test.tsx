import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Meter } from '../components/meter';

describe('Meter', () => {
  it('renders Meter.Root', () => {
    render(<Meter.Root data-testid="r" />);
    expect(screen.getByTestId('r')).toBeInTheDocument();
  });

  it('renders Meter.Track', () => {
    render(
      <Meter.Root>
        <Meter.Track data-testid="t" />
      </Meter.Root>,
    );
    expect(screen.getByTestId('t')).toBeInTheDocument();
  });

  it('Meter.Track applies default classes', () => {
    render(
      <Meter.Root>
        <Meter.Track data-testid="t" />
      </Meter.Root>,
    );
    expect(screen.getByTestId('t')).toHaveClass('h-2', 'w-full', 'overflow-hidden', 'rounded-full');
  });

  it('renders Meter.Indicator', () => {
    render(
      <Meter.Root value={50}>
        <Meter.Track>
          <Meter.Indicator data-testid="i" />
        </Meter.Track>
      </Meter.Root>,
    );
    expect(screen.getByTestId('i')).toBeInTheDocument();
  });

  it('Meter.Indicator applies default classes', () => {
    render(
      <Meter.Root value={50}>
        <Meter.Track>
          <Meter.Indicator data-testid="i" />
        </Meter.Track>
      </Meter.Root>,
    );
    expect(screen.getByTestId('i')).toHaveClass('h-full', 'rounded-full', 'transition-[width]', 'bg-nb-primary');
  });

  it('renders Meter.Label', () => {
    render(
      <Meter.Root>
        <Meter.Label data-testid="l">Usage</Meter.Label>
      </Meter.Root>,
    );
    expect(screen.getByTestId('l')).toHaveTextContent('Usage');
  });

  it('Meter.Label applies default classes', () => {
    render(
      <Meter.Root>
        <Meter.Label data-testid="l">Usage</Meter.Label>
      </Meter.Root>,
    );
    expect(screen.getByTestId('l')).toHaveClass('text-base', 'font-medium');
  });

  it('renders Meter.ValueLabel', () => {
    render(
      <Meter.Root value={75}>
        <Meter.ValueLabel data-testid="vl" />
      </Meter.Root>,
    );
    expect(screen.getByTestId('vl')).toBeInTheDocument();
  });

  it('Meter.ValueLabel shows value', () => {
    render(
      <Meter.Root value={75}>
        <Meter.ValueLabel data-testid="vl" />
      </Meter.Root>,
    );
    expect(screen.getByTestId('vl')).toHaveTextContent('75');
  });

  it('Meter.Root combines custom className', () => {
    render(<Meter.Root data-testid="r" className="my-custom" />);
    expect(screen.getByTestId('r')).toHaveClass('my-custom');
  });

  it('Meter.Root forwards ref', () => {
    const ref = { current: null };
    render(<Meter.Root ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it('has displayNames', () => {
    expect(Meter.Root.displayName).toBe('Meter.Root');
    expect(Meter.Track.displayName).toBe('Meter.Track');
    expect(Meter.Indicator.displayName).toBe('Meter.Indicator');
    expect(Meter.Label.displayName).toBe('Meter.Label');
    expect(Meter.ValueLabel.displayName).toBe('Meter.ValueLabel');
  });
});
