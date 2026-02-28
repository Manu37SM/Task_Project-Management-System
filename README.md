Task & Project Management System

Full Stack Technical Assignment

Tech Stack
Laravel (Backend API)
Django (Overdue Task Service)
React.js (Frontend)
MySQL

Features

User Authentication (Laravel Sanctum)

Admin

Create projects

Assign tasks

Monitor progress

Close overdue tasks

User

Login

View assigned tasks

Update task status

Task Attributes

Status

Priority

Due Date

Automatic Overdue Handling (Django Service)

Rules

Tasks past due date and not DONE become OVERDUE

Overdue tasks cannot return to IN_PROGRESS

Only Admin can close overdue tasks

Project Structure

task-system

laravel-backend
django_service
react-frontend

Local Setup
Backend (Laravel)

cd laravel-backend

composer install

cp .env.example .env

And edit and add the changes
DB_CONNECTION=sqlite
DB_HOST=<HOST>
DB_PORT=<PORT>
DB_DATABASE=<DB_NAME>
DB_USERNAME=<USERNAME>
DB_PASSWORD=<PASSWORD>

php artisan key

php artisan migrate

php artisan serve

Backend runs on
http://127.0.0.1:8000

Django Service

cd django_service

venv\Scripts\activate

python manage.py runserver 8001

Service endpoint
http://127.0.0.1:8001/api/check-overdue/

Frontend

cd react-frontend

npm install

npm start

Frontend runs on
http://localhost:3000

API Endpoints

POST /api/register

POST /api/login

GET /api/projects

POST /api/projects

POST /api/tasks

PUT /api/tasks/{id}

GET /api/my-tasks

Test Credentials

Admin

admin@test.com
123456

User

user@test.com
123456

Frontend Live URL

Example
https://task-project-management-system-lq94.vercel.app/
