import React from 'react';
import MainPage from '../../Mainpage';
import { useNavigate } from 'react-router-dom';
function Staff_4() {
  return (
    <>
    <MainPage />
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1279px] h-[645px] bg-[rgba(255,255,255,0.85)] rounded-xl">
       <div className='w-[57px] h-[59px] bg-[url(../../images/logo.png)] bg-cover bg-no-repeat rounded-[6px] relative mt-[32px] mr-0 mb-0 ml-[609px]' />
      <div className='w-[1057px] h-[200px] relative z-[45] mt-0 mr-0 mb-0 ml-[67px]'>
        <div className='w-[200px] h-[200px] bg-[url(../assets/images/9ee4b8dc-0ca7-424f-a699-c0602fb366bd.png)] bg-cover bg-no-repeat absolute top-0 left-[857px] z-[42]' />
        <span className="flex h-[23.5%] justify-start items-start font-['Inknut_Antiqua'] text-[20px] font-bold leading-[47px] text-[#000] absolute top-[11.5%] left-[10.12%] text-left whitespace-nowrap z-[43]">
          YEAR :
        </span>
        <div className='w-[145px] h-[47px] bg-[#fff] rounded-[8px] border-solid border border-[#fff] absolute top-[23px] left-[352px] box-content z-[1]'>
          <span className="flex h-[26px] justify-start items-start font-['Inter'] text-[16px] font-normal leading-[26px] text-[#171a1f] absolute top-[11px] left-[12px] text-left whitespace-nowrap z-[2]" />
        </div>
        <div className='w-[34px] h-[34px] absolute top-[33px] left-0 overflow-hidden z-[35]'>
          <div className='w-[35%] h-3/4 absolute top-[12.5%] left-[12.5%] z-[41]'>
            <div className='w-[11.899px] h-[8.5px] bg-[url(../../images/filter_inages.png)] bg-[length:100%_100%] bg-no-repeat relative z-[36] mt-0 mr-0 mb-0 ml-0' />
            <div className='w-[11.9px] h-[1.7px] bg-[url(../assets/images/2759f11f-94bd-4a30-a8c1-afc5753bacb8.png)] bg-[length:100%_100%] bg-no-repeat relative z-[41] mt-[3.4px] mr-0 mb-0 ml-0' />
            <div className='w-[11.899px] h-[8.5px] bg-[url(../assets/images/e41180cb-d39e-4154-b930-c7cdae0f659a.png)] bg-[length:100%_100%] bg-no-repeat relative z-[38] mt-[3.4px] mr-0 mb-0 ml-0' />
          </div>
        </div>
        <span className="flex h-[23.5%] justify-start items-start font-['Inknut_Antiqua'] text-[20px] font-bold leading-[47px] text-[#000] absolute top-[44%] left-[10.12%] text-left whitespace-nowrap z-[44]">
          DEPARTMENT:
        </span>
        <div className='w-[339px] h-[47px] bg-[#fff] rounded-[8px] border-solid border border-[#fff] absolute top-[88px] left-[349px] box-content z-[3]'>
          <span className="flex h-[26px] justify-start items-start font-['Inter'] text-[16px] font-normal leading-[26px] text-[#171a1f] absolute top-[11px] left-[12px] text-left whitespace-nowrap z-[4]" />
        </div>
        <span className="flex h-[23.5%] justify-start items-start font-['Inknut_Antiqua'] text-[20px] font-bold leading-[47px] text-[#000] absolute top-[76.5%] left-[10.12%] text-left whitespace-nowrap z-[45]">
          SECTION :
        </span>
        <div className='w-[140px] h-[47px] bg-[#fff] rounded-[8px] border-solid border border-[#fff] absolute top-[153px] left-[354px] box-content z-[5]'>
          <span className="flex h-[26px] justify-start items-start font-['Inter'] text-[16px] font-normal leading-[26px] text-[#171a1f] absolute top-[11px] left-[12px] text-left whitespace-nowrap z-[6]" />
        </div>
      </div>
      <div className='w-[1004.34px] h-[300px] bg-[rgba(0,0,0,0)] rounded-[8px] border-solid border border-[#dee1e6] relative overflow-hidden z-[7] mt-[35px] mr-0 mb-0 ml-[136px]'>
        <div className='w-[1004.34px] h-[68px] bg-[rgba(0,0,0,0)] relative z-[22] mt-0 mr-0 mb-0 ml-0'>
          <div className='w-[8.93%] h-full bg-[#fafafb] border-solid border border-[#dee1e6] absolute top-0 left-[91.07%] overflow-hidden z-[23]'>
            <span className="flex w-[57.67px] h-[22px] justify-center items-start font-['Epilogue'] text-[14px] font-semibold leading-[22px] text-[#565e6c] absolute top-[calc(50%-11px)] left-[calc(50%-29px)] text-center whitespace-nowrap z-[24]">
              POINTS
            </span>
          </div>
          <div className='w-[16.99%] h-full bg-[#fafafb] border-solid border border-[#dee1e6] absolute top-0 left-[74.08%] overflow-hidden z-[25]'>
            <span className="flex w-[138.67px] h-[22px] justify-center items-start font-['Epilogue'] text-[14px] font-semibold leading-[22px] text-[#171a1f] absolute top-[calc(50%-11px)] left-[calc(50%-69.5px)] text-center whitespace-nowrap z-[26]">
              VERIFIED
            </span>
          </div>
          <div className='w-[7.57%] h-full bg-[#fafafb] border-solid border border-[#dee1e6] absolute top-0 left-0 overflow-hidden z-[27]'>
            <span className="flex w-[44px] h-[22px] justify-center items-start font-['Epilogue'] text-[14px] font-semibold leading-[22px] text-[#171a1f] absolute top-[calc(50%-11px)] left-[calc(50%-22px)] text-center whitespace-nowrap z-[28]">
              S. No.
            </span>
          </div>
          <div className='w-[17.62%] h-full bg-[#fafafb] border-solid border border-[#dee1e6] absolute top-0 left-[7.57%] overflow-hidden z-[29]'>
            <span className="flex w-[145px] h-[22px] justify-center items-start font-['Epilogue'] text-[14px] font-semibold leading-[22px] text-[#171a1f] absolute top-[calc(50%-11px)] left-[calc(50%-72.5px)] text-center whitespace-nowrap z-30">
              ROLL NO
            </span>
          </div>
          <button className='w-[33.65%] h-full bg-[#fafafb] border-solid border border-[#dee1e6] absolute top-0 left-[25.19%] overflow-hidden z-[31] pointer'>
            <span className="flex w-[306px] h-[22px] justify-center items-start font-['Epilogue'] text-[14px] font-semibold leading-[22px] text-[#171a1f] absolute top-[calc(50%-11px)] left-[calc(50%-153px)] text-center whitespace-nowrap z-[32]">
              NAME
            </span>
          </button>
          <div className='w-[15.23%] h-full bg-[#fafafb] border-solid border border-[#dee1e6] absolute top-0 left-[58.84%] overflow-hidden z-[33]'>
            <span className="flex w-[121px] h-[22px] justify-center items-start font-['Epilogue'] text-[14px] font-semibold leading-[22px] text-[#171a1f] absolute top-[calc(50%-11px)] left-[calc(50%-60.5px)] text-center whitespace-nowrap z-[34]">
              SUMBITED
            </span>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
export default Staff_4;
