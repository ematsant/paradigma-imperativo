# API Imperativa - Todo List (Lista de Tarefas)

Esta é uma API REST desenvolvida em **Node.js** com **Express**, criada como projeto prático para a disciplina de **Paradigmas da Linguagem de Programação**. 

O objetivo principal desta API é demonstrar a aplicação prática do **Paradigma Imperativo** no desenvolvimento de software e servir de backend para o frontend da lista de tarefas.

---

## 📌 Paradigma Imperativo

Nesta API, a lógica de manipulação de dados foi construída seguindo estritamente os princípios do paradigma imperativo:
- **Estado Mutável**: Manipulação de dados na memória através de arrays e identificadores mutáveis.
- **Controle de Fluxo Explícito**: Uso de laços de repetição (`for`) e estruturas condicionais (`if`/`else`) para determinar *como* cada operação deve ser executada.
- **Alterações In-Place**: Atualização e remoção direta de elementos na memória (`push`, `splice`).

---

## 🛠️ Tecnologias Utilizadas

- **JavaScript (ES6+)**
- **Node.js** (Ambiente de execução)
- **Express.js** (Framework HTTP)
- **CORS** (Habilitação de acesso via Frontend)

---

## 🚀 Como Executar e Testar

### 1. Clonar o repositório
```bash
git clone https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO.git
cd NOME_DO_REPOSITORIO
```

### 2. Instalar as dependências
```bash
npm install
```

### 3. Iniciar o servidor da API
```bash
node server.js
```
O servidor estará rodando em `http://localhost:5000`.

### 4. Abrir e Testar o Frontend
1. Navegue até a pasta `frontend_professor/paradigmas/todo-list/`.
2. Abra o arquivo `index.html` no seu navegador.
3. Na interface do site, altere a chave de alternância no topo de **"Modo local"** para **"Modo API"**.
4. Teste criar, concluir e deletar tarefas na interface — todas as requisições serão processadas pela sua API em Node.js na porta 5000!

---

## 🌐 Endpoints da API

| Método | Rota | Descrição |
|---|---|---|
| **GET** | `/todos` | Retorna a lista de todas as tarefas |
| **GET** | `/todos/:id` | Retorna uma tarefa específica pelo ID |
| **POST** | `/todos` | Cria uma nova tarefa (Requer corpo JSON: `{"title": "..."}`) |
| **PUT** | `/todos/:id` | Atualiza o título e estado de uma tarefa existente |
| **PATCH** | `/todos/:id/complete` ou `/todos/:id/toggle` | Alterna o status de conclusão de uma tarefa |
| **DELETE** | `/todos/:id` | Remove uma tarefa da lista |

---
