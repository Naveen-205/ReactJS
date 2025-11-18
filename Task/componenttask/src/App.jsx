import Chennai from "./components/Chennai";
import { Kerala } from "./components/Kerala";
import Karnataka from "./components/Karnataka";


const App = () => {

  return (
    <>
    
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous"/> 

      <div>
        <h1 class = "bg-danger text-white text-center p-3">This Page About Chennai & Kerala & Karnataka</h1>
      </div>
      <div>
        <h1 class="bg-dark text-white text-center p-2 mt-4 mb-4">Chennai</h1>
        <Chennai />
      </div>
      <div>
        <h1 class="bg-dark text-white text-center p-2 mt-4 mb-4">Kerala</h1>
        <Kerala />
      </div>
      <div>
        <h1 class="bg-dark text-white text-center p-2 mt-4 mb-4">Karnataka</h1>
        <Karnataka />
      </div>
    
   </>
  )
}

export default App;

 