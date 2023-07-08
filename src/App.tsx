import Header from "./components/Header";
import Interface from "./components/Interface";

function App() {
  return (
    <div className="p-0 m-0 flex flex-col h-screen font-belanosima">
      <Header />
      <main className="flex-1 p-5 bg-[#ECE5C7]">
        <Interface />
      </main>
    </div>
  );
}

export default App;
