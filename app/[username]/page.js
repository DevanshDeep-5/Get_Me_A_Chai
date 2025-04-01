import React from "react";

const Username = async ({ params }) => {
  const { username } = await params;
  return (
    <>
      <div className="cover w-full bg-red-50 relative">
        <img
          className="object-cover w-full h-[400]"
          src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4407953/7c000ff8b8384079a208e1c59941533c/eyJ3IjoxOTIwLCJ3ZSI6MX0%3D/8.jpg?token-time=1743724800&token-hash=JgU5QEuvRCpWZc06Yu5gVg6TSzAnogeQTxM0aQ8rqd8%3D"
          alt=""
        />
        <div className="absolute right-[48%] -bottom-10 border-2 border-white rounded-2xl">
          <img
            className="rounded-2xl"
            width={120}
            height={120}
            src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4407953/96caeabb93e547ccba0b91c928f513f4/eyJoIjoxMDgwLCJ3IjoxMDgwfQ%3D%3D/3.png?token-time=1744070400&token-hash=f4KJ0Gns7JN1UAkPGAY-iLLOBpPmXMFp5PyvbOzoEG8%3D"
            alt=""
          />
        </div>
      </div>

      <div className="info flex flex-col justify-center items-center gap-2 my-16 mr-14">
        <div className="text-2xl font-bold">@{username}</div>
        <div className="text-slate-400">
          Creating videos, podcasts and written content
        </div>
        <div className="text-slate-400">
          738 members . 415 Posts . $2,275/month
        </div>

        <div className="payments flex gap-3 w-[80%] mt-11">
          <div className="supporters w-1/2 bg-slate-900 rounded-lg text-white p-10">
            {/* Show list of all supporters as a leaderboard */}
            <h2 className="text-2xl font-bold my-5">Supporters</h2>
            <ul className="mx-5 text-lg">
              <li className="my-2 flex gap-2 items-center">
                <img width={23} src="avatar.gif" alt="user avatar" />
                <span>Shubham donated <span className="font-bold">$30</span> with a message "I support you bro.Lots of ❤️"</span>
                </li>
              <li className="my-2 flex gap-2 items-center">
                <img width={23} src="avatar.gif" alt="user avatar" />
                <span>Shubham donated <span className="font-bold">$30</span> with a message "I support you bro.Lots of ❤️"</span>
                </li>
              <li className="my-2 flex gap-2 items-center">
                <img width={23} src="avatar.gif" alt="user avatar" />
                <span>Shubham donated <span className="font-bold">$30</span> with a message "I support you bro.Lots of ❤️"</span>
                </li>
              <li className="my-2 flex gap-2 items-center">
                <img width={23} src="avatar.gif" alt="user avatar" />
                <span>Shubham donated <span className="font-bold">$30</span> with a message "I support you bro.Lots of ❤️"</span>
                </li>
              
            </ul>
          </div>

          <div className="makePayments w-1/2 bg-slate-900 rounded-lg text-white p-10">
          <h2 className="font-bold text-2xl my-5">Make a Payment</h2>
          <div className="flex gap-2 flex-col">
            {/* input for name and message */}
            <div>
            <input type="text" placeholder="Enter Name" className="w-full p-3 rounded-lg bg-slate-800"/>
          </div>
            <input type="text" placeholder="Enter Message" className="w-full p-3 rounded-lg bg-slate-800"/>
            <input type="text" placeholder="Enter Amount" className="w-full p-3 rounded-lg bg-slate-800"/>
            <button type="button" className="text-white bg-gradient-to-br from-purple-800 to-blue-800 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Pay</button>

          </div>
          {/* Or choose from these amounts */}
          <div className="flex gap-2 mt-5">
            <button className="rounded-lg p-3 bg-slate-800">Pay $10</button>
            <button className="rounded-lg p-3 bg-slate-800">Pay $20</button>
            <button className="rounded-lg p-3 bg-slate-800">Pay $30</button>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Username;
