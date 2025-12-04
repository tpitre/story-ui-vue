import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { VBtn } from 'vuetify/components';

const meta: Meta<typeof VBtn> = {
  title: 'Vuetify/Button',
  component: VBtn,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['flat', 'text', 'elevated', 'tonal', 'outlined', 'plain'],
    },
    size: {
      control: 'select',
      options: ['x-small', 'small', 'default', 'large', 'x-large'],
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'error', 'warning', 'info'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof VBtn>;

export const Primary: Story = {
  args: {
    variant: 'flat',
    color: 'primary',
  },
  render: (args) => ({
    components: { VBtn },
    setup() {
      return { args };
    },
    template: '<v-btn v-bind="args">Primary Button</v-btn>',
  }),
};

export const Secondary: Story = {
  args: {
    variant: 'tonal',
    color: 'primary',
  },
  render: (args) => ({
    components: { VBtn },
    setup() {
      return { args };
    },
    template: '<v-btn v-bind="args">Secondary Button</v-btn>',
  }),
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    color: 'primary',
  },
  render: (args) => ({
    components: { VBtn },
    setup() {
      return { args };
    },
    template: '<v-btn v-bind="args">Outlined Button</v-btn>',
  }),
};

export const Destructive: Story = {
  args: {
    variant: 'flat',
    color: 'error',
  },
  render: (args) => ({
    components: { VBtn },
    setup() {
      return { args };
    },
    template: '<v-btn v-bind="args">Delete</v-btn>',
  }),
};
