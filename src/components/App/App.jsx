import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Main from "../Main/Main";
import "./App.css";

function App() {
  return (
    <div className="page">
      <Navbar />
      <div className="page__content">
        <Header />
        <Main />
      </div>
      {/* <AddItemModal isOpen={activeModal === "add-clothes"} />
    <ItemModal isOpen={activeModal == "preview"} />
    <DeleteConfirmationModal isOpen={activeModal == "confirmation"} />
    <EditProfileModal isOpen={activeModal == "update profile"} />
    <LoginModal isOpen={activeModal == "Login"} />
    <RegisterModal isOpen={activeModal == "register"} /> */}
    </div>
  );
}

export default App;
