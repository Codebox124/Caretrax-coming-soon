import Rocket from "./assets/rocket.svg";
import Logo from "./assets/logo.svg"; 
import Form from "./components/Form";

const App = () => {
  return (
    <div className="bg-bg min-h-screen text-white font-pop flex flex-col gap-3 justify-center items-center">
    
      <div className="mb-4">
        <img src={Logo} alt="Logo" className="h-20 w-20" /> 
      </div>

      <div>
        <img src={Rocket} alt="Rocket" className="h-64 w-72" />
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="text-center font-bold text-3xl">Coming Soon !!!</h2>
        <p className="text-center w-5/6 flex mx-auto font-light">
          Are you ready to get something new from us? Subscribe to the newsletter 
          to get the latest updates!
        </p>
      </div>

      
      <div>
        <Form />
      </div>
    </div>
  );
};

export default App;
