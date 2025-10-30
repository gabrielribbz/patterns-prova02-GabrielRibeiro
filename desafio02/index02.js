class ProjectItem {
    constructor(name) {
      this.name = name;
    }
  
    showDetails(indent = 0) {
      throw new Error("O método 'showDetails' deve ser implementado.");
    }
  
    add(item) {
      throw new Error("Não é possível adicionar itens a uma tarefa simples.");
    }
  
    remove(item) {
      throw new Error("Não é possível remover itens de uma tarefa simples.");
    }
  }
  
  class Task extends ProjectItem {
    constructor(name) {
      super(name);
    }
  
    showDetails(indent = 0) {
      console.log(`${' '.repeat(indent)}- Tarefa: ${this.name}`);
    }
  }
  
  class Project extends ProjectItem {
    constructor(name) {
      super(name);
      this.projectItems = [];
    }
  
    add(item) {
      this.projectItems.push(item);
    }
  
    remove(item) {
      this.projectItems = this.projectItems.filter(i => i !== item);
    }
  
    showDetails(indent = 0) {
      console.log(`${' '.repeat(indent)}Projeto: ${this.name}`);
      this.projectItems.forEach(item => {
        item.showDetails(indent + 2);
      });
    }
  }
  
  // --- Exemplo de Uso (Cliente) ---
  
  const t1 = new Task("Escrever documentação da API");
  const t2 = new Task("Fazer testes unitários");
  const t3 = new Task("Corrigir bug #101");
  
  const subProjetoFrontend = new Project("Refatoração do Frontend");
  subProjetoFrontend.add(t1);
  subProjetoFrontend.add(t2);
  
  const projetoPrincipal = new Project("Lançamento v2.0");
  projetoPrincipal.add(subProjetoFrontend);
  projetoPrincipal.add(t3);
  
  console.log("--- Exibindo detalhes do Projeto Principal ---");
  projetoPrincipal.showDetails();
  
  try {
      console.log("\n--- Tentando adicionar tarefa em tarefa (deve falhar) ---");
      t1.add(t2);
  } catch (e) {
      console.log(`Erro esperado: ${e.message}`);
  }