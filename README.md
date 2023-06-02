# TodoApp-Prabin

live-link===>todolist2001.netlify.app



A ToDo List made using HTML, CSS, and JavaScript allows users to add tasks, mark them as completed, delete tasks, and stores the task list in the browser's LocalStorage for persistence. The implementation involves the following functionalities:

Adding Tasks: Users can input a task in an input field and click an "Add" button to add it to the task list. The entered task is dynamically appended to the list of tasks displayed on the webpage.

Completing Tasks: Each task in the list has a checkbox or a button to mark it as completed. When a task is marked as completed, it is visually distinguished from the remaining tasks, typically through styling changes.

Deleting Tasks: Each task also has a delete button or icon to remove it from the list. Clicking on the delete button removes the corresponding task from the list, reducing the total number of tasks.

LocalStorage Storage: The task list is stored in the browser's LocalStorage, a client-side storage mechanism that allows data to be saved and retrieved even when the page is refreshed or reopened. Each time a task is added, updated, or deleted, the task list is saved to the LocalStorage.

Rendering Tasks: When the page loads or when tasks are added, the task list is retrieved from the LocalStorage and rendered on the screen. This ensures that the user sees their existing tasks even after closing and reopening the application.

Data Persistence: The tasks are stored in the DOM LocalStorage, which means they persist across different sessions or page reloads. This allows users to continue working with their task list without losing any data.

By leveraging HTML for the structure, CSS for the styling, and JavaScript for the interactivity and LocalStorage management, this ToDo List application provides users with a seamless experience to manage their tasks, track progress, and maintain a persistent task list.
