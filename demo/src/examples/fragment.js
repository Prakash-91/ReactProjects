import {Fragment} from 'react';
function Summary({text}) {
  return(
        <Fragment>
            <h1>Summary</h1>
            <p>text</p>
        </Fragment>
      );
}

function App() {
  return (
    <div id="app" data-testid="app">
      <Summary text="Fragments help you avoid unnecessary HTML elements." />
    </div>
  );
}

export default App;
