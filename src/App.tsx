import type { Component } from "solid-js";
import { presidents } from "us-presidents";

const App: Component = () => {
  const presidentsList = presidents.map((president) => {
    return (
      <div class="flex flex-col">
        <div>
          <h2>
            {president.name}: {president.term.startYear} to{" "}
            {president.term.endYear}
          </h2>
        </div>
      </div>
    );
  });

  return (
    <div class="w-full">
      <h1 class="text-md text-center">{presidentsList}</h1>
    </div>
  );
};

export default App;
