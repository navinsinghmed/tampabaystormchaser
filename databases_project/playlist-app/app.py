from flask import Flask, redirect, render_template
from flask_debugtoolbar import DebugToolbarExtension

from models import db, connect_db, Playlist, Song, PlaylistSong
from forms import NewSongForPlaylistForm, SongForm, PlaylistForm

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///playlist-app'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True

connect_db(app)
db.create_all()

app.config['SECRET_KEY'] = "hurricane2023"

debug = DebugToolbarExtension(app)

@app.route("/")
def root():
    """Homepage: redirect to /playlists"""
    return redirect("/playlists")

#playlist routes

@app.route("/playlists")
def show_all_playlists():
    """Return a list of playlists"""
    playlists = Playlist.query.all()
    return render_template("playlists.html", playlists=playlists)

@app.route("/playlists/<int:playlist_id>")
def show_playlist(playlist_id):
    """Show detail on specific playlist."""
    
    # ADD the necessary code here for route to work
    playlist = Playlist.query.get_or_404(playlist_id)
    return render_template("playlist.html", playlist=playlist)
    
@app.route("/playlists/add", methods=["GET", "POST"])
def add_playlist():
     """Handle add-playlist form:
     - if form not filled out or invalid: show form
     - if valid: add playlist to SQLA and redirect to list-of-playlists
     """

     # ADD THE NECESSARY CODE HERE FOR THIS ROUTE TO WORK
     form = PlaylistForm()
     if form.validate_on_submit():
        name = form.name.data
        description = form.description.data
        
        playlist = Playlist(name=name, description=description)
        
        db.session.add(playlist)
        db.session.commit()
        
        return redirect("/playlists")
        
     else:
        
        return render_template("new_playlist.html", form=form)
        
# Song Routes
    
@app.route("/songs")
def show_all_songs():
    """SHow list of songs."""
    
    songs = Song.query.all()
    return render_template("songs.html", songs=songs)

@app.route("/songs/<int:song_id>")
def show_song(song_id):
    """Return a specific song"""
    # add necessary code here for route to work
    song = Song.query.get(song_id)
    return render_template("song.html", song=song)
    
@app.route("/songs/add", methods=["GET","POST"])
def add_song():
    """Handle add-song form:
    - if form not filled out or invalid: show form
    - if valid: add playlist to SQLA and redirect to list-of-songs
    """

    # ADD THE NECESSARY CODE HERE FOR THIS ROUTE TO WORK
    form = SongForm()
    
    if form.validate_on_submit():
        title = form.title.data
        artist = form.artist.data
        
        song = Song(title=title, artist=artist)
        
        db.session.add(song)
        db.session.commit()
        
        return redirect("/songs")
    
    else:
        return render_template("new_song.html", form=form)
    

@app.route("/playlists/<int:playlist_id>/add-song", methods=["GET", "POST"])
def add_song_to_playlist(playlist_id):
    """Add a playlist and redirect to list."""

    # BONUS - ADD THE NECESSARY CODE HERE FOR THIS ROUTE TO WORK

    # THE SOLUTION TO THIS IS IN A HINT IN THE ASSESSMENT INSTRUCTIONS
        
    playlist = Playlist.query.get_or_404(playlist_id)
    form = NewSongForPlaylistForm()
    
    #restrict form to songs not already on playlist
    already_on_playlist = [x.id for x in playlist.songs]
    form.song.choices = (db.session.query(Song.id, Song.title).filter(Song.id.notin_(already_on_playlist)).all())
    
    if form.validate_on_submit():    
        # ADD THE NECESSARY CODE HERE FOR THIS ROUTE TO WORK
        playlist_song = PlaylistSong(song_id=form.song.data, playlist_id=playlist_id)
        
        db.session.add(playlist_song)
        db.session.commit()
        return redirect(f"/playlists/{playlist_id}")
    
    return render_template("add_song_to_playlist.html", playlist=playlist, form=form)
    
    
    