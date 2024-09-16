import Register from "./pages/Register";
const App = () => {
  const data = {
    name:"Jagadheesh",
  age:19,
degree:"B.Tech - IT"}
  return (
    <>
      <Register data={data}/>
    </>
  )
}
export default App;