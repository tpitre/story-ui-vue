import type { Meta, StoryObj } from '@storybook/vue3';
import { VBtn } from 'vuetify/components';

const meta: Meta<typeof VBtn> = {
  title: 'Generated/Primary Button',
  component: VBtn,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'error', 'warning', 'info'],
    },
    size: {
      control: 'select',
      options: ['x-small', 'small', 'default', 'large', 'x-large'],
    },
    variant: {
      control: 'select',
      options: ['elevated', 'flat', 'tonal', 'outlined', 'text', 'plain'],
    },
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    color: 'primary',
    variant: 'elevated',
  },
  render: (args) => ({
    components: { VBtn },
    setup() {
      return { args };
    },
    template: '<v-btn v-bind="args">Primary Button</v-btn>',
  }),
};

export const AllVariants: Story = {
  render: () => ({
    components: { VBtn },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div style="display: flex; gap: 8px; flex-wrap: wrap;">
          <v-btn color="primary" variant="elevated">Elevated</v-btn>
          <v-btn color="primary" variant="flat">Flat</v-btn>
          <v-btn color="primary" variant="tonal">Tonal</v-btn>
          <v-btn color="primary" variant="outlined">Outlined</v-btn>
          <v-btn color="primary" variant="text">Text</v-btn>
        </div>
      </div>
    `,
  }),
};

export const AllSizes: Story = {
  render: () => ({
    components: { VBtn },
    template: `
      <div style="display: flex; gap: 8px; align-items: center; flex-wrap: wrap;">
        <v-btn color="primary" size="x-small">X-Small</v-btn>
        <v-btn color="primary" size="small">Small</v-btn>
        <v-btn color="primary">Default</v-btn>
        <v-btn color="primary" size="large">Large</v-btn>
        <v-btn color="primary" size="x-large">X-Large</v-btn>
      </div>
    `,
  }),
};

export const WithIcon: Story = {
  render: () => ({
    components: { VBtn },
    template: `
      <div style="display: flex; gap: 8px; flex-wrap: wrap;">
        <v-btn color="primary" prepend-icon="mdi-pencil">Edit</v-btn>
        <v-btn color="primary" append-icon="mdi-arrow-right">Next</v-btn>
        <v-btn color="primary" icon="mdi-heart"></v-btn>
      </div>
    `,
  }),
};

export const Disabled: Story = {
  args: {
    color: 'primary',
    variant: 'elevated',
    disabled: true,
  },
  render: (args) => ({
    components: { VBtn },
    setup() {
      return { args };
    },
    template: '<v-btn v-bind="args">Disabled Button</v-btn>',
  }),
};

export const Loading: Story = {
  args: {
    color: 'primary',
    variant: 'elevated',
    loading: true,
  },
  render: (args) => ({
    components: { VBtn },
    setup() {
      return { args };
    },
    template: '<v-btn v-bind="args">Loading Button</v-btn>',
  }),
};