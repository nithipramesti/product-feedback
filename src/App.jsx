import "./assets/styles/css/main.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Suggestion from "./pages/Suggestion";
import FeedbackDetail from "./pages/FeedbackDetail";
import AddFeedback from "./pages/AddFeedback";
import EditFeedback from "./pages/EditFeedback";
import Roadmap from "./pages/Roadmap";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Suggestion />} exact path="/" />
          <Route
            element={<FeedbackDetail />}
            exact
            path="/feedback-detail/:id_feedback"
          />
          <Route element={<AddFeedback />} exact path="/add-feedback" />
          <Route
            element={<EditFeedback />}
            exact
            path="/edit-feedback/:id_feedback"
          />
          <Route element={<Roadmap />} exact path="/roadmap" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
