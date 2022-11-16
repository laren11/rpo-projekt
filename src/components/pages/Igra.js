import { Unity, UnityContext, useUnityContext } from "react-unity-webgl";



function Igra() {

  const { unityProvider } = useUnityContext({
    loaderUrl: "gameBuild/IgraTest.loader.js",
    dataUrl: "gameBuild/IgraTest.data.unityweb",
    frameworkUrl: "gameBuild/IgraTest.framework.js.unityweb",
    codeUrl: "gameBuild/IgraTest.wasm.unityweb",
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