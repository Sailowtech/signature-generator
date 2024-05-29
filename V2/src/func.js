function copyHTML() {
            const html = document.getElementById("signature").outerHTML;
            navigator.clipboard.writeText(html).then(() => {
                alert('HTML code copied to clipboard!');
            }).catch(err => {
                console.error('Failed to copy: ', err);
            });
        }
		
		
		
function updateSignature(event) {
	let name = document.getElementById("name_input").value;
	let poste = document.getElementById("post_input").value;
	let mail = document.getElementById("email_input").value;
    let phone = document.getElementById("phone_input").value;

	if(name == "") {name = "Elena Dimitratchkova"}
	if(poste == "") {poste = "Graphic Designer | Sailowtech"}
	if(mail == "") {mail = "elena.dimitratchkova"}
	if(phone == "") {phone = "+41 76 123 45 67"}

	document.getElementById("name").textContent = name;
	document.getElementById("poste").textContent = poste;
	document.getElementById("mail").textContent = mail + "@sailowtech.ch";
	document.getElementById("phone").textContent = phone;
}
		
		
document.addEventListener('DOMContentLoaded', function() {
            const inputs = document.querySelectorAll('input, textarea');
			
            inputs.forEach(input => {
                input.addEventListener('input', updateSignature);
            });
        });
