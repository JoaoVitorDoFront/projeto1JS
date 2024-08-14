// função q adiciona tarefa, que vai ser as caixas com o nome da tarefa q o usuario denominou e o certin e o x do lado
function addTask() {
  // título da tarefa
  const taskTitle = document.querySelector("#task-title").value;
  // console.log(taskTitle);
  // o que eu fiz aq? eu criei uma função blz, e dentro dela eu criei uma variavel e selecionei ela, pelo query, e essa q eu selecionei é o input porem coloquei .value(ou seja eu vou pegar o valor q eu tiver no input), e dps eu chamei essa variavel
  if (taskTitle) {
    // clona o template
    const template = document.querySelector(".template");
    const newTask = template.cloneNode(true);
    // esse .cloneNode(true) = > ele vai clonar o html em uma nova variavel
    // console.log(newTask);
    // adiciona o título
    newTask.querySelector(".task-title").textContent = taskTitle;
    // eu peguei a minha variavel nova e selecionei por ela a classe task-title q é a span e eu peguei o conteudo de texto q ia ter nela e falei q vai ser igual ao taskTitle(variavel), q isso vai ser igual ao conteudo q eu colocar dentro do input
    // remover as classes desnecessárias(template e o hide)
    newTask.classList.remove("template");
    newTask.classList.remove("hide");
    // adiciona tarefa na lista
    const list = document.querySelector("#task-list");
    // esse appendChild é pra adicionar
    list.appendChild(newTask);
    // logo quando eu criei a tarefa eu vou adicionar o evento de remover o botao
    const removeBtn = newTask
      .querySelector(".remove-btn")
      .addEventListener("click", function () {
        removeTask(this);
        // o this se refere ao elemento, a tarefa em si, pra eu saber qual elemento eu quero remover, por isso q to me referenciando a ela
        // O THIS AQ FOI IMPRESCÍNDIVEL VISTO QUE EU ME REFERENCIEI A QUAL EU QUERO ME REMOVER, PQ EU CLIQUEI E ELE JA PERCEBEU QUAL É E JA REMOVEU IMEDIATAMENTE
      });
    //limpar o texto que sobra no input dps de eu ter clicado enter
    document.querySelector("#task-title").value = "";
    //adicionar evento de completar tarefa
    const doneBtn = newTask
      .querySelector(".done-btn")
      .addEventListener("click", function () {
        completeTask(this);
        // USEI O THIS NOVAMENTE PQ ESTOU ME REFERENCIANDO Á AQUELA TAREFA EM ESPECIFICO Q EU ACABEI DE CLICAR
      });
  }
}
// função de remover tarefa
function removeTask(task) {
  // console.log(task);
  // esse console eu coloquei pra mostrar q quando eu clico no x q seria o remove ele da certo ele mostra q ta se referindo a ele porem ele n apaga da minha tela o que eu preciso fazer é:
  task.parentNode.remove(true);
  // estou removendo o elemento pai q é a LI q eu quero remover ou seja qlqr uma das tarefas
}
// função de completar a tarefa
function completeTask(task) {
  // console.log(task);
  // mesmo caso na de cima aq, eu clico no certinho, e no console mostra q estou pegando aqle elemento porem ainda n vai apagar da tela
  const taskToComplete = task.parentNode;
  taskToComplete.classList.toggle("done");
  // se tiver com done ele tira, e se nao tiver ele coloca
  // o TOGGLE É USADO VAI VER SE O ELEMENTO TEM A CLASSE, SE N TIVER ELE COLOCA, AI SE TIVER ELE TIRA
}

// evento de adicionar tarefa
const addBtn = document.querySelector("#add-btn");

addBtn.addEventListener("click", function (e) {
  e.preventDefault();
  //quando eu clico no botao de adicionar ele n envia o formulario ele espera alguma ação de JS
  addTask();
});
