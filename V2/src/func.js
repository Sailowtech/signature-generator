// Func taken from Paul Gerry's repo for Coaching EPFL's signature
// See https://gist.github.com/Paul-Gy/a5315104016faac5c117bec26ec437b6
function copyResult() {
    const copyText = document.getElementById('signature')
    const range = document.createRange()
    let selection = window.getSelection()
    range.selectNode(copyText)
    selection.removeAllRanges()
    selection.addRange(range)

    try {
        if (document.execCommand('copy')) {
            alert('La signature a été copiée !')
        }
    } catch(err) {
        alert(err)
    }

    selection = window.getSelection()
    if (typeof selection.removeRange === 'function') {
        selection.removeRange(range)
    } else if (typeof selection.removeAllRanges === 'function') {
        selection.removeAllRanges()
    }
}


function updateSignature(event) {
	let name = document.getElementById("name_input").value;
	let poste = document.getElementById("post_input").value;
	let mail = document.getElementById("email_input").value;
    let phone = document.getElementById("phone_input").value;
    let phone_2 = document.getElementById("phone_input_2").value;

	if(name == "") {name = "Elena Dimitratchkova"}
	if(poste == "") {poste = "Graphic Designer | Sailowtech"}
	if(mail == "") {mail = "elena.dimitratchkova"}
	if(phone == "") {phone = "+41 76 123 45 67"}

	if(poste.includes("\n")) { console.log("replaced");poste = poste.replaceAll("\n", "<br>") }

	document.getElementById("name").textContent = name;
	document.getElementById("poste").innerHTML = poste;
	document.getElementById("mail").textContent = mail + "@sailowtech.ch";
	document.getElementById("phone").innerHTML = phone + (phone_2 != "" ? "<br>" + phone_2 :"");
}
		
		
document.addEventListener('DOMContentLoaded', function() {
            const inputs = document.querySelectorAll('input, textarea');
			
            inputs.forEach(input => {
                input.addEventListener('input', updateSignature);
            });
        });
