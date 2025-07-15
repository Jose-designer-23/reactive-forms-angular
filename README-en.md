# 📝 Reactive Forms Angular App 🚀

Welcome to the **Reactive Forms Angular App**! This project is a comprehensive and advanced demonstration of Angular's Reactive Forms capabilities. Explore how to build complex forms, implement robust validations (synchronous and asynchronous), manage form state, and create dynamic user interfaces based on user interaction.

This application is ideal for developers looking to understand and apply best practices in Angular form handling, from basic concepts to more advanced scenarios like dynamic fields and custom validations.

## ✨ Key Features

The application is organized into several categories, each exploring different aspects and complexities of reactive forms:

### 📄 Basics

This section introduces the fundamentals of reactive forms with a product form:

* **Input Fields:**
    * **Product Name:** Text input field.
    * **Price:** Numeric input field.
    * **Stock Quantity:** Numeric input field.
* **Save to Console:** Upon clicking "Save", the form's value is printed to the browser console.
* **Form State Indicators:** Displays the real-time state of the form and its individual fields:
    * **`valid`**: Is the form/field valid?
    * **`pristine`**: Has the form/field not been modified by the user?
    * **`touched`**: Has the form/field been visited or "touched" by the user?
    * **`dirty`**: Has the form/field been modified by the user?
* **JSON Form Value:** Displays the current value of all data entered into the form in JSON format.
* **Error Handling and Validations:** Implementation of validations using **regular expressions and Angular `Validators`**, showing dynamic error messages if the entered data does not meet the criteria.

### ➕ Dynamic Forms

This category demonstrates the flexibility of reactive forms in handling fields that are dynamically added or removed:

* **Username:** Text input field for entering the user's name.
* **Dynamic Video Game List:**
    * A text input for adding video game names.
    * Games are added to a **list of dynamic input fields**.
    * Each game in the list can be **edited individually**.
    * **Validation:** Requires a **minimum of 2 games** to be added for the list to be valid.
    * Implements the same validations and error messages as in the "Basics" category.

### 💡 Switches

Explore the use of different types of form controls for binary or selection options:

* **Gender:** A set of **radio input fields** for selecting gender (Male/Female).
* **Notifications:** A **toggle switch** to confirm if the user wishes to receive notifications.
* **Terms of Use and Service:** A **checkbox (`square input`)** that the user **must obligatorily accept** for the form to be valid.

### 🔐 Registration

A section dedicated to a complete registration form, showcasing common and cross-field validations:

* **Registration Fields:**
    * First Name
    * Last Name
    * Email
    * Username
    * Password
    * Confirm Password
* **Robust Validations:** All text fields have validations implemented using Angular `Validators` and **regular expressions**.
* **Password Validation:** `password` and `confirm password` **must obligatorily match** for registration to be valid, demonstrating form group-level validations.

### 🌍 Countries

An advanced demonstration of cascading selections in dropdown lists:

* **Nested Dropdown Lists:**
    1.  **Continent Selection:** The first list allows selecting a continent.
    2.  **Country Selection:** Based on the selected continent, the second list dynamically populates with countries from that continent.
    3.  **Bordering Countries:** The third list displays the countries that **surround or are neighbors** of the country selected in the second list.
* This section demonstrates the consumption of external APIs and data manipulation to build complex, dependent form logic.

## 🛠️ Technologies Used

### Frontend:

* **[Angular](https://angular.io/) (v19.2.14, with Signals):** The core framework for building user interfaces, leveraging powerful built-in and custom pipes and reactive state management via Signals.
* [**Angular Reactive Forms**](https://angular.io/guide/reactive-forms) - The core module for creating these forms.
* **[TypeScript](https://www.typescriptlang.org/) (~5.7.2):** The base programming language that adds static typing.
* **[Tailwind CSS](https://tailwindcss.com/) (v3.4.17):** A utility CSS framework for fast, responsive design.
* **[DaisyUI](https://daisyui.com/) (v4.12.24):** A UI component library for Tailwind CSS.
* **[RxJS](https://rxjs.dev/) (~7.8.0):** For managing asynchronous data streams and reactive programming within Angular.
* **External Countries API:** (If applicable, mention the specific API, e.g., REST Countries API) to retrieve continent, country, and border information.

---

## 🚀 How to Run the Project

To get the **Reactive Forms Angular App** up and running on your local environment, follow these steps:

### Prerequisites

* Node.js (version 18 or higher)
* npm or Yarn

### Steps

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/Jose-designer-23/reactive-forms-angular](https://github.com/Jose-designer-23/reactive-forms-angular)
    cd reactive-forms-angular
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or if you use Yarn
    # yarn install
    ```

3.  **Start the application:**
    ```bash
    ng serve
    ```

4.  **Access the Application:**
    Open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

---

## 💻 Development Commands (Angular CLI)

This section provides a quick reference to the most common Angular CLI commands.

* **Start the Development Server:**
    ```bash
    ng serve
    ```
* **Generate Components, Services, etc.:**
    ```bash
    ng generate component component-name
    ng generate service services/my-service
    # For a complete list of available schematics: ng generate --help
    ```
* **Build the Project for Production:**
    ```bash
    ng build
    ```
* **Run Unit Tests:**
    ```bash
    ng test
    ```
