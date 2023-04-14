"""Flask app for Cupcakes"""

from flask import Flask, request, jsonify, render_template
from models import db, connect_db, Cupcake

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///cupcakes_db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = "hurricane2023"

connect_db(app)

@app.route("/")
def root():
    """Render Homepage."""
    return render_template("index.html")

@app.route("/api/cupcakes")
def list_cupcakes():
    """Return all cupcakes in system"""
    """Return JSON like: {cupcakes: [{id, flavor, rating, size, image}, ...]}"""
    cupcakes=[cupcake.to_dict() for cupcake in Cupcake.query.all()]
    return jsonify(cupcakes=cupcakes)

@app.route("/api/cupcakes", methods=["POST"])
def create_cupcake():
    """Add cupcake, return data about cupcake"""
    data = request.json
    cupcake = Cupcake(
        flavor=data['flavor'],
        rating=data['rating'],
        size=data['size'],
        image=data['image'] or None)
        
    db.session.add(cupcake)
    db.session.commit()
    
    #post requests return HTTP status of 201 CREATED
    return (jsonify(cupcake=cupcake.to_dict()), 201)

@app.route("/api/cupcakes/<int:cupcake_id>", methods=["PATCH"])
def update_cupcake(cupcake_id):
    """Update cupcake from data in request, return updated data"""
    data = request.json
    cupcake = Cupcake.query.get_or_404(cupcake_id)
    
    cupcake.flavor = data['flavor']
    cupcake.rating = data['rating']
    cupcake.size = data['size']
    cupcake.image = data['image']
    
    db.session.add(cupcake)
    db.session.commit()
    
    return jsonify(cupcake=cupcake.to_dict())
    
@app.route("/api/cupcakes/<int:cupcake_id>", methods=["DELETE"])
def remove_cupcake(cupcake_id):
    """Delete cupcake and return confirmation message."""
    cupcake = Cupcake.query.get_or_404(cupcake_id) 
    db.session.delete(cupcake)
    db.session.commit
    
    return jsonify(message="Deleted") 
  
    