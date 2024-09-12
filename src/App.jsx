import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import MyCart from "./pages/MyCart";
import KidsProduct from "./pages/KidsProduct";
const App=()=>{
  return(
    <>
    <BrowserRouter>
     <Routes>
       <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path="home" element={<Home/>} />
        <Route path="mycart" element={<MyCart/>}/>
        <Route path="kidswatches" element={<KidsProduct/>}/>
       </Route>
     </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;