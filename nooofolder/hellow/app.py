# Main application for web blog

from flask import Flask, render_template
# redirect, url_for


def create_app(test_config=None):
    """Create the flask app."""
    app = Flask(__name__, instance_relative_config=True)


    @app.route("/")
    def home():
        return render_template("index.html")

    return app

