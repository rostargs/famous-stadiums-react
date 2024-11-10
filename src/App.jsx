import { Route, Routes } from "react-router-dom";
import Layout from "./layout";
import HomePage from "./pages/HomePage";
import GifPage from "./pages/GifPage";
import AttributesPage from "./pages/AttributesPage";
import NivaPage from "./pages/NivaPage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="/gif-animation" element={<GifPage />} />
                <Route path="/attributes" element={<AttributesPage />} />
                <Route path="/niva" element={<NivaPage />} />
            </Route>
        </Routes>
    );
}

export default App;
