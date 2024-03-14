import './App.css'
import AdminPanel from "./components/AdminPanel.jsx";
import LoginForm from "./components/LoginForm.jsx";

const isLoggedIn= true;
function App(){
    let content;

    //if (isLoggedIn) {
      //  content = <AdminPanel/>;
    //} else {
    //    content = <LoginForm/>;
    //}

    content = isLoggedIn ? (<AdminPanel/>) : (<LoginForm/>)
    //content = isLoggedIn && <AdminPanel/>
    return(
        <>
            {content}
        </>

    );
}

export default App;