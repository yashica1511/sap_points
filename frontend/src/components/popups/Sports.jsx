import React from 'react';

const SportsPopup = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-10 z-50">
  <div className="relative overflow-hidden custom-container">
    <div class="absolute top-[-138px] left-[129px] w-[187px] h-[191px] bg-[#8353E2FF] rounded-full"/>
    <div class="absolute top-[87px] left-[408px] w-[147px] h-[137px] bg-[#8353E2FF] rounded-full"/>
    <div class="absolute top-[317px] left-[-49px] w-[178px] h-[179px] bg-[#8353E2FF] rounded-full"/>
    <div>
      <div className="bg-purple-300 p-8 rounded-lg w-30">
        <h2 className="flex justify-center items-center font-['Inknut_Antiqua'] text-[26px] font-semibold leading-[30px] text-[#fff] relative text-center mb-6 text-black">SPORTS AND GAMES</h2>
        <div className="mb-6">
          <select className="flex justify-center items-center border rounded items-center px-4 py-2 w-full custom-select mx-auto">
          <option value="" disabled selected style={{ display: "none" }}>Place</option>
            <option value="in">Inside</option>
            <option value="out">Zone/ Outside</option>
            <option value="sta">State/ Inter Zone</option>
            <option value="inter">National/ International</option>
          </select>
        </div>
        <div className="mb-4">
          <select className="flex justify-center items-center border rounded px-4 py-2 w-full custom-select mx-auto">
          <option value="" disabled selected style={{ display: "none" }}>Position</option>
            <option value="par">Presented</option>
            <option value="pri">Prize</option>
          </select>
        </div>
        <div className="mb-4">
        <div className="font-['Inknut_Antiqua'] text-[26px] font-semibold leading-[30px] text-[#fff] absolute top-[223px] left-[100px] w-[102px] h-[36px] text-black">
          <h4 className="font-bold"><b>DATE:</b></h4>
        </div>
          <input type="date" className="mt-2 border rounded px-4 py-2 w-30 ml-44" />
        </div>
        <div className="mb-4">
        <div className="font-['Inknut_Antiqua'] text-[26px] font-semibold leading-[30px] text-[#fff] absolute top-[283px] left-[100px] w-[102px] h-[36px] text-black">
          <h4 className="font-bold"><b>PROOF:</b></h4>
        </div>
        <div className="pa_custom-file-upload absolute top-[277px] left-[253px] w-[105px] h-[36px] flex items-center justify-center font-medium text-white bg-secondary-500 opacity-100 cursor-pointer rounded-md">
  <label htmlFor="fileUpload" className="custom-file-upload">
    <input type="file" name="fileUpload" id="fileUpload" style={{ display: "none" }} onChange={(e) => {
      var fileName = e.target.value.split("\\").pop();
      var label = document.querySelector(".custom-file-upload");
      if (fileName) {
        label.innerHTML = fileName;
      } else {
        label.innerHTML = "Upload";
      }
    }} />
    Upload
      </label>
      </div>
        </div>
        <div className="mt-20 flex justify-end">
          <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={onClose}>Submit</button>
        </div>
      </div>
    </div>
  </div>
</div>
  );
};


export default SportsPopup;
