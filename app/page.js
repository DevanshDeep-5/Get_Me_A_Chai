import Image from "next/image";

export default function Home() {
  return (
    <>
<div className="flex justify-center items-center flex-col text-white h-[40vh] gap-4">

  <div className="font-bold text-5xl flex gap-2 justify-center items-center">Buy Me a Chai <span><img className="pb-4" src="/tea.gif" alt="" width={44} /></span></div>

    <p>A crowdfunding platform for creators. Get funded by your fans and followers. Start Now! </p>
    <div>
    <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Now</button>
    <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>
    </div>
    </div>

    <div className="bg-white h-1 opacity-10"></div> 

    <div className="text-white container mx-auto pb-32 pt-14">
      <h2 className="text-center font-bold text-3xl mb-14">Your Fans can buy you a Chai</h2>
      <div className="flex gap-5 justify-around">

      <div className="item space-y-3 flex flex-col items-center justify-center">
      <img className=" bg-slate-400 rounded-full  text-black" width={133} src="/man.gif" alt="" />
          <p className="font-bold pl-4">Fund Yourself</p>
          <p className="text-center">Your Fans are available for you to help you</p>

        </div>
        <div className="item space-y-3 flex flex-col items-center justify-center">
          <img className=" bg-slate-400 rounded-full  text-black" width={133} src="/man.gif" alt="" />
          <p className="font-bold pl-4">Fund Yourself</p>
          <p className="text-center">Your Fans are available for you to help you</p>

        </div>
        <div className="item space-y-3 flex flex-col items-center justify-center">
          <img className=" bg-slate-400 rounded-full text-black" width={133} src="/man.gif" alt="" />
          <p className="font-bold pl-4">Fans want to help</p>
          <p className="text-center">Your Fans are available for you to help you</p>
        </div>
      </div>
    </div>

    <div className="bg-white h-1 opacity-10"></div> 

    <div className="text-white container mx-auto pb-32 pt-14 flex flex-col justify-center items-center">
      <h2 className="text-center font-bold text-3xl mb-14">Learn More About Us</h2>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/CGMDp9AkdeA?si=vQigq8oPE9VZxQlm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
    
</>
 );
}
