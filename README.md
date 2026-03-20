Task & Project Management System

Tech Stack
Laravel (Backend API)
Django (Overdue Task Service)
React.js (Frontend)
MySQL
Docker

Deployment Stack
Render for backend(laravel(using docker) & django)
Vercel for frontend
Railway for MYSQL

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
admin@123

User

user@test.com
user@123

Frontend Live URL
https://task-project-management-system-lq94.vercel.app/

Only Admin can create Projects and Tasks. Normal users cannot create them, as it has only view access.
To create a new project please follow below steps:-

Step1:- Login first and get Auth Token using below CURL:-
curl --location 'https://task-project-management-system-1.onrender.com/api/login' \
--header 'Content-Type: application/json' \
--data-raw '{
    "email": "admin@test.com",
    "password": "admin@123"
}'

Step2:- Copy the token from login api response and paste it in the Authorization header.

curl --location 'https://task-project-management-system-1.onrender.com/api/projects' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer <AUTH_TOKEN>' \
--data '{
    "name": "<PROJECT_NAME>",
    "description" : "<PROJECT_DESCRIPTION>"
}'
