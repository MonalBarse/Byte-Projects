import "./App.css";

function App() {
  return (
    <>
      <div className="flex min-h-screen justify-center items-center bg-gray-600">
        <div
          className="flex flex-col min-w-[360px] max-w-[360px] max-h-[450px] min-h-[450px] 
        bg-black backdrop-blur-md  bg-gradient-to-t from-indigo-200 to-indigo-400 
          items-center justify-center p-5 rounded-lg shadow-lg"
        >
          <img
            src="https://avatars.githubusercontent.com/u/75829035?v=4"
            alt="Monal Barse"
            className="rounded-full h-20 w-20"
          />
          <h1 className="text-2xl mt-4">Monal Barse</h1>
          <p className="text-gray-500">Frontend Engineer @Oracle</p>

          <div className="flex justify-center text-neutral-600 items-center space-x-2 mt-4 text-center">
            I turn coffee into bugs which eventually turns into features
          </div>
          <div className="bg-indigo-700 text-white rounded-md p-2 mt-4 w-full text-center cursor-pointer">
            Contact me
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
