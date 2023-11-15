import { useState } from 'react'

function App() {

  const anecdotes = [
    'Se fazer algo dói, faça isso com mais frequência.',
    'Contratar mão de obra para um projeto de software que já está atrasado, faz com que se atrase mais ainda!',
    'Os primeiros 90% do código correspondem aos primeiros 10% do tempo de desenvolvimento... Os outros 10% do código correspondem aos outros 90% do tempo de desenvolvimento.',
    'Qualquer tolo escreve código que um computador consegue entender. Bons programadores escrevem código que humanos conseguem entender.',
    'Otimização prematura é a raiz de todo o mal.',
    'Antes de mais nada, depurar é duas vezes mais difícil do que escrever o código. Portanto, se você escrever o código da forma mais inteligente possível, você, por definição, não é inteligente o suficiente para depurá-lo.',
    'Programar sem o uso extremamente intenso do console.log é o mesmo que um médico se recusar a usar raio-x ou testes sanguíneos ao diagnosticar pacientes.',
    'A única maneira de ir rápido é ir bem.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState({})
  const [champion, setChampion] = useState(null)

  console.log(selected, champion)

  const bestAnecdote = (votes) => {
    console.log(votes);
    let best = Object.entries(votes).sort((a, b) => b[1] - a[1])
    console.log(best[0][0])
    setChampion(parseInt(best[0][0]))
  }

  function handleClick() {
    let item = Math.random() * anecdotes.length;
    setSelected(parseInt(item));
  }

  function handleVote() {
    let newVotes = {...votes};
    if(newVotes[selected]) {
      newVotes[selected] += 1;

    } else {
      newVotes[selected] = 0;
      newVotes[selected] += 1;
    }

    setVotes(newVotes);
    bestAnecdote(newVotes);
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div>
        <h3>{anecdotes[selected]}</h3>
      </div>
      <div>
        <h4>votes {votes[selected] ? votes[selected] : 0}</h4>
      </div>
      <button onClick={handleVote}>vote</button>
      <button onClick={handleClick}>next anecdote</button>
      <h1>Anecdote with most votes</h1>
      <div >
        <p>{champion != null ? anecdotes[champion] : ''}</p>
      </div>
      <div >
        <p>{champion != null ? `votes ${votes[champion]}` : ''}</p>
      </div>
    </div>
    
  );
}

export default App;
