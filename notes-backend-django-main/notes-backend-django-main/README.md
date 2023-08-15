# notes-backend-django
This Django project serves as a backend to the [Notes React app](https://github.com/Vai300/Notes-App). 

## Getting started
Steps:
1. Clone/Pull/Download this repository.
2. Create a virtual environment with `virtualenv env` and install dependencies with `pip install -r requirements.txt`
3. In cmd, cd to your project folder and create a superuser to access admin panel in django with `python manage.py createsuperuser`
4. Make the required migrations using `python manage.py migrate`
5. Run the server using `python manage.py runserver`

This project includes:
- All the **REST API** required to serve the notes from the mysql database that django provides.
- Modularity, so that you can quickly change the views and functionalities that cater to your requirements.

## About the project
The [notes react app] is a stand-alone front-end app that makes API calls to this **django** server deployed on **heroku** to render the notes and also GET, POST, DELETE, UPDATE notes on the go using the API endpoints.

 

## Credits 
[Vaibhav Radhakrishnan](https://github.com/Vai300)
