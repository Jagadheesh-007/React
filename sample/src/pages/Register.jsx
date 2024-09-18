    const Register = (props) => {
   console.log(props)
    return (
      <>
        <div className="h-screen w-screen flex justify-center items-center bg-slate-100">
          <div className="h-3/6 w-[30%] flex justify-center items-center bg-white rounded-md shadow-md">
          
          <form action="https://jagadheesh-007.github.io" method="post" className="flex flex-col justify-center w-[80%] h-[80%] rounded-2xl items-center gap-4">
          <h1 className="text-green-600 font-serif text-2xl font-medium">Register Form</h1>
            <input type="text" className="font-serif flex-col p-2 rounded-md w-full outline-none focus:border-2 focus:border-r-4 focus:border-b-4 border-green-500 shadow-inner" placeholder="Name" />
            <input type="email" className="font-serif flex-col p-2 rounded-md w-full outline-none focus:border-2 focus:border-r-4 focus:border-b-4 border-green-500 shadow-inner" placeholder="Email" />
            <input type="phone" className="font-serif flex-col p-2 rounded-md w-full outline-none focus:border-2 focus:border-r-4 focus:border-b-4 border-green-500 shadow-inner" placeholder="phone" />
            <input type="password" className="font-serif flex-col p-2 rounded-md w-full outline-none focus:border-2 focus:border-r-4 focus:border-b-4 border-green-500 shadow-inner" placeholder="password" />
            <button type="submit" className="h-12 bg-green-600 rounded-md w-full text-white p-2 font-serif" >Register</button>
          </form>
          </div>
        </div>
      </>
    )
  }
  export default Register;