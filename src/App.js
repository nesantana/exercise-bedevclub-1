import { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #EEEEEE;
`

const BoxShadow = styled.div`
  width: 450px;
  height: 450px;
  box-shadow: 0 0 15px rgba(0, 0, 0, .16);
  background: #FFFFFF;
  padding: 20px;

  input {
    height: 50px;
    padding: 0 15px;
    width: 100%;
    margin-bottom: 30px;
  }

  button {
    height: 50px;
    width: 100%;
    background: #EEAA00;
    border: 0;
    outline: none;
    cursor: pointer;
  }

  span {
    padding: 15px;
    margin-top: 30px;
    border-radius: 10px;
    border: 2px solid #999999;
    display: block;
  }
`


const App = () =>  {
  const [name, setName] = useState('')
  const [show, setShow] = useState(false)

  // Observe que o setShow e o show não estão sendo utilizados,
  // possívelmente a solução seja utiliza-los!
  
  return (
    <Container>
      <BoxShadow>
        <input placeholder="Insira seu nome" onChange={(event) => setName(event.target.value)} />
        <button>Mostrar nome</button>
        <span>
          {name ? name : 'Comece a digitar'}
        </span>
      </BoxShadow>
    </Container>
  );
}

export default App;
