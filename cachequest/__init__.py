from flask import Flask, render_template, request, jsonify

app = Flask(__name__)


@app.route("/")
def index():
    return render_template('index.html')


@app.route("/check/<int:question>", methods=['POST'])
def check(question):
    if question == 1:
        return check_answer("brownstoat")
    elif question == 2:
        return check_answer("makerbot")
    elif question == 3:
        return check_answer("jolt")
    else:
        return jsonify({"success": False}), 400


def check_answer(expected):
    data = request.get_json()
    if data is not None and "answer" in data and data["answer"].lower().strip() == expected:
        return jsonify({"success": True}), 200
    else:
        return jsonify({"success": False}), 400
