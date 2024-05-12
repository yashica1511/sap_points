import React from 'react';
import MainPage from '../../Mainpage';

import {useNavigate} from 'react-router-dom';
function Staff_2(){
  const navigate = useNavigate();
  const fdata_1  = () => {
    navigate('/Staff_4'); 
  };
  return (
    <><MainPage/>
     <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1279px] h-[645px] bg-[rgba(255,255,255,0.85)] rounded-xl">
      <div className='w-[57px] h-[59px] bg-[url(../../images/logo.png)] bg-cover bg-no-repeat rounded-[6px] relative mt-[32px] mr-0 mb-0 ml-[609px]' />
      <div className='w-[494px] h-[50px] relative z-[44] mt-[17px] mr-0 mb-0 ml-[67px]'>
        <span className="flex h-[78%] justify-start items-start font-['Inknut_Antiqua'] text-[20px] font-bold leading-[40px] text-[#000] absolute top-0 left-[15.79%] text-left whitespace-nowrap z-[44]">
          YEAR :
        </span>
        <div className='w-[145px] h-[47px] bg-[#fff] rounded-[8px] border-solid border border-[#fff] absolute top-0 left-[349px] box-content z-[1]'>
          <span className="flex h-[26px] justify-start items-start font-['Inter'] text-[16px] font-normal leading-[26px] text-[#171a1f] absolute top-[11px] left-[12px] text-left whitespace-nowrap z-[2]" />
        </div>
        <div className='w-[34px] h-[34px] absolute top-[16px] left-0 overflow-hidden z-[35]'>
          <div className='w-[35%] h-3/4 absolute top-[12.5%] left-[12.5%] z-[41]'>
            <div className='w-[11.899px] h-[8.5px] bg-[url(../../images/01/b71b4fab-5209-472e-8e7d-32a2b67684df.png)] bg-[length:100%_100%] bg-no-repeat relative z-[36] mt-0 mr-0 mb-0 ml-0' />
            <div className='w-[11.9px] h-[1.7px] bg-[url(../../images/01/771e16ca-f850-4eb0-b35f-7af0d502dd20.png)] bg-[length:100%_100%] bg-no-repeat relative z-[41] mt-[3.4px] mr-0 mb-0 ml-0' />
            <div className='w-[11.899px] h-[8.5px] bg-[url(../../images/01/92043f6c-a8b9-4634-a0ca-df7d5397e57c.png)] bg-[length:100%_100%] bg-no-repeat relative z-[38] mt-[3.4px] mr-0 mb-0 ml-0' />
          </div>
          <div className='w-[35%] h-[55%] absolute top-[22.5%] left-[52.5%] z-40'>
            <div className='w-[11.9px] h-[1.7px] bg-[url(../../images/01/3947fd3f-bfb5-407b-9d41-e659c7568be7.png)] bg-[length:100%_100%] bg-no-repeat relative z-[37] mt-0 mr-0 mb-0 ml-0' />
            <div className='w-[11.899px] h-[8.5px] bg-[url(../../images/01/bd8854c5-6675-476b-88ae-01d87d49dbc7.png)] bg-[length:100%_100%] bg-no-repeat relative z-40 mt-[3.4px] mr-0 mb-0 ml-0' />
            <div className='w-[11.9px] h-[1.7px] bg-[url(../../images/01/4b37b940-33d9-4cb7-bcad-4dedcbf46b11.png)] bg-[length:100%_100%] bg-no-repeat relative z-[39] mt-[3.4px] mr-0 mb-0 ml-0' />
          </div>
        </div>
      </div>
      <div className='w-[995px] h-[59px] relative z-[45] mt-[11px] mr-0 mb-0 ml-[145px]'>
        <div className='w-[61.31%] h-full absolute top-0 left-0 z-[45]'>
          <span className="flex h-[66.1%] justify-start items-start font-['Inknut_Antiqua'] text-[20px] font-bold leading-[40px] text-[#000] absolute top-0 left-0 text-left whitespace-nowrap z-[45]">
            DEPARTMENT
          </span>
          <div className='w-[339px] h-[47px] bg-[#fff] rounded-[8px] border-solid border border-[#fff] absolute top-0 left-[271px] box-content z-[3]'>
            <span className="flex h-[26px] justify-start items-start font-['Inter'] text-[16px] font-normal leading-[26px] text-[#171a1f] absolute top-[11px] left-[12px] text-left whitespace-nowrap z-[4]" />
          </div>
        </div>
        <button className='w-[160px] h-[38px] bg-[rgba(131,83,226,0.93)] rounded-[4px] border-none absolute top-[21px] left-[789px] overflow-hidden z-[42] pointer'>
          <span className="flex h-[102.63%] justify-start items-start font-['Inknut_Antiqua'] text-[15px] font-normal leading-[38.685px] text-[#000] absolute top-[-2.63%] left-[2.91%] text-left whitespace-nowrap z-[43]" onClick={fdata_1}> 
            DOWNLOAD REPORT
          </span>
        </button>
      </div>
      <div className='w-[411px] h-[47px] relative z-[46] mt-px mr-0 mb-0 ml-[145px]'>
        <span className="flex h-[82.98%] justify-start items-start font-['Inknut_Antiqua'] text-[20px] font-bold leading-[40px] text-[#000] absolute top-0 left-0 text-left whitespace-nowrap z-[46]">
          SECTION :
        </span>
        <div className='w-[140px] h-[47px] bg-[#fff] rounded-[8px] border-solid border border-[#fff] absolute top-0 left-[271px] box-content z-[5]'>
          <span className="flex h-[26px] justify-start items-start font-['Inter'] text-[16px] font-normal leading-[26px] text-[#171a1f] absolute top-[11px] left-[12px] text-left whitespace-nowrap z-[6]" />
        </div>
      </div>
      <div className='w-[1004.02px] h-[164px] bg-[rgba(0,0,0,0)] rounded-[8px] border-solid border border-[#dee1e6] relative overflow-hidden z-[7] mt-[74px] mr-0 mb-0 ml-[136px]'>
        <div className='w-[1004.02px] h-[68px] bg-[rgba(0,0,0,0)] relative z-[22] mt-0 mr-0 mb-0 ml-0'>
          <div className='w-[14.81%] h-full bg-[#fafafb] border-solid border border-[#dee1e6] absolute top-0 left-[6.94%] overflow-hidden z-[23]'>
            <span className="flex w-[116.67px] h-[22px] justify-center items-start font-['Epilogue'] text-[14px] font-semibold leading-[22px] text-[#171a1f] absolute top-[calc(50%-11px)] left-[calc(50%-58.5px)] text-center whitespace-nowrap z-[24]">
              ROLL NO
            </span>
          </div>
          <div className='w-[26.76%] h-full bg-[#fafafb] border-solid border border-[#dee1e6] absolute top-0 left-[21.75%] overflow-hidden z-[25]'>
            <span className="flex w-[236.67px] h-[22px] justify-center items-start font-['Epilogue'] text-[14px] font-semibold leading-[22px] text-[#171a1f] absolute top-[calc(50%-11px)] left-[calc(50%-118.5px)] text-center whitespace-nowrap z-[26]">
              NAME
            </span>
          </div>
          <div className='w-[17%] h-full bg-[#fafafb] border-solid border border-[#dee1e6] absolute top-0 left-[74.07%] overflow-hidden z-[27]'>
            <span className="flex w-[138.67px] h-[22px] justify-center items-start font-['Epilogue'] text-[14px] font-semibold leading-[22px] text-[#171a1f] absolute top-[calc(50%-11px)] left-[calc(50%-69.5px)] text-center whitespace-nowrap z-[28]">
              VERIFIED
            </span>
          </div>
          <div className='w-[8.93%] h-full bg-[#fafafb] border-solid border border-[#dee1e6] absolute top-0 left-[91.07%] overflow-hidden z-[29]'>
            <span className="flex w-[57.67px] h-[22px] justify-center items-start font-['Epilogue'] text-[14px] font-semibold leading-[22px] text-[#565e6c] absolute top-[calc(50%-11px)] left-[calc(50%-29px)] text-center whitespace-nowrap z-30">
              POINTS
            </span>
          </div>
          <div className='w-[6.94%] h-full bg-[#fafafb] border-solid border border-[#dee1e6] absolute top-0 left-0 overflow-hidden z-[31]'>
            <span className="flex w-[37.67px] h-[44px] justify-center items-start font-['Epilogue'] text-[16px] font-semibold leading-[30px] text-[#171a1f] absolute top-[calc(50%-22px)] left-[calc(50%-19px)] text-center z-[32]">
              S.No.
            </span>
          </div>
          <div className='w-[25.56%] h-full bg-[#fafafb] border-solid border border-[#dee1e6] absolute top-0 left-[48.51%] overflow-hidden z-[33]'>
            <button className="w-[224.67px] h-[22px] font-['Epilogue'] text-[14px] font-semibold leading-[22px] text-[#171a1f] border-none absolute top-1/2 left-1/2 translate-x-[-50.07%] translate-y-[-50%] whitespace-nowrap z-[34] pointer" />
          </div>
        </div>
        <div className='w-[1004.02px] h-[48px] bg-[rgba(0,0,0,0)] relative z-[8] mt-0 mr-0 mb-0 ml-0'>
          <div className='w-[26.76%] h-full bg-[#fff] border-solid border border-[#dee1e6] absolute top-0 left-[21.75%] overflow-hidden z-[9]' />
          <div className='w-[14.81%] h-full bg-[#fff] border-solid border border-[#dee1e6] absolute top-0 left-[6.94%] overflow-hidden z-10' />
          <div className='w-[6.94%] h-full bg-[#fff] border-solid border border-[#dee1e6] absolute top-0 left-0 overflow-hidden z-[11]' />
          <div className='w-[17%] h-full bg-[#fff] border-solid border border-[#dee1e6] absolute top-0 left-[74.07%] overflow-hidden z-[12]' />
          <div className='w-[25.56%] h-full bg-[#fff] border-solid border border-[#dee1e6] absolute top-0 left-[48.51%] overflow-hidden z-[13]' />
          <div className='w-[8.93%] h-full bg-[#fff] border-solid border border-[#dee1e6] absolute top-0 left-[91.07%] overflow-hidden z-[14]' />
        </div>
        <div className='w-[1004.02px] h-[48px] bg-[rgba(0,0,0,0)] relative z-[15] mt-0 mr-0 mb-0 ml-0'>
          <div className='w-[26.76%] h-full bg-[#fff] border-solid border border-[#dee1e6] absolute top-0 left-[21.75%] overflow-hidden z-[16]' />
          <div className='w-[25.56%] h-full bg-[#fff] border-solid border border-[#dee1e6] absolute top-0 left-[48.51%] overflow-hidden z-[17]' />
          <div className='w-[17%] h-full bg-[#fff] border-solid border border-[#dee1e6] absolute top-0 left-[74.07%] overflow-hidden z-[18]' />
          <div className='w-[6.94%] h-full bg-[#fff] border-solid border border-[#dee1e6] absolute top-0 left-0 overflow-hidden z-[19]' />
          <div className='w-[14.81%] h-full bg-[#fff] border-solid border border-[#dee1e6] absolute top-0 left-[6.94%] overflow-hidden z-20' />
          <div className='w-[8.93%] h-full bg-[#fff] border-solid border border-[#dee1e6] absolute top-0 left-[91.07%] overflow-hidden z-[21]' />
        </div>
      </div>
    </div>
    </>
  );
}
export default Staff_2;