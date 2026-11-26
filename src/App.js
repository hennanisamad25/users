
import Users from "./compenents/fetchusers";

import {Routes , Route} from 'react-router-dom'

import DetailsUser from "./compenents/Detailsuser";

function App() {
  return (
    <div >

      <Routes>

        <Route path="/users"  element={<Users />} />

        <Route path="/users/:id"  element={<DetailsUser />} />


      </Routes>


    </div>
  );
}

export default App;
