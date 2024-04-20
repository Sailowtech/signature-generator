function copyHTML() {
            const html = document.getElementById("signature").outerHTML;
            navigator.clipboard.writeText(html).then(() => {
                alert('HTML code copied to clipboard!');
            }).catch(err => {
                console.error('Failed to copy: ', err);
            });
        }
		
		
		
function updateSignature(event) {
	let name = document.getElementById("fullname").value;
	let poste = document.getElementById("multiline").value;
	let mail = document.getElementById("email").value;
	let phone = document.getElementById("phone_input").value;		
	
	document.getElementById("name").textContent = name;
	document.getElementById("poste").textContent = poste;
	document.getElementById("mail").textContent = mail;
	document.getElementById("phone").textContent = phone;
        }
		
		
document.addEventListener('DOMContentLoaded', function() {
            const inputs = document.querySelectorAll('#SigForm input, #SigForm textarea');
			
			//update = (event) => updateSignature(event); 
			
            inputs.forEach(input => {
                input.addEventListener('input', updateSignature);
            });
        });
