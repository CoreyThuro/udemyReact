function Person(props) {
  return (
    <div className="person">
      <h1>{props.name}</h1>
      <p>Age: {props.age}</p>
    </div>
  );
}

const App = (
  <div> 
    <Person name="Corey" age="27" />
    <Person name="Jared" age="31" />
  </div>
)

ReactDOM.render(App, document.querySelector('#app'));

