const Register = () => {
    return (
      <>
        <div className="h-screen w-screen flex justify-center items-center">
          <div className="h-3/6 w-[30%] flex justify-center items-center bg-white rounded-md shadow-2xl">
          <form action="https://jagadheesh-007.github.io" method="post" className="flex flex-col justify-center w-[80%] h-[80%] rounded-2xl items-center gap-4">
            <input type="text" className=" flex-col p-2 rounded-md w-full outline-none focus:border-b-2 border-green-500" placeholder="Name" />
            <input type="email" className="flex-col p-2 rounded-md w-full outline-none focus:border-b-2 border-green-500" placeholder="Email" />
            <input type="phone" className="flex-col p-2 rounded-md w-full outline-none focus:border-b-2 border-green-500" placeholder="phone" />
            <input type="password" className="flex-col p-2 rounded-md w-full outline-none focus:border-b-2 border-green-500" placeholder="password" />
            <button type="submit" className="h-10 bg-green-600 rounded-md w-full text-white" >Register</button>
          </form>
          </div>.,
        </div>
      </>
    )
  }
  export default Register;