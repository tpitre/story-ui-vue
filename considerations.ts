/**
 * Vuetify Design System Considerations for Story UI
 *
 * This file provides design system context to the AI for generating
 * accurate Storybook stories using Vuetify 3 components.
 */

export const considerations = \`
## Vuetify 3 Design System Guidelines

### Import Conventions
- All Vuetify components are auto-imported when using vuetify/components
- Use \`<v-component-name>\` syntax in templates
- Icons use \`mdi-*\` prefix from @mdi/font

### Theme Colors
Vuetify uses semantic color names:
- Primary: 'primary'
- Secondary: 'secondary'
- Success: 'success'
- Info: 'info'
- Warning: 'warning'
- Error: 'error'

### Component Best Practices

#### Buttons (v-btn)
- Use variant="flat" for primary actions (filled)
- Use variant="tonal" for secondary actions
- Use variant="outlined" for tertiary actions
- Use variant="text" for ghost buttons
- Use color="primary" for main actions
- Use color="error" for destructive actions

#### Cards (v-card)
- Use elevation="2" for subtle shadow
- Use rounded="lg" for larger corner radius
- Use class="pa-4" for padding

#### Text & Typography
- Use v-card-title for headings in cards
- Use v-card-text for body content
- Use class="text-caption" for small text
- Use class="text-h4", "text-h5", etc. for headings

#### Layout
- Use v-container for max-width constraints
- Use v-row and v-col for grid layouts
- Use v-spacer for flexible spacing
- Use class="d-flex" for flexbox layouts

#### Form Inputs
- Use v-text-field for text inputs
- Use v-select for dropdowns
- Use v-checkbox for checkboxes
- Always include label prop for accessibility
- Use :rules prop for validation

### Spacing Scale
Vuetify uses a 4px unit system:
- pa-1, ma-1: 4px
- pa-2, ma-2: 8px
- pa-3, ma-3: 12px
- pa-4, ma-4: 16px
- pa-5, ma-5: 20px
- pa-6, ma-6: 24px

### Responsive Design
- Use :cols="12" :sm="6" :md="4" on v-col for responsive grids
- Use display utilities: d-none, d-sm-block, etc.

### Accessibility
- Use proper aria labels on icon buttons
- Ensure color contrast meets WCAG standards
- Use semantic components like v-list for lists

### Common Patterns
- Dialogs: Use v-dialog with v-card inside
- Navigation: Use v-app-bar and v-navigation-drawer
- Lists: Use v-list with v-list-item
- Tables: Use v-data-table for data display
\`;

export default considerations;
