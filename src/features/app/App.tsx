import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import MenuPage from "../../pages/menu/MenuPage";
import HomePage from "../../pages/home/HomePage";

const App: FC = () => {
  return (
    <>
      <Routes>
      <Route index element={<HomePage />} />
      <Route path="/menu" element={<MenuPage />} />
    </Routes>
    </>
  )
}

export default App
