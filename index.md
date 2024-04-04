
#Html


#javascript
```js
//variaveis
const mensagem = "Oi, tudo bem?"
//tipos de dados
  //number, string, boleanos
//funções
alert(mensagem)
```
const participante = //criar modelo de objeto
{
  nome: "Emanuel Carvalho",
  email: "emanuelcarvalho.design@gmail.com",
  dataIncricao: new Date (2024, 2, 22, 19, 20),
  dataChekIn: new Date (2024, 2, 25, 22, 11)
}

//const variavel q nao altera o valor, let sim
let participantes = 
[
  {
  nome: "Emanuel Carvalho",
  email: "emanuelcarvalho.design@gmail.com",
  dataIncricao: new Date (2024, 2, 22, 19, 20),
  dataChekIn: new Date (2024, 2, 25, 22, 11)
  },

]

//const variavel q nao altera o valor, let sim
//poso colocar qualquer coisa dentro de uma váriavel, inclusive uma função
// sempre que chamar função e tiver return, oq tiver na frente do return vai retornar na função 

const atualizarLista = (participante) => 
{
//pegar informação do html


//substituir informação do html

//meu documento do hmtl mas em formato de um objeto do js objeto é como um relogio que tem funcionalidades(funções) //obeto tbm tem propriedades, cor, peso, etc, //posso entrar dentro do objeto e obter essas informações
document
.querySelector('tbody') //pesquisa pelo seletor (nome da tag)
.innerHTML = criarNovoParticipante(participante) //substitui pelo dado que quer

} //arrow function

for (let participante of participantes)
{
output = output + criarNovoParticipante(participante)
  faça algo enquanto tiver pessoas nessa lista
}

sempre que um botao estiver em um form, ele vai querer enviar as informações pra algum lugar do link
ao fazer onsubimit , "preste atenção" quando tiver onsubmit vai fazer algum evento especifico

quando passa event , estou passando evento do submit com informações do form que eu vou usar mais tarde

----

let participantes = [
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
    </button>
    
    `
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
  </tr>
  `
}

const atualizarLista = (participantes) => 
{
let output = ""
//loop
for (let participante of participantes)
{
output = output + criarNovoParticipante(participante)
  //cria uma variavel participante de apenas um participante
  //funciona pegando somente 1 da lista
}
document
.querySelector('tbody') 
.innerHTML = output
} 

atualizarLista(participantes)

const adicionarParticipante = (event) => 
{
  event.preventDefault() //nao fazer o padrao "enviar o form"

  const dadosDoFormulario = new FormData(event.target) //espera que passe o argumento de qual form vou pegar os dados, quem é o alvo do evento submit. pegando o form, avisando que quer os dados do form e coloque na variavel

 const participante = {
    nome: dadosDoFormulario.get('nome'),
    email: dadosDoFormulario.get('email'),
    dataInscricao: new Date(), //data atual
    dataCheckIn: null
  }

  //verificar se existe participante
  const participanteExiste = participantes.find((p) => 
  p.email == participante.email // posso tirar o return e jogar as info depois da seta sem as chaves tb
  )

  if(participanteExiste)
  {
    alert ('Email já cadastrado!')
    return
  }
  participantes = [participante, ...participantes] // add um novo e pega os antigos . como colocar todos os outros participantes? spread = espalhar, 
  atualizarLista(participantes)
  //limpar compos
  // do formulario pesquise pelo seletor name que recebe nome, pegue o .valor e coloque como vazio
  event.target.querySelector('[name="nome"]').value = ""
  event.target.querySelector('[name="email"]').value = ""
}

const fazerChekIn = (event) => {
  //confirmar se realmente quer o check in
 const mensagemConfirmacao = 'Tem certeza?'
 if(confirm (mensagemConfirmacao) == false)
 {
  return
 }
  const participante = participantes.find((p) => {
  return p.email == event.target.dataset.email // 
  })
  //atualizar o checkin do participante cm a data de agora
  participante.dataChekIn = new Date()
  //atualizar a lista de participantes
  atualizarLista (participantes)


}

#css

/* declarações 
 com vingula vc adiciona outros seletores
 sempre que quiser aplicar , tem que ser mais espcifico
 e add se nao o navegador faz isso de acordo com o banco
 root , raiz, aplicando em todo doc
*/
