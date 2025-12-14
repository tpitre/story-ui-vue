import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { VIcon, VBtn, VCard, VCardTitle, VCardText, VRow, VCol, VContainer } from 'vuetify/components';

const meta: Meta<typeof VIcon> = {
  title: 'Vuetify/Icon',
  component: VIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
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
type Story = StoryObj<typeof VIcon>;

export const BasicIcons: Story = {
  render: () => ({
    components: { VIcon, VRow, VCol, VContainer },
    template: `
      <v-container>
        <v-row justify="center" align="center" style="gap: 16px;">
          <v-icon icon="mdi-home" size="large" color="primary" />
          <v-icon icon="mdi-account" size="large" color="secondary" />
          <v-icon icon="mdi-cog" size="large" color="info" />
          <v-icon icon="mdi-heart" size="large" color="error" />
          <v-icon icon="mdi-star" size="large" color="warning" />
        </v-row>
      </v-container>
    `,
  }),
};

export const IconSizes: Story = {
  render: () => ({
    components: { VIcon, VRow },
    template: `
      <v-row justify="center" align="center" style="gap: 16px;">
        <v-icon icon="mdi-star" size="x-small" color="primary" />
        <v-icon icon="mdi-star" size="small" color="primary" />
        <v-icon icon="mdi-star" size="default" color="primary" />
        <v-icon icon="mdi-star" size="large" color="primary" />
        <v-icon icon="mdi-star" size="x-large" color="primary" />
      </v-row>
    `,
  }),
};

export const ButtonWithIcons: Story = {
  render: () => ({
    components: { VBtn, VIcon, VRow },
    template: `
      <v-row justify="center" style="gap: 16px;">
        <v-btn color="primary" prepend-icon="mdi-plus">Add Item</v-btn>
        <v-btn color="success" prepend-icon="mdi-check">Confirm</v-btn>
        <v-btn color="error" prepend-icon="mdi-delete">Delete</v-btn>
        <v-btn color="info" append-icon="mdi-arrow-right">Next</v-btn>
      </v-row>
    `,
  }),
};

export const IconButton: Story = {
  render: () => ({
    components: { VBtn, VIcon, VRow },
    template: `
      <v-row justify="center" style="gap: 16px;">
        <v-btn icon color="primary"><v-icon icon="mdi-pencil" /></v-btn>
        <v-btn icon color="error"><v-icon icon="mdi-delete" /></v-btn>
        <v-btn icon color="success"><v-icon icon="mdi-check" /></v-btn>
        <v-btn icon color="info"><v-icon icon="mdi-information" /></v-btn>
      </v-row>
    `,
  }),
};

export const CardWithIcons: Story = {
  render: () => ({
    components: { VCard, VCardTitle, VCardText, VIcon, VBtn, VRow },
    template: `
      <v-card min-width="300" class="pa-4">
        <v-card-title class="d-flex align-center">
          <v-icon icon="mdi-account-circle" size="large" color="primary" class="mr-2" />
          User Profile
        </v-card-title>
        <v-card-text>
          <p class="mb-4">This card demonstrates icons within a Vuetify card component.</p>
          <v-row justify="start" style="gap: 8px;">
            <v-btn variant="text" prepend-icon="mdi-thumb-up" color="success">Like</v-btn>
            <v-btn variant="text" prepend-icon="mdi-share" color="info">Share</v-btn>
            <v-btn variant="text" prepend-icon="mdi-bookmark" color="warning">Save</v-btn>
          </v-row>
        </v-card-text>
      </v-card>
    `,
  }),
};
