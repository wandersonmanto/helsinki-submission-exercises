import { useState } from 'react'

function Button(props) {
  return(
    <div>
      <button style={styled.button} onClick={props.onclick}>{props.name}</button>
    </div>
    
  )
}

function StatisticLine(props) {
  return(
    <tbody>
      <td>
        <tr>{props.text}</tr>
      </td>
      <td>
      <tr>{props.value}</tr>
      </td>
    </tbody>
  )
}

function Statistics (props) {

  if(props.total > 0) {

    return(
      <div>
        <table>
          <StatisticLine text="good" value={props.good}/>
          <StatisticLine text="neutral" value={props.neutral}/>
          <StatisticLine text="bad" value={props.bad}/>
          <StatisticLine text="all" value={props.total}/>
          <StatisticLine text="avarege" value={props.avarege}/>
          <StatisticLine text="positive" value={props.positive}/>
        </table>
      </div>
    )
  } else {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  
}

function App() {
  let [good, setGood] = useState(0);
  let [neutral, setNeutral] = useState(0);
  let [bad, setBad] = useState(0);
  let [total, setTotal] = useState(0);
  let [avarege, setAvarege] = useState(0);
  let [positive, setPositive] = useState(0);

  function handleClick(type) {
    switch(type) {
      case "good":
        setGood(good += 1);
        setTotal(total += 1);
        break;
      case "neutral":
        setNeutral(neutral += 1);
        setTotal(total += 1);
        break;
      case "bad":
        setBad(bad += 1);
        setTotal(total += 1);
        break;
      default:
    }

    setAvarege((good * 1) + (neutral * 0) + (bad * -1));
    setPositive((good / total) * 100);


  }

  return (
    <div>
      <h1>give feedback</h1>
      <div style={styled.containerButton}>
        <Button name="good" onclick={() => handleClick("good")}></Button>
        <Button name="neutral" onclick={() => handleClick("neutral")}></Button>
        <Button name="bad" onclick={() => handleClick("bad")}></Button>
      </div>
      <h2>statistcs</h2>

      <Statistics 
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        avarege={avarege}
        positive={positive}
      />

      

      
  
    </div>
  );
}

const styled = {
  containerButton: {
    display: 'flex',
    flexDirection: 'row'
  },
  button: {
    marginRight: 10,
  }
}

export default App;
