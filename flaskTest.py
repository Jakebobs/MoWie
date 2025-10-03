from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow requests from React

@app.route('/api/uppercase', methods=['POST'])
def uppercase():
    data = request.json
    text = data.get('text', '')
    result = text.upper()
    return jsonify({'result': result})

if __name__ == '__main__':
    app.run(debug=True, port=5000)