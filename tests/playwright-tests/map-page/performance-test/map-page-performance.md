### **Test Scenario: Map Page - Performance Validation**

- **Feature being tested**:  
  Performance of the map page, including page load time, resource load success, and overall number of requests.

- **Expected outcome**:  
  - The page should load completely in under 5 seconds.
  - No failed network requests should occur.
  - The number of network requests should stay within reasonable limits.
  - Main UI component (the map) should still be visible after page load.

- **Setup / Teardown procedures**:  
  - **Setup**:  
    - Navigate to the Privilee staging map page (`https://staging-website.privilee.ae/map`).
    - Start listening to network events.
  - **Teardown**:  
    - No specific teardown is needed. Simply end the test after validations.

- **Why this test is important**:  
  Performance is critical for user experience. If the map page takes too long to load or fails to load resources, users may abandon the platform. Fast load times improve usability, SEO, and customer retention.
