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

1. Start the virtual environment by activating

```
env\Scripts\activate
```

2. Run the migrations

```
python manage.py migrate
```

3. Run the Django backend webserver

```
python manage.py runserver
```
