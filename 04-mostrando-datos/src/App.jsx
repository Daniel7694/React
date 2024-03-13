import './App.css'

const user = {
    name: "hedy lamarr",
    imageURL: "https://i.imgur.com/yXOvdOSs.jpg",
    imageSize: 90,
}

function App() {
    return(
        <>
            <h1>{user.name}</h1>

            <img
                className="avatar"
                src={user.imageURL}
                alt={'photo of' + user.name}
                style={{
                    width: user.imageSize,
                    height: user.imageSize
                }}
            />

        </>
    );
}
export default App
