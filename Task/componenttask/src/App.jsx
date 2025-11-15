import Chennai from "./components/Chennai";
import { Kerala } from "./components/Kerala";
import Karnataka from "./components/Karnataka";

const App = () => {

  return (
    <>
    
      <div>
        <h1>This Page About Chennai & Kerala & Karnataka</h1>
      </div>
      <div>
        <h1>Chennai</h1>
        <Chennai />
      </div>
      <div>
        <h1>Kerala</h1>
        <Kerala />
      </div>
      <div>
        <h1>Karnataka</h1>
        <Karnataka />
      </div>
    </>
  )
}

export default App;