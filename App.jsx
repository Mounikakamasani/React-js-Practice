
import './App.css'
import Greet from './components/Greet.jsx'
import Welcome from './components/Welcome.jsx'
import Hello from './components/Hello.jsx'
import Message from './components/Message.jsx'
import Counter from './components/Counter.jsx'
import FunctionClick from './components/FunctionClick.jsx'
import ClassClick from './components/ClassClick.jsx'
import EventBind from './components/EventBind.jsx'

  function App() {
  
    return(
      <div className='App'>
        {/*<Counter/>*/}
        {/*<Greet name="mouni" gender="f"/>*/}
        {/*<Message/>*/}
        {/*<Greet name="mouni" gender="f">
          <p>this is me</p></Greet>*/}
        {/*<FunctionClick/>*/}
        {/*<ClassClick/>*/}
        <EventBind/>
        
        {/*<Welcome name="mouni" gender="f"/>*/}
        {/*<Greet name="cherry" gender="m"><button>click here</button></Greet>
        <Greet name="cherrilu" gender="others"/>*/}

        
        {/*<Hello/>*/}
        {/*<Welcome name="mouni" gender="f">
          <p>this is me</p></Welcome>
        
        <Welcome name="cherry" gender="m"><button>click here</button></Welcome>
        <Welcome name="cherrilu" gender="others"/>*/}
      </div>
    )
  }
  
  



export default App
