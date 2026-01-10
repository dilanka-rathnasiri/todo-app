# TodoApp

A modern, feature-rich Todo application built with Angular 20. This application allows you to manage your tasks efficiently with a clean and intuitive user interface.

## Features

- ✅ **Add Todo Items**: Create new tasks with title and description
- 📋 **View Todos**: Display all your todo items in an organized list
- 🔍 **Todo Details**: View detailed information about individual todo items
- ✏️ **Edit Todos**: Mark items as completed or uncompleted
- 🗑️ **Delete Todos**: Remove tasks you no longer need
- 📊 **Summary Statistics**: Track your progress with:
  - Completed tasks count
  - Pending tasks count
  - Progress percentage
- 💾 **Data Persistence**: All your todos are automatically saved to browser localStorage

## Tech Stack

- **Angular** 20.3.0 - Modern Angular framework with Signals
- **Bootstrap** 5.3.8 - Responsive UI components
- **TypeScript** 5.9.2 - Type-safe development
- **RxJS** 7.8.0 - Reactive programming
- **Angular Signals** - Reactive state management

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher recommended)
- **npm** (comes with Node.js) or **yarn**

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd todo-app
```

2. Install dependencies:
```bash
npm install
```

## Development Server

To start a local development server, run:

```bash
npm start
# or
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Building

To build the project for production, run:

```bash
npm run build
# or
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

To build and watch for changes during development:

```bash
npm run watch
# or
ng build --watch --configuration development
```

## Code Formatting

The project uses Prettier for code formatting. To format all code:

```bash
npm run format
```

## Running Unit Tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use:

```bash
npm test
# or
ng test
```

## Project Structure

```
src/
├── app/
│   ├── add-todo/          # Component for adding new todos
│   ├── home/              # Main home page component
│   ├── item-detail/       # Component for viewing todo details
│   ├── item-view/         # Component for displaying todo items in list
│   ├── status-badge/      # Component for displaying todo status
│   ├── summary-card/      # Component for displaying statistics
│   ├── models/
│   │   └── todo-item.ts   # TodoItem interface definition
│   ├── services/
│   │   ├── data-get-services.ts    # Service for localStorage operations
│   │   └── data-store-services.ts  # Service for managing todo state
│   ├── app.routes.ts      # Application routing configuration
│   └── app.ts             # Root component
├── index.html
├── main.ts
└── styles.scss
```

## Usage

### Adding a Todo

1. Navigate to the home page
2. Fill in the title and description fields in the "Add Todo" form
3. Optionally mark it as completed before saving
4. Click save to add the todo item

### Managing Todos

- **View Details**: Click on any todo item to view its details page
- **Mark Complete**: On the detail page, click "Mark as Completed" to mark a task as done
- **Mark Incomplete**: Click "Mark as Uncompleted" to change a completed task back to pending
- **Delete**: Click "Delete" on the detail page to remove a todo item

### Viewing Statistics

The summary card on the home page displays:
- Total completed tasks
- Total pending tasks
- Overall progress percentage

## Data Storage

All todo items are stored in the browser's localStorage, so your data persists across browser sessions. The data is automatically saved whenever you add, modify, or delete a todo item.

## Additional Resources

- [Angular Documentation](https://angular.dev)
- [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli)
- [Bootstrap Documentation](https://getbootstrap.com/docs/5.3/)

## License

See the [LICENSE](LICENSE) file for details.
