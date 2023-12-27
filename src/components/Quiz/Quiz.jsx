const Quiz = () => {
  return (
    <div className=" w-[500px] mx-auto mt-[30px] bg-white text-[#262626] rounded-[10px] px-[30px] py-[20px] flex flex-col gap-[20px]">
      <p className="text-3xl text-[#262626] uppercase font-[600]">Quiz App</p>

      <p>1. Which device is required for Internet connection ?</p>
      <ul>
        <li className="flex items-center h-[45px] pl-[15px] border border-[#686868] rounded-[8px]  mb-[14px] text-base cursor-pointer">Modem</li>
        <li className="flex items-center h-[45px] pl-[15px] border border-[#686868] rounded-[8px]  mb-[14px] text-base cursor-pointer">Router</li>
        <li className="flex items-center h-[45px] pl-[15px] border border-[#686868] rounded-[8px]  mb-[14px] text-base cursor-pointer">LAN Cable</li>
        <li className="flex items-center h-[45px] pl-[15px] border border-[#686868] rounded-[8px]  mb-[14px] text-base cursor-pointer">Pen Drive</li>
      </ul>
      <div>
        <button className="mx-auto w-full bg-[rgba(13,129,79,1)] hover:bg-white border border-transparent hover:border hover:border-[rgba(13,129,79,1)] hover:text-[rgba(13,129,79,1)] ease-in-out duration-150 h-[45px] rounded-[8px] text-white">
            Next
        </button>
      </div>
      <div className="text-center text-sm">
        1 of 5 questions
      </div>
    </div>
  );
};

export default Quiz;
