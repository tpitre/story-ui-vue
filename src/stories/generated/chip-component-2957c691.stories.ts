import type { Meta, StoryObj } from '@storybook/vue3';
import { VChip } from 'vuetify/components';

const meta: Meta<typeof VChip> = {
  title: 'Generated/Chip Component',
  id: 'chip-component-2957c691',
  component: VChip,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'error', 'warning', 'info'],
    },
    variant: {
      control: 'select',
      options: ['elevated', 'flat', 'tonal', 'outlined', 'text', 'plain'],
    },
    size: {
      control: 'select',
      options: ['x-small', 'small', 'default', 'large', 'x-large'],
    },
    closable: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    label: {
      control: 'boolean',
    },
    pill: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'Default Chip',
  },
};

export const Colors: Story = {
  render: () => ({
    components: { VChip },
    template: `
      <div style="display: flex; gap: 8px; flex-wrap: wrap;">
        <v-chip color="primary">Primary</v-chip>
        <v-chip color="secondary">Secondary</v-chip>
        <v-chip color="success">Success</v-chip>
        <v-chip color="error">Error</v-chip>
        <v-chip color="warning">Warning</v-chip>
        <v-chip color="info">Info</v-chip>
      </div>
    `,
  }),
};

export const Variants: Story = {
  render: () => ({
    components: { VChip },
    template: `
      <div style="display: flex; gap: 8px; flex-wrap: wrap;">
        <v-chip variant="elevated">Elevated</v-chip>
        <v-chip variant="flat">Flat</v-chip>
        <v-chip variant="tonal">Tonal</v-chip>
        <v-chip variant="outlined">Outlined</v-chip>
        <v-chip variant="text">Text</v-chip>
        <v-chip variant="plain">Plain</v-chip>
      </div>
    `,
  }),
};

export const Sizes: Story = {
  render: () => ({
    components: { VChip },
    template: `
      <div style="display: flex; gap: 8px; align-items: center; flex-wrap: wrap;">
        <v-chip size="x-small">X-Small</v-chip>
        <v-chip size="small">Small</v-chip>
        <v-chip size="default">Default</v-chip>
        <v-chip size="large">Large</v-chip>
        <v-chip size="x-large">X-Large</v-chip>
      </div>
    `,
  }),
};

export const Closable: Story = {
  render: () => ({
    components: { VChip },
    template: `
      <div style="display: flex; gap: 8px; flex-wrap: wrap;">
        <v-chip closable color="primary">Closable Chip</v-chip>
        <v-chip closable color="secondary">Remove Me</v-chip>
        <v-chip closable color="success">Can Close</v-chip>
      </div>
    `,
  }),
};

export const Pill: Story = {
  render: () => ({
    components: { VChip },
    template: `
      <div style="display: flex; gap: 8px; flex-wrap: wrap;">
        <v-chip pill color="primary">Pill Chip</v-chip>
        <v-chip pill closable color="secondary">Closable Pill</v-chip>
        <v-chip pill color="success">Rounded</v-chip>
      </div>
    `,
  }),
};

export const Label: Story = {
  render: () => ({
    components: { VChip },
    template: `
      <div style="display: flex; gap: 8px; flex-wrap: wrap;">
        <v-chip label color="primary">Label Style</v-chip>
        <v-chip label color="secondary">Square Corners</v-chip>
        <v-chip label closable color="success">Closable Label</v-chip>
      </div>
    `,
  }),
};

export const Disabled: Story = {
  render: () => ({
    components: { VChip },
    template: `
      <div style="display: flex; gap: 8px; flex-wrap: wrap;">
        <v-chip disabled>Disabled</v-chip>
        <v-chip disabled color="primary">Disabled Primary</v-chip>
        <v-chip disabled closable color="secondary">Disabled Closable</v-chip>
      </div>
    `,
  }),
};

export const WithPrependIcon: Story = {
  render: () => ({
    components: { VChip },
    template: `
      <div style="display: flex; gap: 8px; flex-wrap: wrap;">
        <v-chip prepend-icon="mdi-account" color="primary">User</v-chip>
        <v-chip prepend-icon="mdi-email" color="secondary">Email</v-chip>
        <v-chip prepend-icon="mdi-check" color="success">Verified</v-chip>
      </div>
    `,
  }),
};

export const WithAppendIcon: Story = {
  render: () => ({
    components: { VChip },
    template: `
      <div style="display: flex; gap: 8px; flex-wrap: wrap;">
        <v-chip append-icon="mdi-chevron-right" color="primary">Next</v-chip>
        <v-chip append-icon="mdi-open-in-new" color="secondary">External</v-chip>
        <v-chip append-icon="mdi-star" color="warning">Favorite</v-chip>
      </div>
    `,
  }),
};

export const ChipGroup: Story = {
  render: () => ({
    components: { VChip },
    template: `
      <div>
        <div style="margin-bottom: 16px;">
          <h3 style="margin-bottom: 8px; font-size: 14px; font-weight: 600;">Categories</h3>
          <div style="display: flex; gap: 8px; flex-wrap: wrap;">
            <v-chip variant="outlined">Technology</v-chip>
            <v-chip variant="outlined">Design</v-chip>
            <v-chip variant="outlined">Business</v-chip>
            <v-chip variant="outlined">Marketing</v-chip>
          </div>
        </div>
        <div>
          <h3 style="margin-bottom: 8px; font-size: 14px; font-weight: 600;">Selected Tags</h3>
          <div style="display: flex; gap: 8px; flex-wrap: wrap;">
            <v-chip closable color="primary">Vue</v-chip>
            <v-chip closable color="primary">TypeScript</v-chip>
            <v-chip closable color="primary">Storybook</v-chip>
          </div>
        </div>
      </div>
    `,
  }),
};