import { createSignal, type Component, type JSX } from "solid-js";
import { President, presidents } from "us-presidents";

interface presidents {
  name: string;
  term: {
    startYear: number;
    endYear: number;
  };
}
const [president, setPresident] = createSignal<President>(randomPresident());

function randomPresident(): President {
  return presidents[Math.floor(Math.random() * presidents.length)];
}

function changePresident(): void {
  setPresident(randomPresident());
}

const App: Component = () => {
  return (
    <div class="flex flex-col">
      <div>
        <h2>
          {president().name} {president().term.startYear} -{" "}
          {president().term.endYear}
        </h2>
        <button onclick={changePresident}>random</button>
      </div>
    </div>
  );
};

export default App;
