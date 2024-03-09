import logo from './logo.svg';
import './App.css';

function Card(props) {
  return (
    <section>
      <h2>{props.icon}Title</h2>
      {props.children}
    </section>
  )
}

function MyIcon() {
  return <>🔥</>
}

function App() {
  return (
    <div>
  <Card icon = {<MyIcon />}>
    <p>Body of the card</p>
  </Card>      
    </div>
  );
}

export default App;
