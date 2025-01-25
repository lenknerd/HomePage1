# Main application for web blog

from flask import Flask, render_template
# redirect, url_for


def create_app(test_config=None) -> Flask:
    """Create the flask app."""
    app = Flask(__name__, instance_relative_config=True)

    @app.route("/")
    @app.route("/index.html")
    def home() -> str:
        return render_template("index.html")

    @app.route("/about.html")
    def about() -> str:
        return render_template(
            "about.html",
            title="About",
            subtitle="About what? I don't know, we'll see.",
            static_img_path="assets/img/about-bg.jpg"
        )

    return app

