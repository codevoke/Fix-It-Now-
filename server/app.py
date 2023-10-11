from flask import Flask

from models import db
from resources import api


# create Flask application 
app = Flask(__name__)

# sql configs for app
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('PRODUCTION_DATABASE_URL')
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.config["PROPAGATE_EXCEPTIONS"] = True

# initialising our database to Flask app with fabric method
db.init_app(app)

with app.app_context():
    import models

    db.create_all()


# initialising our api to Flask app with fabric method
api.init_app(app)

#start our Flask server on port 5000
app.run()
