import { UploadImage } from "./components/UploadImage";
import { TestInput } from "./components/TestInput";
import { Route, BrowserRouter, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UploadImage />} />
          <Route path="/test" element={<TestInput />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
