### **Test Case: Check Venue that Requires Annual Subscription**

#### **Test Case ID:**
TC-WP-001

#### **Objective:**
Ensure that venues requiring an annual subscription are properly displayed with a lock icon, which should be overlaid with transparency, indicating subscription-only access on the map page.

#### **Preconditions:**
- User is on the `/map` page: `https://staging-website.privilee.ae/map`
- The page has loaded fully, and the "Waterparks" category is visible.

#### **Test Environment:**
- URL: `https://staging-website.privilee.ae/map`
- Browsers: Chrome / Firefox / Safari
- Device: Desktop or Mobile

#### **Test Steps:**

1. **Navigate to the Map Page:**
   - Open the URL `https://staging-website.privilee.ae/map` in the browser and ensure the page has fully loaded.

2. **Click on the "Waterparks" Category:**
   - Locate and click on the "Waterparks" category button to filter the venues accordingly.

3. **Verify Lock Icon with Transparency for Subscription-only Venues:**
   - Observe the venues displayed under the "Waterparks" category.
   - Ensure that venues requiring an annual subscription are indicated with a lock icon overlayed with transparency.

4. **Click on a Venue with Lock Icon:**
   - Click on a venue that displays the lock icon to open the venue's modal.

#### **Expected Result:**
- Venues that require an annual subscription should have a lock icon with transparency, clearly visible on the venue's image.
- When clicking on a venue with a lock icon, the venue's modal should open correctly, displaying the venue’s details and images without issues.
- The subscription requirement should be clearly indicated within the modal.
