import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Button } from './button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'outline', 'text'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    destructive: {
      control: 'select',
      options: ['off', 'on'],
    },
    disabled: {
      control: 'boolean',
    },
    children: {
      control: 'text',
    },
    onClick: { action: 'clicked' },
  },
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'medium',
    destructive: 'off',
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

/**
 * Default button (primary, medium)
 */
export const Default: Story = {};

/**
 * All Variants (Primary / Outline / Text)
 */
export const Variants: Story = {
  render: (args) => (
    <div className="flex gap-4">
      <Button {...args} variant="primary">
        Primary
      </Button>
      <Button {...args} variant="outline">
        Outline
      </Button>
      <Button {...args} variant="text">
        Text
      </Button>
    </div>
  ),
};

/**
 * All Sizes
 */
export const Sizes: Story = {
  render: (args) => (
    <div className="flex gap-4 items-center">
      <Button {...args} size="small">
        Small
      </Button>
      <Button {...args} size="medium">
        Medium
      </Button>
      <Button {...args} size="large">
        Large
      </Button>
    </div>
  ),
};

/**
 * Destructive variants (on/off)
 */
export const Destructive: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <Button {...args} variant="primary" destructive="on">
          Primary Destructive
        </Button>
        <Button {...args} variant="outline" destructive="on">
          Outline Destructive
        </Button>
        <Button {...args} variant="text" destructive="on">
          Text Destructive
        </Button>
      </div>
      <div className="flex gap-4">
        <Button {...args} variant="primary" destructive="off">
          Primary Normal
        </Button>
        <Button {...args} variant="outline" destructive="off">
          Outline Normal
        </Button>
        <Button {...args} variant="text" destructive="off">
          Text Normal
        </Button>
      </div>
    </div>
  ),
};

/**
 * Disabled states
 */
export const Disabled: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <Button {...args} variant="primary" disabled>
          Primary
        </Button>
        <Button {...args} variant="outline" disabled>
          Outline
        </Button>
        <Button {...args} variant="text" disabled>
          Text
        </Button>
      </div>
      <div className="flex gap-4">
        <Button {...args} variant="primary" destructive="on" disabled>
          Destructive Primary
        </Button>
        <Button {...args} variant="outline" destructive="on" disabled>
          Destructive Outline
        </Button>
        <Button {...args} variant="text" destructive="on" disabled>
          Destructive Text
        </Button>
      </div>
    </div>
  ),
};

/**
 * Matrix of all possible variants (variant/size/destructive)
 */
export const AllVariants: Story = {
  render: () => {
    const variants = ['primary', 'outline', 'text'] as const;
    const sizes = ['small', 'medium', 'large'] as const;
    const destructiveOptions = ['off', 'on'] as const;

    return (
      <div className="flex flex-col gap-6">
        {destructiveOptions.map((destructive) => (
          <div key={destructive}>
            <h4 className="font-bold mb-2 capitalize">Destructive: {destructive}</h4>
            {variants.map((variant) => (
              <div key={variant} className="flex items-center gap-4 mb-2">
                {sizes.map((size) => (
                  <Button
                    key={`${variant}-${size}-${destructive}`}
                    variant={variant}
                    size={size}
                    destructive={destructive}
                  >
                    {variant} / {size}
                  </Button>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  },
};
