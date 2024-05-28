import logo from './logo.svg';
import './App.css';
import routes, { renderRoutes } from './routes';
import { Route, Routes, Redirect } from "react-router-dom";
import MainLayout from './layout/MainLayout'

import { Unity, useUnityContext } from "react-unity-webgl";

function App() {
  
  const { unityProvider } = useUnityContext({
    loaderUrl: "OtterAdventures/Build/OtterAdventures.loader.js",
    dataUrl: "OtterAdventures/Build/OtterAdventures.data",
    frameworkUrl: "OtterAdventures/Build/OtterAdventures.framework.js",
    codeUrl: "OtterAdventures/Build/OtterAdventures.wasm",
  });

  return (
  // <div>
  //   <div> Hello World</div>
  //   <Unity unityProvider={unityProvider} style={{'width': '400px', 'height': '800px'}}/>
  // </div>

  <MainLayout>
  { renderRoutes(routes) }
</MainLayout>
  
);
}




export default App;
