import AppActions from '../actions/AppActions';

export default {
  addNote(note) {
    return $.ajax({
      url: "https://api.mlab.com/api/1/databases/stickypad/collections/notes?apiKey=EfYYMThabdspT0pqbw6RMhE5mE17T98J",
      data: JSON.stringify(note),
      type: "POST",
      contentType: "application/json"
    }).done(() => {
      this.getNotes();
    });
  },

  getNotes() {
    $.ajax({
      url: "https://api.mlab.com/api/1/databases/stickypad/collections/notes?apiKey=EfYYMThabdspT0pqbw6RMhE5mE17T98J",
      dataType: "json",
      cache: false,
      success: (data) => {
        AppActions.receiveNotes(data);
      },
      error: (xhr, status, err) => {
        console.error(err);
      }
    });
  },

  removeNote(noteId) {
    $.ajax({
      url: "https://api.mlab.com/api/1/databases/stickypad/collections/notes/" + noteId + "?apiKey=EfYYMThabdspT0pqbw6RMhE5mE17T98J",
      type: "DELETE",
      async: true,
      timeout: 300000,
      success: (data) => {
        console.log('Note deleted');
      },
      error: (xhr, status, err) => {
        console.error(err);
      }
    });
  }
}