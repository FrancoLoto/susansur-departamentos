import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Home from "./pages/Home";


function App() {


  return (
    <HelmetProvider>
      <Helmet>
        <title>Susansur Departamentos | Las Grutas</title>
        <meta name="description" content="Alquiler de departamentos en Las Grutas."/> 
        <meta name="keywords" content='alquiler las grutas, departamentos en alquiler las grutas, alquileres en las grutas, alquiler por dia las grutas, alojamiento en las grutas, hospedaje las grutas'/>
        <meta name="robots" content='all'/>
        <link rel="canonical" href="https://www.susansurdepartamentos.com.ar/"/>
        <meta name="author" content="Desarrollo Software"/>
        <meta name="publisher" content="Franco Loto"/>

        {/* Social Media Tags */}
        <meta property='og:title' content='Susansur'/>
        <meta property='og:description' content='Alquiler departamentos Las Grutas.'/>
        <meta property='og:url' content='https://www.susansurdepartamentos.com.ar/'/>
        <meta property='og:image' content='#'/>

        <meta name="twitter:title" content='Susansur Departamentos' />
        <meta
            name="twitter:decription"
            description='Departamentos en Las Grutas.'
        />
        <meta name="twitter:image" content="#"/>
        <meta name="twitter:card" content="summary_large_image"/>
        
      </Helmet>

      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
