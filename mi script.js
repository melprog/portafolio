function openModal(projectId) {
    var modal = document.getElementById("modal");
    var modalContent = document.getElementById("modal-content");
    
    if (projectId === 'project1') {
        modalContent.innerHTML = '<h2>Proyecto 1</h2><p>Detalles completos del proyecto 1...</p>';
    } else if (projectId === 'project2') {
        modalContent.innerHTML = '<h2>Proyecto 2</h2><p>Detalles completos del proyecto 2...</p>';
    }

    modal.style.display = "block";
}

function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}

window.onclick = function(event) {
    var modal = document.getElementById("modal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
