function criarTarefa(resp) {
    let tarefa = document.createElement("div");
    tarefa.classList.add("tarefa");

    let texto = document.createElement("span");
    texto.innerHTML = resp;

    // Se já estiver concluída
    if (resp.startsWith("[CONCLUÍDA]")) {
        texto.style.textDecoration = "line-through";
        texto.style.color = "grey";
    }

    let btnConcluir = document.createElement("button");
    btnConcluir.innerText = "Concluir";
    btnConcluir.classList.add("btnConcluir");
    btnConcluir.onclick = function() {
        texto.style.textDecoration = "line-through";
        texto.style.color = "grey";

        let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
        let index = tarefas.indexOf(resp);
        if (index !== -1) {
            tarefas[index] = "[CONCLUÍDA] " + resp.replace("[CONCLUÍDA] ", "");
            localStorage.setItem("tarefas", JSON.stringify(tarefas));
        }
    };

    let btnRemover = document.createElement("button");
    btnRemover.innerText = "Remover";
    btnRemover.classList.add("btnRemover");
    btnRemover.onclick = function() {
        tarefa.remove();
        let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
        tarefas = tarefas.filter(t => t !== resp);
        localStorage.setItem("tarefas", JSON.stringify(tarefas));
    };

    tarefa.appendChild(texto);
    tarefa.appendChild(btnConcluir);
    tarefa.appendChild(btnRemover);

    document.getElementById("tarefas").appendChild(tarefa);
}

// Função para carregar tarefas salvas
function carregarTarefas() {
    let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
    tarefas.forEach(resp => criarTarefa(resp));
}

// Função para adicionar nova tarefa
function enviar() {
    let resp = document.getElementById("resposta").value;
    if (resp.trim() === "") return;

    criarTarefa(resp);

    let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
    tarefas.push(resp);
    localStorage.setItem("tarefas", JSON.stringify(tarefas));

    document.getElementById("resposta").value = "";
}

