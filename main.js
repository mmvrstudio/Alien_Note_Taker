	function newElement() {
		let hideEmptyTxt;
		let li = document.createElement("li");
		let inputvalue = document.querySelector("#myInput").value;
		let savedNote = document.createTextNode(inputvalue);
		li.appendChild(savedNote);
		if (inputvalue === ''){
			document.querySelector("#emptytext").innerHTML= "Don't forget to write something!";
			document.querySelector("#emptytext").style.backgroundColor = "pink";
			document.querySelector("#emptytext").style.border = "1px solid";
			hideEmptyTxt = setTimeout(spanEmptytxt, 3000); 
		} else {
			document.querySelector("#myNotes").appendChild(li);
		}
		document.querySelector("#myInput").value = '';
		let spanTwo = document.createElement("span");
	    textTwo = document.createTextNode("✓");
	    spanTwo.className = "edit";
	    spanTwo.appendChild(textTwo);
	    li.appendChild(spanTwo);
		let span = document.createElement("span");
		text = document.createTextNode("\u00D7");
		span.className = "close";
		span.appendChild(text);
		li.appendChild(span);

		//Storing Notes here in this section
		let editElement = document.querySelector("#saved-notes");
		editElement = document.querySelector("#myNotes");
		
		let userVersion = editElement.innerHTML;
		// This saves the Notes in the Local Storage
		localStorage.userEdits = userVersion;

		for (i = 0; i < close.length; i++){
			close[i].onclick = function() {
				let div = this.parentElement;
				div.style.display = "none";
			}
		}
	     for (i = 0; i < edit.length; i++){
		edit[i].onclick = function() {
		let div = this.parentElement;

		// Edit Notes Here 
		let hideMessage;
		let noteEditable = document.querySelector("#myNotes").contentEditable;
		if (noteEditable == 'inherit' || noteEditable == 'false') {
			document.querySelector("#myNotes").contentEditable = true;
			textTwo.nodeValue = '✓';
		} else {
			document.querySelector("#myNotes").contentEditable = false;
			textTwo.nodeValue = ':';

			document.querySelector("#update").innerHTML = "Your changes were saved";
			document.querySelector("#update").style.backgroundColor = "lightgreen";
			document.querySelector("#update").style.border = "1px solid";
			hideMessage = setTimeout(hideIt, 3000); 
		  }
	    }
	  }
	}

	function hideIt() {
		document.querySelector("#update").innerHTML = "";
		document.querySelector("#update").style.backgroundColor = "transparent";
		document.querySelector("#update").style.border = "none";
	}
	function spanEmptytxt() {
		document.querySelector("#emptytext").innerHTML = "";
		document.querySelector("#emptytext").style.backgroundColor = "transparent";
		document.querySelector("#emptytext").style.border = "none";
	}
	// Delete Note with this
	function clearElement() {
		document.querySelector("#myInput").value = '';
	};
	let nodeList = document.getElementsByTagName("li");
	let i;
	for (i = 0; i < nodeList.length; i++){
		span = document.createElement("span");
		text = document.createTextNode("\u00D7");
		span.className = "close";
		span.appendChild(text);
		nodeList[i].appendChild(span);
	}
	let close = document.getElementsByClassName("close");
	    i;
	for (i = 0; i < close.length; i++){
		close[i].onclick = function() {
		let div = this.parentElement;
		div.style.display = "none";
	   }
	}

	// Edit the notes by clicking this button here
	let edit = document.getElementsByClassName("edit");
	i;
	let hideMessage;
	for (i = 0; i < edit.length; i++){
		edit[i].onclick = function() {
		let div = this.parentElement;
		let noteEditable = document.querySelector("#myNotes").contentEditable;
		if (noteEditable == 'inherit' || noteEditable == 'false') {
			document.querySelector("#myNotes").contentEditable = true;
			textTwo.nodeValue = '✓';
		} else {
			document.querySelector("#myNotes").contentEditable = false;
			textTwo.nodeValue = ':';
			document.querySelector("#update").innerHTML = "Your changes were saved";
			document.querySelector("#update").style.backgroundColor = "lightgreen";
			document.querySelector("#update").style.border = "1px solid";
			hideMessage = setTimeout(hideIt, 3000);
		}
	  }
	}

	// The Edit button for each note is here
	nodeList = document.getElementsByTagName("li");
	i;
	for (i = 0; i < nodeList.length; i++){
	  spanTwo = createElement("span");
	  textTwo = document.createTextNode("✓");
	  spanTwo.className = "edit";
	  spanTwo.appendChild(text);
	  nodeList[i].appendChild(span);
	}

	// Here I can check previous saved notes
	function checkEdits() {
		let textTwo = document.createTextNode("✓");
		if(localStorage.userEdits != null)
			document.querySelector("#saved-notes").innerHTML = localStorage.userEdits;
		
		
		for (i = 0; i < close.length; i++){
			close[i].onclick = function() {
				let div = this.parentElement;
				div.style.display = "none";
			}
		}
	    for (i = 0; i < edit.length; i++){
		edit[i].onclick = function() {
		let div = this.parentElement;
		
		let hideMessage;
		let noteEditable = document.querySelector("#myNotes, #saved-notes").contentEditable;
		if (noteEditable == 'inherit' || noteEditable == 'false') {
			document.querySelector("#myNotes").contentEditable = true;
			document.querySelector("#saved-notes").contentEditable = true;
			textTwo.nodeValue = '✓';
		} else {
			document.querySelector("#myNotes").contentEditable = false;
			document.querySelector("#saved-notes").contentEditable = false;
			textTwo.nodeValue = ':';
			document.querySelector("#update").innerHTML = "Changes saved";
			document.querySelector("#update").style.backgroundColor = "lightgreen";
			document.querySelector("#update").style.border = "1px solid";
			hideMessage = setTimeout(hideIt, 3000); // hide message in 3secs
		  }
	    }
	  }
	}