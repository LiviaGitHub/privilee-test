### **Test Scenario: Venue Search Functionality**

- **Feature being tested**:  
  The ability for users to search for venues using the search bar on the map page.

- **Expected outcome**:  
  When a user types a valid venue name into the search bar, the venue should appear in the search results list. If the user is new, a modal will ask for some information, such as their email, to proceed. If the user is not new, a modal with detailed information about the venue should be displayed.

- **Setup/Teardown procedures**:
  - **Setup**:  
    - Navigate to the Privilee staging map page (`https://staging-website.privilee.ae/map`).
    - Ensure the search input is visible and interactable.
  - **Teardown**:  
    I tested it, and the user data is not saved, so the next test is not affected if the previous one fills in the user details for a successful search. Also, the open modal doesn't impact the following tests. However, I still included a modal close step as an example of a teardown procedure.

- **Why this test is important**:  
  This feature is **critical for discoverability**. Users rely on the search function to find clubs, gyms, or venues of interest quickly. If broken, the user might abandon the session entirely. Ensuring it's functional increases trust and usability.
