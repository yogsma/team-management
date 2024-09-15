# Team Member Management Backend 

A simple backend for managing team members using Django and Django REST Framework.

## Features

There are 5 APIs to manage the team members: 

1. GET /team-members/
2. GET /team-members/{id}/
3. POST /team-members/
4. PUT /team-members/{id}/
5. DELETE /team-members/{id}/


## How To Run the Django Backend 

Note - This backend project was built using Python 3.8 and Django 4.2.16

### 1. Create a virtual environment 

```
python -m venv env
```

### 2. Start the virtual environment by activating

#### On Windows:

```
env\Scripts\activate
```

#### On MacOS and Linux:

```
source env/bin/activate
```

### 3. Install the dependencies

```
pipenv install
```

### 4. Run the migrations

```
python manage.py migrate
```

### 5. Run the Django backend webserver

```
python manage.py runserver
```

This should start the backend server at http://127.0.0.1:8000/


## Total Time for this project - 1 hour 50 minutes