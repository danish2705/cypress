Feature: Open Google
  Scenario: User opens the Google homepage
    Given the user opens the google homepage
      When the user navigates to the image button
      When the user click on search bar
      Then the url of the page should be "https://www.google.com/imghp?hl=en&ogbl"
