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
import ProductList from "./components/ProductList";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ProductDetail from './ProductDetail'; // สร้างหน้า ProductDetail

const App = () => {
    return (
        <Router>
            <Routes>
                {/* หน้า Dashboard */}
                <Route
                    path="/"
                    element={
                        <>
                            <Navbar />
                            <ProductList />
                            <Footer />
                        </>
                    }
                />
                
                <Route 
                    path="/productdetail/:id" 
                    element={
                      <>
                          <Navbar />
                          <ProductDetail />
                          <Footer />
                      </> 
                        }
                      />

            </Routes>
        </Router>
    );
};

export default App;
