showNotes(); 

// If user adds a note, add it to the localStorage 
let addBtn = document.getElementById("addBtn"); 
addBtn.addEventListener("click", function(e) { 
    let addTxt = document.getElementById("addTxt"); 
    let notes = localStorage.getItem("notes"); 

    if (notes == null) notesObj = []; 
    else notesObj = JSON.parse(notes); 

    notesObj.push(addTxt.value); 
    localStorage.setItem("notes", JSON.stringify(notesObj)); 
    addTxt.value = ""; 

    showNotes(); 
}); 

// Function to show elements from localStorage 
function showNotes() { 
    let notes = localStorage.getItem("notes"); 

    if (notes == null) notesObj = []; 
    else notesObj = JSON.parse(notes); 

    let html = ""; 

    notesObj.forEach(function(element, index) { 
        html += `<div class="noteCard">
                    <div class="card-body"> 
                        <h4 class="card-title"> 
                            ${element} 
                        </h4>
                    </div>
                    <div class="btns">
                        <button id="${index}" onclick="editNote(this.id)" class="edit-note"> 
                            Edit Note 
                        </button>
                        <button id="${index}" onclick="deleteNote(this.id)" class="delete-note"> 
                            Delete Note 
                        </button>
                    </div>
                </div>`;
    }); 

    let notesElm = document.getElementById("notes"); 
    if (notesObj.length != 0) notesElm.innerHTML = html;
    else
        notesElm.innerHTML = `Nothing to show! 
        Use "Add a Note" section above to add notes.`; 
} 

// Function to delete a note 
function deleteNote(index) { 
	let notes = localStorage.getItem("notes"); 
    notesObj = JSON.parse(notes); 

	notesObj.splice(index, 1); 

	localStorage.setItem("notes", 
		JSON.stringify(notesObj)); 

	showNotes(); 
} 

// Function to edit a note 
function editNote(index) { 
	let notes = localStorage.getItem("notes"); 
    notesObj = JSON.parse(notes); 
    console.log(index);
	let text = notesObj.slice(index, 1);
    notesObj.splice(index, 1);  
    document.getElementById("addTxt").value = text;
	localStorage.setItem("notes", 
		JSON.stringify(notesObj)); 

	showNotes(); 
} 