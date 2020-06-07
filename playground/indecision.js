console.log("app.js is running");



const app = {
  title: "Indecision App",
  subtitle: "Fun way of deciding stuff",
  options: [],
};

const renderApp = () => {
  const template = (
    <div>
      {/* get title */}
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
      <button onClick={onMake} disabled={app.options.length>0 ? false : true}>What should i do?</button>
      <button onClick={removeAll}>Remove All</button>
      <ol>
        {app.options.map((option) => {
          return <li key={option}>{option}</li>;
        })}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, place);
};

//creating arrow function :
const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  // console.log(option)
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    renderApp();
  }
};

const removeAll = () => {
  app.options = [];
  renderApp();
};

const onMake = () => {
  const randomNum = Math.floor(Math.random()*app.options.length);
  const selectedoption = app.options[randomNum]
  alert(selectedoption)
}

const place = document.getElementById("id1");
renderApp();
