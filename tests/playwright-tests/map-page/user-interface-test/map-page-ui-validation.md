### **Test Scenario: Map Page - UI Validation**

- **Feature being tested**:  
  The presence, visibility, and correct default behavior of the main UI components on the `/map` page, including the interactive map, search input, filters button, venue cards, venue images, and category buttons.

- **Expected outcome**:  
  All essential UI elements should be properly rendered and visible:  
  - The map should be displayed.  
  - The search input should be available and interactable.  
  - The "Filters" button should be visible.  
  - The venue cards (listings) should be visible.  
  - At least one venue image inside the venue cards should be visible.
  - All category buttons ("Pool & beach", "Fitness", "Family activities", "Dining", and "Waterparks") should be visible.
  - The "Pool & beach" category button should be **selected** by default when the page loads.

- **Setup / Teardown procedures**:  
  - **Setup**:  
    - Navigate to the Privilee staging map page (`https://staging-website.privilee.ae/map`).
    - Wait until the page reaches a `networkidle` load state, ensuring all resources have finished loading.
  - **Teardown**:  
    - No teardown is required for this UI validation, since it only checks static elements without modifying any state.

- **Why this test is important**:  
  UI component visibility and correct default behavior are critical for user navigation and experience.  
  If key elements like the map, search input, filters, venue cards, or categories are missing, broken, or misbehaving, users will not be able to interact with the platform as expected.  
  Ensuring that the main UI components load correctly, and that expected defaults (like "Pool & beach" being selected) are properly set, helps catch frontend issues early and improves overall user trust, usability, and engagement with the platform.
