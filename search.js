function search_event() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('eventname');
    var key = event.keyCode
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input) || key==8) {
            x[i].style.display="none";   
        }
        else {
           x[i].style.display="list-item";			
        }
    }
	
}