let mensagens = [];
let participantes = [];
let nome = "Atendente: ";
let destinatario = " ";
let tipoMensagem = "message";
let buscarMensagens = true;
let idClient = 123456;

perguntarNome();

function perguntarNome() {
  test = prompt("Digite o cpf ou unidade comsumidora do cliente");
  //dadoCliente();
}

function dadoCliente() {
  const dados = { infoClient: info };
  const requisicao = axios.post("http://localhost:5000/clients", dados);
  requisicao.then(entrarNaSala).catch(perguntarNome);
}

function entrarNaSala() {
  //carregarMensagens();
  //carregarParticipantes();
  //agendarAtualizacaoDeMensagens();
  //agendarAtualizacaoDeParticipantes();
  //agendarAtualizacaoDeStatus();
}

// function carregarMensagens() {
//   if (!buscarMensagens) return;

//   const requisicao = axios.get("http://localhost:5000/messages?limit=50", {
//     headers: {
//       User: nome
//     }
//   });
//   requisicao.then(processarMensagens);
// }

// function carregarParticipantes() {
//   const requisicao = axios.get("http://localhost:5000/participants", {
//     headers: {
//       User: nome
//     }
//   });
//   requisicao.then(processarParticipantes);
// }

// function agendarAtualizacaoDeMensagens() {
//   setInterval(carregarMensagens, 3000);
// }

// function agendarAtualizacaoDeParticipantes() {
//   setInterval(carregarParticipantes, 10000);
// }

// function agendarAtualizacaoDeStatus() {
//   setInterval(atualizarStatus, 5000);
// }

// function atualizarStatus() {
//   axios.post("http://localhost:5000/status", {}, {
//     headers: {
//       User: nome
//     }
//   });
// }

// function processarMensagens(resposta) {
//   mensagens = [];

//   for (let i = 0; i < resposta.data.length; i++) {
//     const mensagem = resposta.data[i];
//     console.log(mensagem)
//     mensagens.push(mensagem);
//   }

//   renderizarMensagens();
// }

// function processarParticipantes(resposta) {
//   participantes = resposta.data;

//   const todos = { name: "Todos" };
//   participantes.unshift(todos);

//   renderizarParticipantes();
// }

