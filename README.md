
# 📱 MakeMyBudget

**MakeMyBudget** is developed using **React Native** with **Expo** and follows the **app file routing architecture** powered by `expo-router`.

---

## 🚀 Getting Started

### Prerequisites

* Node.js (v18 or above recommended)
* Expo CLI

  ```bash
  npm install -g expo-cli
  ```

### Running the Project

1. **Clone the repository**:

   ```bash
   git clone <your-repo-url>
   cd MakeMyBudget
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```
   ```bash
   cp .env.sample .env
   ```

3. **Start the Expo development server**:

   ```bash
   npm run start
   ```

   or

   ```bash
   expo start
   ```

4. **Run on device or simulator**:

   * Press `i` for iOS simulator (macOS only)
   * Press `a` for Android emulator
   * Or scan the QR code using the **Expo Go** app

---

## 📂 Project Structure

```
app/
├── modules/
│   ├── budget/
│   ├── transactions/
│   └── _layout.tsx
├── navigation/
│   ├── AppBottomNavigation.tsx
│   └── MainNavigationStack.tsx
├── shared/
│   ├── apis/
│   ├── components/
│   ├── constants/
│   ├── hooks/
│   ├── redux/
│   └── utils/
```

---

## 📦 Libraries Used

Redux (redux, @reduxjs/toolkit):
For global state management.

Redux Persist:
Persists Redux state to AsyncStorage, providing offline capabilities.

Redux Saga:
Middleware for handling asynchronous side effects in Redux.

NativeBase:
A UI component library for React Native, used for building responsive and styled UI.

Formik + Yup:
Used together for managing form state and validation.

Expo Router:
Enables file-based routing for screens and navigation within the app.

Async Storage:
Used for local data storage, particularly for persisting Redux state and user preferences.

Axios:
A promise-based HTTP client for making API requests.

Moment.js:
A library for parsing, validating, and formatting dates.

React Navigation:
Handles navigation including stack and bottom tab navigators.

---

## 📁 Folder Responsibilities

* `modules/`: Feature-specific pages/components such as budget and transactions.
* `navigation/`: Centralized navigation logic including bottom tabs and stacks.
* `shared/`: Shared utilities, reusable components, Redux setup, API functions, and app-wide hooks/constants.

---

## 🧠 State Management

* **Redux Toolkit** is used to organize slices and simplify reducer logic.
* **Redux Persist** is integrated with **AsyncStorage** to maintain the state across app restarts, providing basic offline support.
* **Redux Saga** handles side effects such as API calls, syncing local and remote data, and controlling complex logic flows.

---

## 🎨 UI and Form Handling

* **NativeBase** is used as the primary UI component library to build consistent, styled UI elements.
* **Formik** handles form states and submissions.
* **Yup** provides schema-based form validation integrated with Formik.

---

## 📌 Notes

* Built using **Expo SDK 53** and **React Native 0.79.2**
* Based on **file-system routing** using `expo-router` for simplified navigation structure

---
