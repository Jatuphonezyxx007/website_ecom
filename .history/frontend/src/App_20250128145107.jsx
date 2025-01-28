// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import ProductList from "./components/ProductList";
// import Navbar from "./components/Navbar/Navbar";
// import Footer from "./components/Footer/Footer";

// const App = () => {
//   return (

//     <Router>
//     <Routes>
//         {/* หน้า Dashboard */}
//         <Route
//             path="/"
//             element={
//                 <Layout>
//                     <Navbar />
//                     <ProductList />
//                     <Footer />
//                 </Layout>
//             }
//         />
//         </Routes>
//         </Router>
//   );
// };

// export default App;



import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Components
import Login from "./components/Login/Login";
import ProductList from "./components/Dashboard";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar"; // ที่อยู่ไฟล์ Sidebar
import Footer from "./components/Footer/Footer";
// import ProductDetail from './components/ProductDetail'; // สร้างหน้า ProductDetail

const App = () => {
    return (
        <Router>
            <Routes>

            {/* <Route
                    path="/"
                    element={
                        <>
                            <Navbar />
                            <Homepage />
                            <Footer />
                        </>
                    }
                /> */}
                
                {/* หน้า Login */}
                {/* <Route
                    path="/"
                    element={
                        <Login />
                    }
                /> */}

                {/* หน้า Dashboard */}
                <Route
                    path="/"
                    element={
                        <>
                            <Navbar />
                            <Sidebar />
                            <ProductList />
                            {/* <Footer /> */}
                        </>
                    }
                />
                
                <Route 
                    path="/productdetail/:id" 
                    element={
                      <>
                          <Navbar />
                          <Sidebar />
                          <ProductDetail />
                          {/* <Footer /> */}
                      </> 
                        }
                      />

            </Routes>
        </Router>
    );
};

export default App;
