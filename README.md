# To-Do List Application

This is a **To-Do List Application** built with a **Node.js (Nest.js)** backend and a **React (Vite)** frontend.  
It is a simple task management app where users can add, update, and delete tasks, with real-time API integration.

---

## 📂 Project Structure

- **Backend:** Node.js with Nest.js framework
- **Frontend:** React (Vite)

---

## 🚀 Features

### Backend (Node.js/Nest.js)

- **GET /tasks:** Fetch all tasks.
- **POST /tasks:** Add a new task.
- **PUT /tasks/:id:** Update the completion status of a task.
- **DELETE /tasks/:id:** Delete a task by ID.
- In-memory data storage using an array.
- Basic input validation (e.g., task title cannot be empty).

### Frontend (React/Vite)

- Display all tasks in a list format.
- Form to add new tasks.
- Button to mark tasks as completed (with toggle functionality).
- Button to delete tasks.
- Mobile-responsive and clean UI.
- Completed tasks are shown with a **strike-through effect**.

---

## 📑 Task Requirements

### Backend Requirements:

- **Endpoints:**
  - `GET /tasks` → Fetch a list of all tasks.
  - `POST /tasks` → Add a new task.
    - **Request body:**
      
      ```json
      {
        "title": "Task Title",
        "completed": false // Default is false
      }
      ```
  - `PUT /tasks/:id` → Update the completed status of a task.
  - `DELETE /tasks/:id` → Delete a task by ID.
- **Storage:** In-memory data storage using arrays or objects.
- **Validation:** Ensure the task title is not empty.

### Frontend Requirements:

- **UI:**
  - Task list displaying all tasks.
  - Input field and button to add a new task.
  - Button to mark tasks as completed/uncompleted.
  - Button to delete tasks.
- **Design:**
  - Clean and attractive UI using HTML/CSS.
  - Mobile-responsive design.
  - Completed tasks shown with a strike-through effect.
- **API Integration:** Connect frontend to the backend API.

---

## 🛠️ Installation & Run Locally

### Backend Setup

```bash
cd to_do_app/backend
npm install
npm run start
```

### Frontend Setup

```bash
cd to_do_app/frontend
npm install
npm run dev
```

> **Note:** Make sure to configure CORS properly to allow API calls from the frontend.

---

## 🌐 Deployment

### Backend Deployment

- The backend API is deployed using **Render**.
- Make sure to use your deployed Render API base URL in the frontend (e.g., `https://your-backend-url.onrender.com/tasks`).

### Frontend Deployment

- The frontend can be deployed using **Netlify** or **Vercel**.
- Update the API base URL in the frontend code to point to the Render backend URL before deploying.

---

## 🔗 Example API Endpoint

```http
GET https://your-backend-url.onrender.com/tasks
```

> Replace `https://your-backend-url.onrender.com` with your actual Render backend URL.



## 🤝 Contributions

Pull requests are welcome. Feel free to fork the repo and improve the project.

---

## 📬 Contact

For any queries, reach out to [Trupti](https://github.com/trupti328)

---
