let participantes = 
[
  {
    nome: "Emanuel Carvalho",
    email: "emanuelcarvalho.design@gmail.com",
    dataIncricao: new Date(2024, 2, 22, 19, 20),
    dataChekIn: new Date(2024, 2, 25, 22, 11)
  },
  {
    nome: "Edison Douglas",
    email: "douguinha@gmail.com",
    dataIncricao: new Date(2024, 1, 20, 05, 20),
    dataChekIn: new Date(2024, 2, 22, 10, 11)
  },
  {
    nome: "João Silva",
    email: "joaosilva@example.com",
    dataIncricao: new Date(2024, 0, 15, 14, 30),
    dataChekIn: new Date(2024, 1, 10, 9, 45)
  },
  {
    nome: "Maria Souza",
    email: "msouza@example.com",
    dataIncricao: new Date(2024, 1, 5, 9, 0),
    dataChekIn: new Date(2024, 1, 28, 12, 15)
  },
  {
    nome: "Lucas Oliveira",
    email: "lucas.oliveira@example.com",
    dataIncricao: new Date(2024, 1, 10, 18, 45),
    dataChekIn: new Date(2024, 2, 1, 8, 30)
  },
  {
    nome: "Ana Santos",
    email: "anasantos@example.com",
    dataIncricao: new Date(2024, 0, 25, 12, 0),
    dataChekIn: new Date(2024, 1, 15, 10, 20)
  },
  {
    nome: "Pedro Carneiro",
    email: "pedrocarneiro@example.com",
    dataIncricao: new Date(2024, 2, 1, 16, 10),
    dataChekIn: null
  },
  {
    nome: "Mariana Costa",
    email: "marianacosta@example.com",
    dataIncricao: new Date(2024, 1, 18, 10, 30),
    dataChekIn: new Date(2024, 2, 5, 14, 45)
  },
  {
    nome: "Felipe Fernandes",
    email: "felipefernandes@example.com",
    dataIncricao: new Date(2024, 0, 30, 8, 15),
    dataChekIn: null
  },
  {
    nome: "Juliana Pereira",
    email: "julianapereira@example.com",
    dataIncricao: new Date(2024, 1, 8, 15, 20),
    dataChekIn: new Date(2024, 2, 2, 16, 10)
  }
];

const criarNovoParticipante = (participante) => 
{
  const dataIncricao = dayjs(Date.now())
  .to(participante.dataIncricao)

  let dataChekIn = dayjs(Date.now())
  .to(participante.dataChekIn)

  if(participante.dataChekIn == null)
   {
    dataChekIn = `
    <button data-email="${participante.email}" onclick="fazerChekIn(event)"> 
    Confirmar check-in
    </button>`
   }
  return `
  <tr>
    <td>
      <strong>
       ${participante.nome}
      </strong>
        <br>
      <small>
          ${participante.email}
      </small>
    </td>
    <td>${dataIncricao}</td>
    <td>${dataChekIn}</td>
  </tr> `
}

const atualizarLista = (participantes) => 
{
  let output = ""
  for (let participante of participantes)
  {
  output = output + criarNovoParticipante(participante)
  }
  document
  .querySelector('tbody') 
  .innerHTML = output
} 

atualizarLista(participantes)

const adicionarParticipante = (event) => 
{
  event.preventDefault() 
  const dadosDoFormulario = new FormData(event.target)
  const participante = 
  {
    nome: dadosDoFormulario.get('nome'),
    email: dadosDoFormulario.get('email'),
    dataInscricao: new Date(),
    dataCheckIn: null
  }
  const participanteExiste = participantes.find((p) => 
  p.email == participante.email)

  if(participanteExiste)
  {
    alert ('Email já cadastrado!')
    return
  }
  participantes = [participante, ...participantes]

  atualizarLista(participantes)

  event.target.querySelector('[name="nome"]').value = ""
  event.target.querySelector('[name="email"]').value = ""
}

const fazerChekIn = (event) => 
{
 const mensagemConfirmacao = 'Tem certeza?'
 if(confirm (mensagemConfirmacao) == false)
 {
  return
 }
  const participante = participantes.find((p) => {
  return p.email == event.target.dataset.email // 
  })
  participante.dataChekIn = new Date()
  atualizarLista (participantes)
}