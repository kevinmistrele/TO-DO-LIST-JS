const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const listaCompleta = document.querySelector('.list-tasks')


let minhaListaDeItens = []

function addNewTasks(){
    minhaListaDeItens.push({
        tarefa: input.value,
        concluida: false
    })

    input.value = ''

    showTasks()
}

function showTasks(){

    let novaLi = ''

    minhaListaDeItens.forEach((item, index) => {
        novaLi = novaLi + `
        
            <li class="task ${item.concluida && "done"}">
                <img src="./img/checked.png" alt="check-na-tarefa" onclick="concluirTarefa(${index})">
                <p>${item.tarefa}</p>
                <img src="./img/trash.png" alt="tarefa-para-lixo" onclick="deletarItem(${index})">
            </li>
            
            `
   })


    listaCompleta.innerHTML = novaLi

}

function concluirTarefa(index){
    minhaListaDeItens[index].concluida = !minhaListaDeItens[index].concluida

    showTasks()
}



function deletarItem(index){
    minhaListaDeItens.splice(index, 1)
    
    showTasks()
}

button.addEventListener('click', addNewTasks)