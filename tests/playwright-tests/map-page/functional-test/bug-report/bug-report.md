### Bug Report: Venue Image Not Loading on Map Page

- **Summary**:  
  The fourth venue image under the "Dining" category on the `/map` page is not loading properly. Instead, it shows an empty space where the image should appear.

- **Steps to Reproduce**:
  1. Go to [https://staging-website.privilee.ae/map](https://staging-website.privilee.ae/map).
  2. Click on the **Dining** filter button.
  3. Scroll through the venue cards.
  4. Observe the fourth venue card. The ID of the image `ZtBL2BEAACIAIvG3`.

- **Expected Result**:  
  All venue images, including the fourth one, should load correctly and display the appropriate venue picture.

- **Actual Result**:  
  The fourth venue image fails to load — it shows an empty space where the image should appear.

- **Environment**:
  - **Environment**: Staging
  - **URL**: [https://staging-website.privilee.ae/map](https://staging-website.privilee.ae/map)
  - **Browser**: [e.g., Chrome 124]
  - **Device**: [e.g., MacBook Pro]
  - **Img ID**: [`ZtBL2BEAACIAIvG3`]
  - **Bug severity**: Medium, as it affects user experience, but does not block major functionality.

- **Attachments**:  
  ![screenshot](tests/playwright-tests/map-page/functional-test/bug-report/empty-img.png)
