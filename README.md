# QA Engineer Assessment – Privilee Website (Automation Focus)

##  Overview

This repository contains automated UI and API tests for the **Privilee Website** and **gorest.co.in** API.  
It is part of a QA Engineer assessment focused on test automation, CI/CD integration, and artifact generation.

---

## Tech Stack

- **Playwright** – UI Test Automation
- **Newman** – API Test Automation (Postman Collections)
- **GitHub Actions** – CI/CD Pipelines
- **Node.js** – Runtime environment

---

## Getting Started

### 1. Install Project Dependencies

```bash
npm install
npx playwright install
```

---

## Running the Tests

### UI Tests (Playwright)

| Command | Description |
|:--------|:------------|
| `npm run test:ui` | Run UI tests (via script) |
| `npx playwright test --ui` | Open Playwright Test Runner UI |
| `npx playwright test --debug` | Run tests in debug mode |

---

### API Tests (Newman)

| Command | Description |
|:--------|:------------|
| `npx newman run tests/api-tests/tests.postman_collection.json` | Run API tests |


---

### Run All Tests (UI + API)

| Command | Description |
|:--------|:------------|
| `npm run test:all` | 

## CI/CD Integration with GitHub Actions

- Every **push** or **pull request** to the `main` branch automatically triggers the tests.
- You can also **manually** trigger test runs via the **GitHub Actions** tab.

---

## Test Results & Artifacts

- After each run, GitHub Actions **generates HTML reports** as artifacts.
- Example of an artifact download link:  
  [Download Report](https://github.com/LiviaGitHub/privilee-test/actions/runs/14683018938/artifacts/3014914891)

---

## Project Structure

- For each test folder there is a `.md` file explaining what was tested.

```
privilee-test/
├── tests/
│   ├── playwright-tests/
│   │   └── map-page/
│   │       └── *.spec.js (UI Test files)
│   │         └── *.md 
│   └── api-tests/
│       └── tests.postman_collection.json 
│       └── api-test-overview.md
│   └── utils/
│       └── *.js
├── playwright.config.js
├── package.json
```
---

## Notes

- UI tests run in **headless mode** for faster execution.  
- Test artifacts include **screenshots**, and **HTML reports** (only generated for failed tests when needed).
- After running the tests in the console, **npx playwright show-report** will be displayed so you can run and view the test report.
- CI workflows are configured in `.github/workflows/` folder.
- Added a bug report in `functional-test`.
- Added a test-case-exemple in `functional-test`.
