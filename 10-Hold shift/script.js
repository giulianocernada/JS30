const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
console.log(checkboxes);

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));

let lastChecked; 
let inBetween = false;
function handleCheck(e) {
	if(e.shiftKey && this.checked){
		checkboxes.forEach(checkbox => {
			console.log(checkbox);
			if(checkbox === this || checkbox === lastChecked){
				inBetween = !inBetween;
			}
		if(inBetween){
			checkbox.checked = true;
		}
		});
	}

	lastChecked = this;
}