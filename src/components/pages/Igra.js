import { Unity, UnityContext, useUnityContext } from "react-unity-webgl";



function Igra() {

  const { unityProvider } = useUnityContext({
    loaderUrl: "gameBuild/gameBuild.loader.js",
    dataUrl: "gameBuild/gameBuild.data",
    frameworkUrl: "gameBuild/gameBuild.framework.js",
    codeUrl: "gameBuild/gameBuild.wasm",
  })

  return (
    <div className="App" style={{height: '100vh'}}>
      <Unity 
        style={{
          width: "90%",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: '1%',
        }}
        unityProvider={unityProvider}
      />
    </div>
  );
}

export default Igra;