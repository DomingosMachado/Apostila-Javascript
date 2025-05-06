// Espera até que todo o conteúdo da página carregue
document.addEventListener('DOMContentLoaded', () => {
    // Configuração do tema (claro/escuro)
    setupThemeToggle();
    
    // Configuração das abas
    setupTabs();
    
    // Configuração do accordion
    setupAccordion();
    
    // Configuração das demonstrações interativas
    setupDemos();
    
    // Configuração dos exemplos interativos
    setupVariablesExample();
    setupCalculationExample();
    setupEvenOddExample();
    setupPersonExample();
    
    // Configuração dos exemplos do DOM
    setupDomExamples();
    
    // Configuração dos exemplos práticos
    setupFormValidation();
    setupCounter();
    
    // Configuração dos exemplos avançados
    setupAsyncExample();
    setupNotesExample();
    setupFetchExample();
    
    // Configuração do playground de código
    setupCodePlayground();
    
    // Animação de elementos na rolagem
    setupScrollAnimation();
  });
  
  // FUNÇÕES DE CONFIGURAÇÕES
  
  // Configuração do alternador de tema
  function setupThemeToggle() {
    const themeToggle = document.getElementById('tema-toggle');
    const icon = themeToggle.querySelector('i');
    
    // Verifica se há um tema salvo
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.body.setAttribute('data-theme', 'dark');
      icon.classList.replace('fa-moon', 'fa-sun');
    }
    
    themeToggle.addEventListener('click', () => {
      // Troca o tema
      if (document.body.getAttribute('data-theme') === 'dark') {
        document.body.removeAttribute('data-theme');
        icon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme', 'light');
      } else {
        document.body.setAttribute('data-theme', 'dark');
        icon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'dark');
      }
    });
  }
  
  // Configuração de abas
  function setupTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    
    tabButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Remove a classe active de todos os botões
        tabButtons.forEach(btn => btn.classList.remove('active'));
        
        // Adiciona a classe active ao botão clicado
        button.classList.add('active');
        
        // Oculta todos os painéis de conteúdo das abas
        const tabPanes = document.querySelectorAll('.tab-pane');
        tabPanes.forEach(pane => pane.classList.remove('active'));
        
        // Mostra o painel correspondente ao botão clicado
        const tabId = button.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
      });
    });
  }
  
  // Configuração do accordion
  function setupAccordion() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
      header.addEventListener('click', () => {
        // Toggle da classe active no item do accordion
        const accordionItem = header.parentElement;
        accordionItem.classList.toggle('active');
      });
    });
  }
  
  // EXEMPLOS INTERATIVOS
  
  // Configuração das demonstrações
  function setupDemos() {
    const demoBtn = document.getElementById('demo-btn');
    const demoOutput = document.getElementById('demo-output');
    
    if (demoBtn && demoOutput) {
      demoBtn.addEventListener('click', () => {
        demoOutput.innerHTML = 'Olá! JavaScript está funcionando nesta página!';
        demoOutput.classList.add('highlight');
        
        setTimeout(() => {
          demoOutput.classList.remove('highlight');
        }, 1500);
      });
    }
  }
  
  // Exemplo de variáveis
  function setupVariablesExample() {
    const createVariableBtn = document.getElementById('create-variable');
    const variableType = document.getElementById('variable-type');
    const variableName = document.getElementById('variable-name');
    const variableValue = document.getElementById('variable-value');
    const variableOutput = document.getElementById('variable-output');
    
    if (createVariableBtn) {
      createVariableBtn.addEventListener('click', () => {
        const type = variableType.value;
        const name = variableName.value;
        const value = variableValue.value;
        
        if (!name || !value) {
          variableOutput.innerHTML = 'Por favor, preencha todos os campos.';
          variableOutput.classList.add('console-error');
          return;
        }
        
        // Cria o código JavaScript que vai ser executado
        let code = '';
        if (type === 'var') {
          code = `var ${name} = ${isNaN(value) ? `"${value}"` : value};`;
        } else if (type === 'let') {
          code = `let ${name} = ${isNaN(value) ? `"${value}"` : value};`;
        } else {
          code = `const ${name} = ${isNaN(value) ? `"${value}"` : value};`;
        }
        
        variableOutput.innerHTML = `
          <div>// Declaração</div>
          <div>${code}</div>
          <div>// Valor armazenado</div>
          <div>${name} = ${isNaN(value) ? `"${value}"` : value}</div>
          <div>// Tipo</div>
          <div>typeof ${name} = ${isNaN(value) ? '"string"' : '"number"'}</div>
        `;
        variableOutput.classList.remove('console-error');
      });
    }
  }
  
  // Exemplo de cálculo com funções
  function setupCalculationExample() {
    const calculateBtn = document.getElementById('calculate-sum');
    const num1Input = document.getElementById('num1');
    const num2Input = document.getElementById('num2');
    const sumOutput = document.getElementById('sum-output');
    
    if (calculateBtn) {
      calculateBtn.addEventListener('click', () => {
        const num1 = parseFloat(num1Input.value);
        const num2 = parseFloat(num2Input.value);
        
        if (isNaN(num1) || isNaN(num2)) {
          sumOutput.innerHTML = 'Por favor, digite números válidos.';
          sumOutput.classList.add('console-error');
          return;
        }
        
        // Função tradicional
        function somar(a, b) {
          return a + b;
        }
        
        // Arrow function
        const somarArrow = (a, b) => a + b;
        
        // Exibe o resultado
        sumOutput.innerHTML = `
          <div>// Função tradicional</div>
          <div>somar(${num1}, ${num2}) = ${somar(num1, num2)}</div>
          <div>// Arrow function</div>
          <div>somarArrow(${num1}, ${num2}) = ${somarArrow(num1, num2)}</div>
        `;
        sumOutput.classList.remove('console-error');
      });
    }
  }
  
  // Exemplo para verificar se um número é par ou ímpar
  function setupEvenOddExample() {
    const checkBtn = document.getElementById('check-even-odd');
    const numberInput = document.getElementById('check-number');
    const outputDiv = document.getElementById('even-odd-output');
    
    if (checkBtn) {
      checkBtn.addEventListener('click', () => {
        const num = parseInt(numberInput.value);
        
        if (isNaN(num)) {
          outputDiv.innerHTML = 'Por favor, digite um número válido.';
          outputDiv.classList.add('console-error');
          return;
        }
        
        // Verifica se é par ou ímpar
        const result = num % 2 === 0 ? "par" : "ímpar";
        
        outputDiv.innerHTML = `
          <div>// Condição</div>
          <div>if (${num} % 2 === 0) { ... }</div>
          <div>// Resultado</div>
          <div>O número ${num} é ${result}.</div>
          <div>// Usando operador ternário</div>
          <div>const resultado = ${num} % 2 === 0 ? "par" : "ímpar";</div>
        `;
        outputDiv.classList.remove('console-error');
      });
    }
  }
  
  // Exemplo de criação de objetos
  function setupPersonExample() {
    const createBtn = document.getElementById('create-person');
    const nameInput = document.getElementById('person-name');
    const ageInput = document.getElementById('person-age');
    const jobInput = document.getElementById('person-job');
    const outputDiv = document.getElementById('person-output');
    
    if (createBtn) {
      createBtn.addEventListener('click', () => {
        const name = nameInput.value;
        const age = parseInt(ageInput.value);
        const job = jobInput.value;
        
        if (!name || isNaN(age) || !job) {
          outputDiv.innerHTML = 'Por favor, preencha todos os campos corretamente.';
          outputDiv.classList.add('console-error');
          return;
        }
        
        // Cria o objeto pessoa
        const pessoa = {
          nome: name,
          idade: age,
          profissao: job,
          apresentar() {
            return `Olá, sou ${this.nome}, tenho ${this.idade} anos e trabalho como ${this.profissao}.`;
          }
        };
        
        outputDiv.innerHTML = `
          <div>// Objeto criado</div>
          <div>const pessoa = {</div>
          <div>&nbsp;&nbsp;nome: "${pessoa.nome}",</div>
          <div>&nbsp;&nbsp;idade: ${pessoa.idade},</div>
          <div>&nbsp;&nbsp;profissao: "${pessoa.profissao}",</div>
          <div>&nbsp;&nbsp;apresentar() { ... }</div>
          <div>};</div>
          <div>// Acessando propriedades</div>
          <div>pessoa.nome = "${pessoa.nome}"</div>
          <div>// Chamando método</div>
          <div>pessoa.apresentar() = "${pessoa.apresentar()}"</div>
        `;
        outputDiv.classList.remove('console-error');
      });
    }
  }
  
  // Exemplos de manipulação do DOM
  function setupDomExamples() {
    const changeTextBtn = document.getElementById('change-text');
    const changeColorBtn = document.getElementById('change-color');
    const addElementBtn = document.getElementById('add-element');
    const domTarget = document.getElementById('dom-target');
    const domPlayground = document.getElementById('dom-playground');
    
    if (changeTextBtn && domTarget) {
      changeTextBtn.addEventListener('click', () => {
        domTarget.textContent = 'O texto foi modificado via JavaScript!';
      });
    }
    
    if (changeColorBtn && domTarget) {
      changeColorBtn.addEventListener('click', () => {
        // Alterna as cores
        if (domTarget.style.color === 'var(--accent-color)' || domTarget.style.color === '') {
          domTarget.style.color = 'var(--highlight-color)';
        } else {
          domTarget.style.color = 'var(--accent-color)';
        }
      });
    }
    
    if (addElementBtn && domPlayground) {
      addElementBtn.addEventListener('click', () => {
        // Cria um novo elemento
        const newElement = document.createElement('div');
        newElement.textContent = 'Novo elemento criado dinamicamente';
        newElement.classList.add('new-element');
        
        // Adiciona o elemento ao playground
        domPlayground.appendChild(newElement);
      });
    }
  }
  
  // Exemplo de validação de formulário
  function setupFormValidation() {
    const validateBtn = document.getElementById('validate-form');
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const usernameError = document.getElementById('username-error');
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');
    
    if (validateBtn) {
      validateBtn.addEventListener('click', () => {
        let isValid = true;
        
        // Validação do nome de usuário
        if (!usernameInput.value || usernameInput.value.length < 3) {
          usernameError.textContent = 'O nome de usuário deve ter pelo menos 3 caracteres.';
          usernameInput.classList.add('invalid');
          isValid = false;
        } else {
          usernameError.textContent = '';
          usernameInput.classList.remove('invalid');
        }
        
        // Validação do email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailInput.value || !emailRegex.test(emailInput.value)) {
          emailError.textContent = 'Digite um email válido.';
          emailInput.classList.add('invalid');
          isValid = false;
        } else {
          emailError.textContent = '';
          emailInput.classList.remove('invalid');
        }
        
        // Validação da senha
        if (!passwordInput.value || passwordInput.value.length < 6) {
          passwordError.textContent = 'A senha deve ter pelo menos 6 caracteres.';
          passwordInput.classList.add('invalid');
          isValid = false;
        } else {
          passwordError.textContent = '';
          passwordInput.classList.remove('invalid');
        }
        
        // Exibe mensagem de sucesso se tudo estiver válido
        if (isValid) {
          alert('Formulário válido! Dados enviados com sucesso.');
        }
      });
    }
  }
  
  // Exemplo de contador com localStorage
  function setupCounter() {
    const counterValue = document.getElementById('counter-value');
    const incrementBtn = document.getElementById('increment');
    const decrementBtn = document.getElementById('decrement');
    const resetBtn = document.getElementById('reset');
    
    if (counterValue) {
      // Recupera o valor do contador do localStorage
      let count = localStorage.getItem('counter') ? parseInt(localStorage.getItem('counter')) : 0;
      counterValue.textContent = count;
      
      // Função para atualizar o contador
      function updateCounter(newValue) {
        count = newValue;
        counterValue.textContent = count;
        localStorage.setItem('counter', count);
      }
      
      // Adiciona os event listeners
      if (incrementBtn) {
        incrementBtn.addEventListener('click', () => {
          updateCounter(count + 1);
        });
      }
      
      if (decrementBtn) {
        decrementBtn.addEventListener('click', () => {
          updateCounter(count - 1);
        });
      }
      
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          updateCounter(0);
        });
      }
    }
  }
  
  // Exemplo de programação assíncrona
  function setupAsyncExample() {
    const asyncBtn = document.getElementById('async-demo');
    const asyncOutput = document.getElementById('async-output');
    
    if (asyncBtn && asyncOutput) {
      asyncBtn.addEventListener('click', () => {
        asyncOutput.innerHTML = 'Buscando dados...';
        
        // Simula uma chamada assíncrona
        setTimeout(() => {
          const mockData = {
            usuario: {
              id: 1,
              nome: 'Ana Silva',
              email: 'ana@exemplo.com'
            },
            status: 'online',
            ultimoAcesso: '2025-05-06T10:30:00'
          };
          
          asyncOutput.innerHTML = `
            <div>// Promise resolvida</div>
            <div>// Dados recebidos:</div>
            <div>usuario: { id: ${mockData.usuario.id}, nome: "${mockData.usuario.nome}", email: "${mockData.usuario.email}" }</div>
            <div>status: "${mockData.status}"</div>
            <div>ultimoAcesso: "${mockData.ultimoAcesso}"</div>
          `;
        }, 1500);
      });
    }
  }
  
  // Exemplo de armazenamento no navegador
  function setupNotesExample() {
    const saveBtn = document.getElementById('save-note');
    const noteText = document.getElementById('note-text');
    const noteOutput = document.getElementById('note-output');
    
    if (saveBtn && noteText && noteOutput) {
      // Verifica se há uma nota salva
      const savedNote = localStorage.getItem('userNote');
      if (savedNote) {
        noteText.value = savedNote;
        noteOutput.innerHTML = `
          <div>// Nota recuperada do localStorage:</div>
          <div>"${savedNote}"</div>
        `;
      }
      
      saveBtn.addEventListener('click', () => {
        const note = noteText.value;
        
        if (!note) {
          noteOutput.innerHTML = 'Por favor, digite uma nota para salvar.';
          noteOutput.classList.add('console-error');
          return;
        }
        
        // Salva a nota no localStorage
        localStorage.setItem('userNote', note);
        
        noteOutput.innerHTML = `
          <div>// Nota salva com sucesso!</div>
          <div>localStorage.setItem('userNote', "${note}");</div>
          <div>// Recuperar a nota:</div>
          <div>const nota = localStorage.getItem('userNote');</div>
        `;
        noteOutput.classList.remove('console-error');
      });
    }
  }
  
  // Exemplo de consumo de API
  function setupFetchExample() {
    const fetchBtn = document.getElementById('fetch-users');
    const usersOutput = document.getElementById('users-output');
    
    if (fetchBtn && usersOutput) {
      fetchBtn.addEventListener('click', () => {
        usersOutput.innerHTML = 'Buscando usuários...';
        
        // URL da API JSONPlaceholder
        const apiUrl = 'https://jsonplaceholder.typicode.com/users?_limit=3';
        
        // Busca os dados usando fetch
        fetch(apiUrl)
          .then(response => {
            if (!response.ok) {
              throw new Error('Erro ao buscar usuários');
            }
            return response.json();
          })
          .then(users => {
            let output = `<div>// Dados obtidos via API:</div>`;
            users.forEach(user => {
              output += `
                <div class="user-card">
                  <div>Nome: ${user.name}</div>
                  <div>Email: ${user.email}</div>
                  <div>Empresa: ${user.company.name}</div>
                </div>
              `;
            });
            usersOutput.innerHTML = output;
          })
          .catch(error => {
            usersOutput.innerHTML = `Erro: ${error.message}`;
            usersOutput.classList.add('console-error');
          });
      });
    }
  }
  
  // Configuração do playground de código
  function setupCodePlayground() {
    const runBtn = document.getElementById('run-code');
    const codeInput = document.getElementById('code-input');
    const consoleOutput = document.getElementById('console-output');
    const clearConsoleBtn = document.getElementById('clear-console');
    
    if (runBtn && codeInput && consoleOutput) {
      // Sobrescreve o console.log para capturar saídas
      const originalConsoleLog = console.log;
      console.log = function(...args) {
        originalConsoleLog.apply(console, args);
        
        // Adiciona a saída ao elemento consoleOutput
        const output = args.map(arg => {
          if (typeof arg === 'object') {
            return JSON.stringify(arg, null, 2);
          }
          return String(arg);
        }).join(' ');
        
        const outputLine = document.createElement('div');
        outputLine.classList.add('console-line');
        outputLine.textContent = output;
        consoleOutput.appendChild(outputLine);
      };
      
      // Sobrescreve console.error
      const originalConsoleError = console.error;
      console.error = function(...args) {
        originalConsoleError.apply(console, args);
        
        const output = args.map(arg => String(arg)).join(' ');
        const outputLine = document.createElement('div');
        outputLine.classList.add('console-line', 'console-error');
        outputLine.textContent = output;
        consoleOutput.appendChild(outputLine);
      };
      
      // Executa o código do playground
      runBtn.addEventListener('click', () => {
        try {
          // Limpa o console antes de executar
          consoleOutput.innerHTML = '';
          
          // Adiciona "console.log" automaticamente se não estiver presente
          let code = codeInput.value;
          if (!code.includes('console.log') && !code.includes('console.error') && !code.includes('alert')) {
            // Tenta capturar o resultado final
            code = `try { 
              const result = eval(\`${code}\`); 
              if (result !== undefined) console.log(result); 
            } catch (error) { 
              console.error(error.message); 
            }`;
          }
          
          // Executa o código
          eval(code);
        } catch (error) {
          console.error(`Erro: ${error.message}`);
        }
      });
      
      // Limpa o console
      if (clearConsoleBtn) {
        clearConsoleBtn.addEventListener('click', () => {
          consoleOutput.innerHTML = '';
        });
      }
    }
  }
  
  // Animação de elementos na rolagem
  function setupScrollAnimation() {
    const sections = document.querySelectorAll('.section');
    
    // Função para verificar se um elemento está no viewport
    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.75 &&
        rect.bottom >= 0
      );
    }
    
    // Aplica as animações
    function checkVisibility() {
      sections.forEach(section => {
        if (isInViewport(section) && !section.classList.contains('visible')) {
          section.classList.add('visible');
        }
      });
    }
    
    // Verifica a visibilidade inicial
    checkVisibility();
    
    // Adiciona o listener para a rolagem
    window.addEventListener('scroll', checkVisibility);
  }