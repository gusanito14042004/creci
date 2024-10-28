function addEvent() {
    const eventInput = document.getElementById("eventInput");
    const eventList = document.getElementById("eventList");
    
    if (eventInput.value) {
        const li = document.createElement("li");
        li.textContent = eventInput.value;
        li.className = 'event-item';
        li.onclick = () => li.remove(); // Permite eliminar el evento al hacer clic
        eventList.appendChild(li);
        eventInput.value = "";
    } else {
        alert("Por favor, ingresa un evento.");
    }
}

function addHealthRecord() {
    const peso = document.getElementById("peso").value;
    const altura = document.getElementById("altura").value;
    const vacuna = document.getElementById("vacuna").value;
    const healthList = document.getElementById("healthList");

    if (peso && altura && vacuna) {
        const li = document.createElement("li");
        li.textContent = Peso: ${peso} kg, Altura: ${altura} cm, Vacuna: ${vacuna};
        li.className = 'health-item';
        li.onclick = () => li.remove(); // Permite eliminar el registro de salud al hacer clic
        healthList.appendChild(li);
        document.getElementById("peso").value = "";
        document.getElementById("altura").value = "";
        document.getElementById("vacuna").value = "";
    } else {
        alert("Por favor, completa todos los campos.");
    }
}