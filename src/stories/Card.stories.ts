import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { VCard, VCardTitle, VCardText, VCardActions, VBtn, VImg, VChip } from 'vuetify/components';

const meta: Meta<typeof VCard> = {
  title: 'Vuetify/Card',
  component: VCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof VCard>;

export const BasicCard: Story = {
  render: () => ({
    components: { VCard, VCardTitle, VCardText, VCardActions, VBtn },
    template: `
      <v-card width="340" elevation="2">
        <v-card-title>Card Title</v-card-title>
        <v-card-text>
          This is a basic Vuetify card component with some descriptive text.
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" variant="tonal">Learn more</v-btn>
        </v-card-actions>
      </v-card>
    `,
  }),
};

export const ProductCard: Story = {
  render: () => ({
    components: { VCard, VCardTitle, VCardText, VCardActions, VBtn, VImg, VChip },
    template: `
      <v-card width="340" elevation="2">
        <v-img
          src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
          height="160"
          cover
        ></v-img>
        <v-card-title class="d-flex justify-space-between align-center">
          Norway Fjord Adventures
          <v-chip color="pink" size="small">On Sale</v-chip>
        </v-card-title>
        <v-card-text>
          With Fjord Tours you can explore more of the magical fjord landscapes
          with tours and activities on and around the fjords of Norway.
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" variant="flat" block>Book classic tour</v-btn>
        </v-card-actions>
      </v-card>
    `,
  }),
};

export const SimpleCard: Story = {
  render: () => ({
    components: { VCard, VCardTitle, VCardText },
    template: `
      <v-card width="300">
        <v-card-title>Simple Card</v-card-title>
        <v-card-text class="text-medium-emphasis">
          A minimal card without border
        </v-card-text>
      </v-card>
    `,
  }),
};
