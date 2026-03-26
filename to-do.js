function enviar() {
    let resp = document.getElementById("resposta").value;

    if (resp.trim() === "") return;

    let tarefa = document.createElement("div");
    tarefa.classList.add("tarefa");
    //btnConcluir.classList.add("btnConcluir");
    //btnRemover.classList.add("btnRemover");  o código deu erro pois os botões ainda não existem, então é preciso adicionar a classe depois de criá-los

    let texto = document.createElement("span");
    texto.innerHTML = resp;

    let btnConcluir = document.createElement("button");
    btnConcluir.innerText = "Concluir";
    btnConcluir.classList.add("btnConcluir")
    btnConcluir.onclick = function() {
        texto.style.textDecoration = "line-through";
        texto.style.color = "grey";
    }

    let btnRemover = document.createElement("button");
    btnRemover.innerText = "Remover";
    btnRemover.classList.add("btnRemover");
    btnRemover.onclick = function() {
        tarefa.remove();
    }

    tarefa.appendChild(texto);
    tarefa.appendChild(btnConcluir);
    tarefa.appendChild(btnRemover);

    document.getElementById("tarefas").appendChild(tarefa);

    let limpar = document.getElementById("resposta");
    limpar.value = "";
}