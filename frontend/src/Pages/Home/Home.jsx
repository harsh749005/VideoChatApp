

const Home = () => {
  return (
    <div className="bg-gray-200 h-screen w-screen pt-10">
      <div className="w-4/12  m-[auto] flex flex-col items-center gap-4 h-96 justify-center ">

      <input type="email" className="w-96 border-2 border-gray-400 px-3 py-2 outline-none  " placeholder="Enter your email here"/>
      <input type="text" className="w-96 border-2 border-gray-400 px-3 py-2 outline-none" placeholder="Enter Room Code"/>
        <button style={{ boxShadow: 'rgb(249, 168, 37) 6px 6px, rgb(0, 0, 0) 6px 6px 0px 2px'}} className='bg-yellow-300 w-96 py-2 font-medium font-mono border-2 border-black cursor-pointer'>Enter Room</button>
      </div>
    </div>
  )
}

export default Home
