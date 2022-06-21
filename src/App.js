import logo from './logo.svg';
import './App.css';

function App() {
  return(
      <div className="App">
        <header className="App-header">
          <a href="/">
          <h1  id="title"><img id="strawberry-title" src={require("./images/straw1.png")} height="60px" /> amy x sew</h1>
            {/* <img src="https://sdk.bitmoji.com/render/panel/965f4060-c8d0-4b02-8e05-45f7beb660eb-32f4148d-fa0e-4a7f-8810-f7e01716acf4-v1.png?transparent=1&palette=1" height="100px"/>amy x huang</h1> */}
            </a>
          <div id="nav">
            <a className="nav-item" href="https://amyxjhuang.github.io">home</a>
            <a className="nav-item" href="/">sewing</a>
            <a className="nav-item" target="_" href="/weather"><img src={require("./images/cloud.png")} height="30px"/></a>

          </div>

        </header>

        <div className="main">
          <h1>sewing & sustainable fashion</h1>
          <img src={require("./images/sew.png")} id="header-pic" />
          <div className="container">

          <p>hello 2 all the girlies who wanna get into sustainable fashion :) i'm a beginner sewer based in ca and ny. take a look at some sewing resources & see some of my projects making my own clothing!
          </p>

          </div>
        </div>
      </div>
    );

}

export default App;
