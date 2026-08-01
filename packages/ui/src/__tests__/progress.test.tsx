import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Progress } from '../components/progress';

describe('Progress', () => {
  it('renders Progress.Root', () => {
    render(<Progress.Root data-testid="r" />);
    expect(screen.getByTestId('r')).toBeInTheDocument();
  });

  it('renders Progress.Track', () => {
    render(
      <Progress.Root>
        <Progress.Track data-testid="t" />
      </Progress.Root>,
    );
    expect(screen.getByTestId('t')).toBeInTheDocument();
  });

  it('Progress.Track applies default classes', () => {
    render(
      <Progress.Root>
        <Progress.Track data-testid="t" />
      </Progress.Root>,
    );
    expect(screen.getByTestId('t')).toHaveClass('h-2', 'w-full', 'overflow-hidden', 'rounded-full');
  });

  it('renders Progress.Indicator', () => {
    render(
      <Progress.Root value={50}>
        <Progress.Track>
          <Progress.Indicator data-testid="i" />
        </Progress.Track>
      </Progress.Root>,
    );
    expect(screen.getByTestId('i')).toBeInTheDocument();
  });

  it('Progress.Indicator applies default classes', () => {
    render(
      <Progress.Root value={50}>
        <Progress.Track>
          <Progress.Indicator data-testid="i" />
        </Progress.Track>
      </Progress.Root>,
    );
    expect(screen.getByTestId('i')).toHaveClass('h-full', 'rounded-full', 'bg-nb-primary', 'transition-all', 'duration-500');
  });

  it('renders Progress.Label', () => {
    render(
      <Progress.Root>
        <Progress.Label data-testid="l">Loading</Progress.Label>
      </Progress.Root>,
    );
    expect(screen.getByTestId('l')).toHaveTextContent('Loading');
  });

  it('Progress.Label applies default classes', () => {
    render(
      <Progress.Root>
        <Progress.Label data-testid="l">Loading</Progress.Label>
      </Progress.Root>,
    );
    expect(screen.getByTestId('l')).toHaveClass('text-base', 'font-medium');
  });

  it('renders Progress.ValueLabel', () => {
    render(
      <Progress.Root value={50}>
        <Progress.ValueLabel data-testid="vl" />
      </Progress.Root>,
    );
    expect(screen.getByTestId('vl')).toBeInTheDocument();
  });

  it('Progress.ValueLabel shows value', () => {
    render(
      <Progress.Root value={50}>
        <Progress.ValueLabel data-testid="vl" />
      </Progress.Root>,
    );
    expect(screen.getByTestId('vl')).toHaveTextContent('50');
  });

  it('Progress.Root combines custom className', () => {
    render(<Progress.Root data-testid="r" className="my-custom" />);
    expect(screen.getByTestId('r')).toHaveClass('my-custom');
  });

  it('Progress.Root forwards ref', () => {
    const ref = { current: null };
    render(<Progress.Root ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it('has displayNames', () => {
    expect(Progress.Root.displayName).toBe('Progress.Root');
    expect(Progress.Track.displayName).toBe('Progress.Track');
    expect(Progress.Indicator.displayName).toBe('Progress.Indicator');
    expect(Progress.Label.displayName).toBe('Progress.Label');
    expect(Progress.ValueLabel.displayName).toBe('Progress.ValueLabel');
  });
});
