export default function Skills() {
  return (
    <>
      <div className="p-5">
        <span className="text-xl font-bold">About Me</span>
        <div className="flex flex-col space-y-8 items-center py-8">
          <div className="w-80 h-80 rounded-lg shadow-xl bg-[#7F5EE3]/90 overflow-y-auto no-scrollbar">
            <div className="p-4 flex space-x-4 justify-center">
              <button className="hover:bg-gray-400 hover:opacity-90 hover:rounded-lg w-[55px] h-[55px] flex items-center justify-center">
                <img
                  width="50px"
                  height="50px"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                />
              </button>
            </div>
          </div>
          <div className="w-80 h-80 rounded-lg shadow-xl bg-[#7F5EE3]/90 overflow-y-auto no-scrollbar">
            <div className="p-4 flex space-x-4 justify-center">
              <button className="hover:bg-gray-400 hover:opacity-90 hover:rounded-lg w-[55px] h-[55px] flex items-center justify-center">
                <img
                  width="50px"
                  height="50px"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
