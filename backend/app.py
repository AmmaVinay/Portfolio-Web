from flask import Flask, render_template, request, jsonify
from pymongo import MongoClient
from flask_bcrypt import Bcrypt
from flask_cors import CORS
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity

app = Flask(__name__)
CORS(app)
bcrypt = Bcrypt(app)
jwt = JWTManager(app)
app.config['JWT_SECRET_KEY'] = 'your_secret_key'  # Add your secret key here

# MongoDB setup
client = MongoClient('mongodb://localhost:27017/')
db = client['MyPortfolio']
user_collection = db['Users']
contact_collection = db['ContactInfo']

# Route to serve the index.html file for all routes except /contact
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def index(path):
    return render_template('index.html')

# Route to handle contact form submission
@app.route('/contact', methods=['POST'])
def contact():
    if request.method == 'POST':
        data = request.json  # Use request.json to directly parse JSON data

        name = data.get('name')
        email = data.get('email')
        description = data.get('description')

        # Insert data into MongoDB
        contact_collection.insert_one({'name': name, 'email': email, 'description': description})

        return jsonify({"message": "Form submitted successfully!"}), 200

@app.route('/signup', methods=['POST'])
def signup():
    try:
        data = request.json
        name = data.get('name')
        email = data.get('email')
        password = data.get('password')

        # Check if user already exists
        if user_collection.find_one({'email': email}):
            return jsonify({'success': False,'message': 'User Already Exists'}), 400

        # Hash the password before storing it
        hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')

        # Insert new user document with hashed password
        user_collection.insert_one({'name': name, 'email': email, 'password': hashed_password})
        return jsonify({"success": True, "message": "User registered successfully!"}), 200
    except Exception as e:
        return jsonify({"success": False, "message": "Error signing up", "error": str(e)}), 500

@app.route('/login', methods=['POST'])
def login():
    try:
        data = request.json
        email = data.get('email')
        password = data.get('password')
        user = user_collection.find_one({'email': email})

        if user and bcrypt.check_password_hash(user['password'], password):
            access_token = create_access_token(identity=email)
            return jsonify({"success": True, "message": "Login successful"}), 200
        return jsonify({"success": False, "message": "Invalid credentials"}), 401
    except Exception as e:
        return jsonify({"success": False, "message": "Error logging in", "error": str(e)}), 500
# Example protected route that requires JWT authentication
@app.route('/protected')
@jwt_required()
def protected():
    current_user = get_jwt_identity()
    return jsonify(logged_in_as=current_user), 200

if __name__ == "__main__":
    app.run(debug=True)
