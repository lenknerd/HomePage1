# Main application for web blog

from flask import Flask, render_template, url_for
# redirect, url_for


def create_app(test_config=None) -> Flask:
    """Create the flask app."""
    app = Flask(__name__, instance_relative_config=True)

    @app.route("/")
    @app.route("/index.html")
    def home() -> str:
        return render_template(
            "index.html",
            title="Welcome!",
            subtitle="You've found David Lenkner's home page.",
            static_img_path=url_for("static", filename="assets/img/home-bg.jpg"),
        )

    @app.route("/about.html")
    def about() -> str:
        return render_template(
            "about.html",
            title="About Me",
            subtitle="A bit about me... in FAQ form.",
            static_img_path=url_for("static", filename="assets/img/about-bg.png"),
        )

    return app

