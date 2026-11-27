# Student Registration API

TypeScript and Express backend for the student registration page.

## Run locally

```bash
npm install
npm run dev
```

The server listens on `http://localhost:3000` by default. Set `PORT` to use another port.

## API endpoints

- `GET /api/health` checks that the API is running.
- `GET /api/students` lists registered students.
- `GET /api/students/:id` returns one student.
- `POST /api/students` registers a student. Required fields: `firstName`, `lastName`, `dateOfBirth` (`YYYY-MM-DD`), `gender` (`Male`, `Female`, or `Other`), `email`, `phone`, and `address`.
- `PUT /api/students/:id` replaces a student's registration details.
- `DELETE /api/students/:id` removes a student.
- `GET /` returns API information.

Student records are saved in `data/students.json` under the backend folder. The registration form at `../index.html` submits to `http://localhost:3000/api/students`.
