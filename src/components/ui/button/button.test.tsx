import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { Button } from './button';

// Utility to simplify variant rendering
const renderButton = (props = {}) => render(<Button {...props}>Click me</Button>);

describe('Button component', () => {
  it('renders correctly with default props', () => {
    renderButton();
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Click me');
  });

  it('calls onClick when clicked', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    renderButton({ onClick: handleClick });

    const button = screen.getByRole('button', { name: /click me/i });
    await user.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('does not call onClick when disabled', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    renderButton({ onClick: handleClick, disabled: true });

    const button = screen.getByRole('button', { name: /click me/i });
    await user.click(button);

    expect(handleClick).not.toHaveBeenCalled();
    expect(button).toBeDisabled();
  });

  it('applies variant classes correctly', () => {
    const { rerender } = renderButton({ variant: 'primary' });
    let button = screen.getByRole('button');

    // Primary
    expect(button.className).toMatch(/bg-brand-500/);

    // Outline
    rerender(<Button variant="outline">Click me</Button>);
    button = screen.getByRole('button');
    expect(button.className).toMatch(/outline-grey-300/);

    // Text
    rerender(<Button variant="text">Click me</Button>);
    button = screen.getByRole('button');
    expect(button.className).toMatch(/bg-transparent/);
  });

  it('applies size classes correctly', () => {
    const { rerender } = renderButton({ size: 'small' });
    let button = screen.getByRole('button');

    expect(button.className).toMatch(/py-1/);

    rerender(<Button size="medium">Click me</Button>);
    button = screen.getByRole('button');
    expect(button.className).toMatch(/py-1\.5/);

    rerender(<Button size="large">Click me</Button>);
    button = screen.getByRole('button');
    expect(button.className).toMatch(/py-2/);
  });

  it('applies destructive styles when enabled', () => {
    const { rerender } = renderButton({ variant: 'primary', destructive: 'on' });
    let button = screen.getByRole('button');
    expect(button.className).toMatch(/bg-red-500/);

    rerender(
      <Button variant="outline" destructive="on">
        Click me
      </Button>
    );
    button = screen.getByRole('button');
    expect(button.className).toMatch(/outline-red-300/);

    rerender(
      <Button variant="text" destructive="on">
        Click me
      </Button>
    );
    button = screen.getByRole('button');
    expect(button.className).toMatch(/text-red-600/);
  });
});
