/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { socket } from "./socket";

const Rooms = ({ events }) => {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [rooms, setRooms] = useState([
    { name: "Welcome", isActive: true },
    { name: "Random", isActive: false },
    { name: "Games", isActive: false },
    { name: "JavavScript", isActive: false },
  ]);

  const sendMessage = (e) => {
    console.log("sendMessage");
    setIsLoading(true);

    socket.timeout(5000).emit("foo", message, () => {
      setIsLoading(false);
      setMessage("");
    });
  };

  return (
    <div>
      <div className="columns-3 gap-0">
        <div>
          <aside
            id="default-sidebar"
            className="h-screen transition-transform -translate-x-full sm:translate-x-0"
            aria-label="Sidebar"
          >
            <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
              <ul className="space-y-2 font-medium">
                {rooms.map((room, index) => (
                  <li 
                    key={index}
                    onClick={() => setRooms(rooms.map(r => r.name === room.name ? { ...r, isActive: true } : { ...r, isActive: false }))}
                    >
                    <span
                      className={`flex items-center rounded-l p-2 ${room.isActive ? "text-emerald-900 bg-gray-100 dark:text-emerald-500 dark:bg-gray-700 group" 
                        : "text-gray-900 g dark:text-white"
                      }  hover:bg-gray-100 dark:hover:bg-gray-700 group`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5-3.9 19.5m-2.1-19.5-3.9 19.5"
                        />
                      </svg>
                      <span className="ms-3">{room.name}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
        <div className="">
          <div className="h-screen grid grid-cols-2 gap-0 dark:bg-gray-800">
            {events.map((event, index) => (
              <>
                <div className="w-14">Avatar</div>
                <div className="w-64">
                  <div>Username</div>
                  <div>{event}</div>
                </div>
                {/* <li key={index}>{event}</li> */}
              </>
            ))}
            <div className="col-span-2">
              <div className="relative w-3/4">
                <input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  type="search"
                  id="search-dropdown"
                  className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg rounded-s-gray-100 rounded-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                  placeholder="Search"
                  required
                />
                <button
                  onClick={sendMessage}
                  disabled={isLoading}
                  type="button"
                  className="absolute top-0 end-0 p-2.5 h-full text-sm font-medium text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 disabled:dark:bg-blue-300 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="h-screen grid grid-cols-2 gap-0 dark:bg-gray-800">
            <div className="w-14">01</div>
            <div className="w-64">02</div>
            <div className="w-14">01</div>
            <div className="w-64">02</div>
            <div className="w-14">01</div>
            <div className="w-64">02</div>
            <div className="w-14">01</div>
            <div className="w-64">02</div>
            <div className="w-14">01</div>
            <div className="w-64">02</div>
          </div>
        </div>
      </div>

      {/* <div className="flex">
        <div className="relative w-3/4">
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            type="search"
            id="search-dropdown"
            className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg rounded-s-gray-100 rounded-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
            placeholder="Search"
            required
          />
          <button
            onClick={sendMessage}
            disabled={isLoading}
            type="button"
            className="absolute top-0 end-0 p-2.5 h-full text-sm font-medium text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 disabled:dark:bg-blue-300 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </button>
      </div>
        </div> */}
    </div>
  );
};

export default Rooms;