function enviarMensagemAudio() {
  const input = document.querySelector(".input-mensagem");
  const texto = input.value;
  input.value = "";

  if(texto === "") return;
   
  const dados = {
    to: destinatario,
    text: texto,
    type: tipoMensagem
  };

  mensagens.push({
    from: nome,
    ...dados
  });
  renderizarMensagens();

  const requisicao = axios.post("http://localhost:5000/messages", dados, {
    headers: {
      User: nome
    }
  });

  requisicao.catch(); //todo tem que ver como arregar a tela para receber a mensagem da api, usar a func atualizarPagina, mas tem que tirar o promp
}
function enviarMensagem() {
  const input = document.querySelector(".input-mensagem");
  const texto = input.value;
  input.value = "";
  if (texto === "") return;

  const dados = {
    to: destinatario,
    text: texto,
    type: tipoMensagem
  };

  mensagens.push({
    from: nome,
    ...dados
  });

  renderizarMensagens();

  getToken();

  async function getToken() {
    try {
      const formData = new FormData();
      formData.append('id_cliente', idClient);

      const token = await axios.post("http://localhost:5000/new_session", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      const formData2 = new FormData();
      formData2.append('token', token.data);
      formData2.append('message', dados.text);

      const message = await axios.post("http://localhost:5000/send_message", formData2, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log(token.data);
      console.log(message.data.paginasSugeridas);

      const input = document.querySelector(".input-mensagem");
      const texto = message.data.resposta;
      const link = message.data.paginasSugeridas
      input.value = "";
      if (texto === "") return;
    
      const dadoss = {
        to: destinatario,
        text: texto,
        link: link,
        type: tipoMensagem
      };
    
      mensagens.push({
        from: "Assistente: ",
        ...dadoss
      });
      console.log(dadoss)
      
      renderizarMensagens();

      return message;
    } catch (error) {
      console.error('Erro ao buscar o token:', error);
    }
  }
}



function atualizarPagina() {
  window.location.reload();
}

function toggleParticipantes() {
  const menu = document.querySelector(".menu");
  const fundo = document.querySelector(".menu-fundo");

  menu.classList.toggle('escondido');
  fundo.classList.toggle('fundo-escondido');
}

// function trocarDestinatario(elemento) {
//   const span = elemento.querySelector(".nome");
//   destinatario = span.innerText;
//   renderizarParticipantes();
//   atualizarEnviando();
// }

function trocarVisibilidade(visibilidade) {
  const liPublico = document.querySelector(".visibilidade-publico");
  const liPrivado = document.querySelector(".visibilidade-privado");

  if (visibilidade === 'publico') {
    tipoMensagem = "message";
    liPublico.classList.add('selecionado');
    liPrivado.classList.remove('selecionado');
  } else {
    tipoMensagem = "private_message";
    liPublico.classList.remove('selecionado');
    liPrivado.classList.add('selecionado');
  }

  atualizarEnviando();
}

function atualizarEnviando() {
  const elemento = document.querySelector(".enviando");

  elemento.innerText = "Modelo da IA" + destinatario;

  if(tipoMensagem === "private_message") {
    elemento.innerText += " (modelo X)";
  }
}



// Renders


const classesMensagens = {
  status: 'entrada-saida',
  private_message: 'conversa-privada',
  message: 'conversa-publica'
};

function renderizarMensagens() {
  const ul = document.querySelector(".mensagens-container");
  let html = "";

  for (let i = 0; i < mensagens.length; i++) {
    const mensagem = mensagens[i];

    html += `
      <li class="mensagem ${classesMensagens[mensagem.type]}">
        <div class="conteudo-mensagem">
          ${
            mensagem.time !== undefined
            ? `<span class="horario">(${mensagem.time})</span>`
            : ``
          }

          <span>
            <strong>${mensagem.from}</strong>
          </span>

          ${
            mensagem.type === "private_message"
            ? `<span> reservadamente para </span>`
            : `<span>  </span>`
          }

          <strong>${mensagem.to}</strong>
          <span class="text">${mensagem.text}</span>
        </div>
        <div class="acoes-mensagem">
          ${
            ((mensagem.from === nome && mensagem.type.indexOf("message") > -1 && mensagem.time) || "") &&
             `
              <button class="editar" onclick="editarMensagem(this, '${mensagem._id}')">
                <ion-icon name="create"></ion-icon>
              </button>

              <button class="excluir" onclick="excluirMensagem('${mensagem._id}')">
                <ion-icon name="trash"></ion-icon>
              </button>
             `
          }
        </div>
      </li>
    `;
  }

  ul.innerHTML = html;

  //setTimeout(() => document.querySelector(".mensagens-container li:last-child").scrollIntoView(), 0);
}

// function renderizarParticipantes() {
//   const ul = document.querySelector(".contatos");

//   let html = "";

//   for (let i = 0; i < participantes.length; i++) {
//     const participante = participantes[i];

//     html += `
//       <li onclick="trocarDestinatario(this)" class="${participante.name === destinatario ? "selecionado" : ""}">
//         ${
//           participante.name === " "
//            ? `<ion-icon name='people-sharp'></ion-icon>`
//            : `<ion-icon name='person-circle'></ion-icon>`
//         }

//         <span class="nome">${participante.name}</span>
//         <ion-icon class='check' name='checkmark-outline'></ion-icon>
//       </li>
//     `;
//   }

//   ul.innerHTML = html;
// }

let oldHtml = "";
let conteudoMensagem = null;
let editing = false;
let mensagem = null;

// function editarMensagem(elemento, id) {
//   if (editing) return;
//   editing = true;

//   buscarMensagens = false;
//   conteudoMensagem = elemento.parentNode.parentNode.querySelector(".conteudo-mensagem");
//   oldHtml = conteudoMensagem.innerHTML;
//   mensagem = mensagens.find(m => m._id === id);

//   conteudoMensagem.innerHTML = `
//     <input type="text" value="${mensagem.text}" autofocus placeholder="Digite o novo valor da mensagem" onkeydown="enviarMensagemEditada(event, '${id}')" class="mensagem-editada" />
//   `;
// }

// function enviarMensagemEditada(event, id) {
//   if (event.key === "Escape") {
//     conteudoMensagem.innerHTML = oldHtml;
//     editing = false;
//   } else if (event.key === "Enter") {
//     editing = false;
//     const newMessage = document.querySelector(".mensagem-editada").value;
//     conteudoMensagem.innerHTML = oldHtml;
//     conteudoMensagem.querySelector(".text").innerHTML = newMessage;

//     axios.put(`http://localhost:5000/messages/${id}`, {
//       to: mensagem.to,
//       text: newMessage,
//       type: mensagem.type
//     }, {
//       headers: {
//         User: nome
//       }
//     }).catch(err => {
//       console.error('Não foi possível editar mensagem!');
//       console.error(err);
//     }).then(() => {
//       buscarMensagens = true;
//     });
//   }
// }

// function excluirMensagem(id) {
//   const confirmacao = confirm("Deseja realmente excluir esta mensagem?");

//   if (confirmacao) {
//     axios.delete(`http://localhost:5000/messages/${id}`, {
//       headers: {
//         User: nome
//       }
//     }).catch(err => {
//       console.error('Não foi possível apagar mensagem!');
//       console.error(err);
//     });
//   }
// }
