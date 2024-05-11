import React from 'react';
import MainPage from '../../Mainpage';
function Admin_4() {
  return (
    <>
    <MainPage/>
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1279px] h-[645px] bg-[rgba(255,255,255,0.85)] rounded-xl">
       <div className='w-[1219px] h-[59px] relative z-[43] mt-[32px] mr-0 mb-0 ml-[30px]'>
        <div className='w-[57px] h-[59px] bg-[url(../../images/logo.png)] bg-cover bg-no-repeat rounded-[6px] absolute top-0 left-0' />
        <div className='h-[59px] absolute top-0 left-[94px] right-[929px] z-[41]'>
          <span className="flex h-[47px] justify-start items-start font-['Inknut_Antiqua'] text-[25px] font-bold leading-[47px] text-[#000] absolute top-[11px] left-[calc(50%-98px)] text-left whitespace-nowrap z-[41]">
            YEAR :
          </span>
          <div className='w-[69px] h-[47px] bg-[#fff] rounded-[8px] border-solid border border-[#fff] absolute top-[11px] left-[127px] box-content overflow-hidden z-[1]'>
            <input className='w-[69px] h-[47px] bg-transparent border-none absolute top-0 left-0 z-[3]' />
          </div>
        </div>
        <span className="flex h-[47px] justify-start items-start font-['Inknut_Antiqua'] text-[25px] font-bold leading-[47px] text-[#000] absolute top-[11px] left-[calc(50%-273.5px)] text-left whitespace-nowrap z-[43]">
          DEPARTMENT :
        </span>
        <div className='w-[339px] h-[47px] bg-[#fff] rounded-[8px] border-solid border border-[#fff] absolute top-[11px] left-[582px] box-content z-[4]'>
          <span className="flex h-[26px] justify-start items-start font-['Inter'] text-[16px] font-normal leading-[26px] text-[#171a1f] absolute top-[calc(50%-12.5px)] left-[12px] right-[327px] text-left whitespace-nowrap z-[5]" />
        </div>
        <span className="flex h-[47px] justify-start items-start font-['Inknut_Antiqua'] text-[25px] font-bold leading-[47px] text-[#000] absolute top-[11px] left-[calc(50%--366.5px)] text-left whitespace-nowrap z-[6]">
          SECTION :
        </span>
        <div className='w-[69px] h-[47px] bg-[#fff] rounded-[8px] border-solid border border-[#fff] absolute top-[11px] left-[1150px] box-content z-[7]'>
          <span className="flex h-[26px] justify-start items-start font-['Inter'] text-[16px] font-normal leading-[26px] text-[#171a1f] absolute top-[11px] left-[12px] text-left whitespace-nowrap z-[8]" />
        </div>
      </div>
      <div className='flex w-[595px] h-[47px] justify-between items-center relative z-[42] mt-[37px] mr-0 mb-0 ml-[137px]'>
        <span className="h-[47px] shrink-0 font-['Inknut_Antiqua'] text-[25px] font-bold leading-[47px] text-[#000] relative text-left whitespace-nowrap z-[42]">
          NAME:
        </span>
        <div className='w-[442px] h-[47px] shrink-0 bg-[#fff] rounded-[8px] border-solid border border-[#fff] relative box-content z-[37]'>
          <span className="flex h-[26px] justify-start items-start font-['Inter'] text-[16px] font-normal leading-[26px] text-[#171a1f] absolute top-[11px] left-[12px] text-left whitespace-nowrap z-[38]" />
        </div>
      </div>
      <button className='w-[187px] h-[36px] bg-[rgba(131,83,226,0.93)] rounded-[4px] border-none relative overflow-hidden z-[39] pointer mt-[25px] mr-0 mb-0 ml-[999px]'>
        <span className="flex h-[28px] justify-start items-start font-['Inknut_Antiqua'] text-[16px] font-bold leading-[28px] text-[#000] absolute top-[4px] left-[calc(50%-80.5px)] text-left whitespace-nowrap z-40">
          DOWNLOAD REPORT
        </span>
      </button>
      <div className='w-[1123.02px] h-[155.15px] bg-[rgba(0,0,0,0)] rounded-[8px] border-solid border border-[#dee1e6] relative overflow-hidden z-[9] mt-[27px] mr-0 mb-0 ml-[79px]'>
        <div className='w-[1123.02px] h-[59.15px] bg-[rgba(0,0,0,0)] relative z-[24] mt-0 mr-0 mb-0 ml-0'>
        <div className='w-[17.05%] h-full bg-[#fafafb] border-solid border border-[#dee1e6] absolute top-0 left-[31.82%] overflow-hidden z-[25]'>
            <span className="flex w-[159.42px] h-[22px] justify-center items-start font-['Epilogue'] text-[14px] font-semibold leading-[22px] text-[#171a1f] absolute top-[calc(50%-11px)] left-[calc(50%-80px)] text-center whitespace-nowrap z-[26]">
              NAME
            </span>
          </div>
          
          <button className='w-[10.63%] h-full bg-[#fafafb] border-solid border border-[#dee1e6] absolute top-0 left-[89.37%] overflow-hidden z-[27] pointer'>
            <span className="flex w-[87.42px] h-[22px] justify-center items-start font-['Epilogue'] text-[14px] font-semibold leading-[22px] text-[#171a1f] absolute top-[calc(50%-11px)] left-[calc(50%-44px)] text-center whitespace-nowrap z-[28]">
              VERIFIRED
            </span>
          </button>
          <div className='w-[17.05%] h-full bg-[#fafafb] border-solid border border-[#dee1e6] absolute top-0 left-[14.77%] overflow-hidden z-[29]'>
            <span className="flex w-[159.42px] h-[22px] justify-center items-start font-['Epilogue'] text-[14px] font-semibold leading-[22px] text-[#171a1f] absolute top-[calc(50%-11px)] left-[calc(50%-80px)] text-center whitespace-nowrap z-30">
              ROLL NO
            </span>
          </div>
          <div className='w-[23.9%] h-full bg-[#fafafb] border-solid border border-[#dee1e6] absolute top-0 left-[48.86%] overflow-hidden z-[31]'>
            <div className="w-[236.42px] h-[22px] font-['Epilogue'] text-[14px] font-semibold leading-[22px] text-[#171a1f] border-none absolute top-1/2 left-1/2 translate-x-[-50.12%] translate-y-[-50%] whitespace-nowrap z-[32] pointer" />
            <span className="flex w-[154.42px] h-[22px] justify-center items-start font-['Epilogue'] text-[14px] font-semibold leading-[22px] text-[#171a1f] absolute top-[calc(50%-11px)] left-[calc(50%-77.5px)] text-center whitespace-nowrap z-[34]">
              E-MAIL
            </span>
          </div>
          <div className='w-[16.6%] h-full bg-[#fafafb] border-solid border border-[#dee1e6] absolute top-0 left-[72.77%] overflow-hidden z-[33] pointer'>
            <span className="flex w-[154.42px] h-[22px] justify-center items-start font-['Epilogue'] text-[14px] font-semibold leading-[22px] text-[#171a1f] absolute top-[calc(50%-11px)] left-[calc(50%-77.5px)] text-center whitespace-nowrap z-[34]">
              SAP POINTS
            </span>
          </div>
          <div className='w-[14.77%] h-full bg-[#fafafb] border-solid border border-[#dee1e6] absolute top-0 left-0 overflow-hidden z-[35]'>
            <span className="flex w-[133.92px] h-[22px] justify-center items-start font-['Epilogue'] text-[14px] font-semibold leading-[22px] text-[#171a1f] absolute top-[calc(50%-11px)] left-[calc(50%-67px)] text-center whitespace-nowrap z-[36]">
              S. No.
            </span>
          </div>
        </div>
        <div className='w-[1123.02px] h-[48px] bg-[rgba(0,0,0,0)] relative z-10 mt-0 mr-0 mb-0 ml-0'>
          <div className='w-[17.05%] h-full bg-[#fff] border-solid border border-[#dee1e6] absolute top-0 left-[31.82%] overflow-hidden z-[11]' />
          <div className='w-[16.6%] h-full bg-[#fff] border-solid border border-[#dee1e6] absolute top-0 left-[72.77%] overflow-hidden z-[12]' />
          <div className='w-[17.05%] h-full bg-[#fff] border-solid border border-[#dee1e6] absolute top-0 left-[14.77%] overflow-hidden z-[13]' />
          <div className='w-[10.63%] h-full bg-[#fff] border-solid border border-[#dee1e6] absolute top-0 left-[89.37%] overflow-hidden z-[14]' />
          <div className='w-[23.9%] h-full bg-[#fff] border-solid border border-[#dee1e6] absolute top-0 left-[48.86%] overflow-hidden z-[15]' />
          <div className='w-[14.77%] h-full bg-[#fff] border-solid border border-[#dee1e6] absolute top-0 left-0 overflow-hidden z-[16]' />
        </div>
        <div className='w-[1123.02px] h-[48px] bg-[rgba(0,0,0,0)] relative z-[17] mt-0 mr-0 mb-0 ml-0'>
          <div className='w-[17.05%] h-full bg-[#fff] border-solid border border-[#dee1e6] absolute top-0 left-[14.77%] overflow-hidden z-[18]' />
          <div className='w-[17.05%] h-full bg-[#fff] border-solid border border-[#dee1e6] absolute top-0 left-[31.82%] overflow-hidden z-[19]' />
          <div className='w-[16.6%] h-full bg-[#fff] border-solid border border-[#dee1e6] absolute top-0 left-[72.77%] overflow-hidden z-20' />
          <div className='w-[10.63%] h-full bg-[#fff] border-solid border border-[#dee1e6] absolute top-0 left-[89.37%] overflow-hidden z-[21]' />
          <div className='w-[23.9%] h-full bg-[#fff] border-solid border border-[#dee1e6] absolute top-0 left-[48.86%] overflow-hidden z-[22]' />
          <div className='w-[14.77%] h-full bg-[#fff] border-solid border border-[#dee1e6] absolute top-0 left-0 overflow-hidden z-[23]' />
        </div>
      </div>
    </div>
    </>
  );
}
export default Admin_4;