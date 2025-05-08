const noteInput = document.getElementById('noteInput');
const addNoteButton = document.getElementById('addNoteButton');
const notesList = document.getElementById('notesList');
const clearNotesButton = document.getElementById('clearNotesButton');

window.onload = function () {
    // Load notes from local storage on page load
    const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    savedNotes.forEach(note => addNoteToList(note));
};

addNoteButton.addEventListener('click', function () {
    const noteText = noteInput.value.trim();
    if (noteText !== '') {
        addNoteToList(noteText);
        saveNoteToLocalStorage(noteText); // Fixed function call
        noteInput.value = ''; // Clear input field
    }
});

clearNotesButton.addEventListener('click', function () {
    notesList.innerHTML = ''; // Clear the notes list
    localStorage.removeItem('notes'); // Clear notes from local storage
});

function addNoteToList(noteText) {
    const li = document.createElement('li');
    li.textContent = noteText;
    li.style.color = '#FFFDF6';
    li.style.margin = '10px 0';
    li.style.listStyle = 'disc';
    notesList.appendChild(li);
}

function saveNoteToLocalStorage(noteText) {
    const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    savedNotes.push(noteText);
    localStorage.setItem('notes', JSON.stringify(savedNotes));
}
