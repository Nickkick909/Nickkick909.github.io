import logo from './logo.svg';
import './App.css';
import routes, { renderRoutes } from './routes';
import { Route, Routes, Redirect } from "react-router-dom";
import MainLayout from './layout/MainLayout'

import { Unity, useUnityContext } from "react-unity-webgl";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

function App() {
  
  const { unityProvider } = useUnityContext({
    loaderUrl: "OtterAdventures/Build/OtterAdventures.loader.js",
    dataUrl: "OtterAdventures/Build/OtterAdventures.data",
    frameworkUrl: "OtterAdventures/Build/OtterAdventures.framework.js",
    codeUrl: "OtterAdventures/Build/OtterAdventures.wasm",
  });

  return (
<>
<link
  rel="stylesheet"
  type="text/css"
  charset="UTF-8"
  href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
/>
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"
/>


  <MainLayout>
  { renderRoutes(routes) }
</MainLayout>
</>
    
  
);
}




export default App;
