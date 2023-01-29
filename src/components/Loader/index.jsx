function Loader({msg}) {
    console.log("Loading...", msg)
    return (
        <div className="loader">
            <h1>{msg ? msg : "Loading..."}</h1>
        </div>
    )
}

export default Loader;