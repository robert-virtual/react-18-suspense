import { Suspense } from "react";
import { Quote } from "./Quote";
import { createResource } from "./QuotesApi";
const resource = createResource();
function App() {
  return (
    <div className="App">
      <h1>Suspense</h1>
      <Suspense fallback={<p>cargando...</p>}>
        <Quote resource={resource.quote} />
      </Suspense>
      <Suspense fallback={<p>cargando...</p>}>
        <Quote resource={resource.quote2} />
      </Suspense>
    </div>
  );
}

export default App;
