import React from 'react';
import MainPage from '../../Mainpage';
import { useNavigate } from 'react-router-dom';
function Admin_1() {
    const navigate = useNavigate();
    const alloc = () => {
        navigate('/Admin_2');
    };
  return (<>
    <MainPage/>
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1279px] h-[645px] bg-[rgba(255,255,255,0.85)] rounded-xl">
      <div className='w-[57.096px] h-[59.093px] bg-[url(../../images/logo.png)] bg-cover bg-no-repeat rounded-[6px] relative mt-[61.991px] mr-0 mb-0 ml-[609.099px]' />
      <span className="block h-[70px] font-['Inknut_Antiqua'] text-[30px] font-normal leading-[39px] text-[#000] relative text-left rotate-[0.09deg] whitespace-nowrap z-[5] mt-[67.78px] mr-0 mb-0 ml-[350.863px]">
        DEPARTMENT OF ARTIFICIAL INTELLIGENCE
      </span>
      <div className='flex w-[545.212px] h-[100.887px] justify-between items-center relative z-[3] mt-[50.73px] mr-0 mb-0 ml-[365.511px]'>
        <button className='w-[244.213px] h-[131.397px] shrink-0 bg-[#a07ce9] rounded-[8px] border-none relative overflow-hidden shadow-[0_17px_35px_0_rgba(23,26,31,0.24)] z-[1] pointer'>
          <span className="flex w-[187px] h-[39px] justify-center items-start font-['Inknut_Antiqua'] text-[15px] font-normal leading-[38.685px] text-[#000] absolute top-[46.78px] left-[calc(50%-93.75px)] text-center rotate-[0.09deg] whitespace-nowrap z-[2]" onClick={alloc}>
            STAFF ALLOCATION
          </span>
        </button>
        <div className='w-[244.213px] h-[131.397px] shrink-0 bg-[#a07ce9] rounded-[8px] relative overflow-hidden shadow-[0_17px_35px_0_rgba(23,26,31,0.24)] z-[3]'>
          <span className="flex w-[121px] h-[39px] justify-center items-start font-['Inknut_Antiqua'] text-[15px] font-normal leading-[38.685px] text-[#000] absolute top-[46.78px] left-[calc(50%-63.61px)] text-center rotate-[0.09deg] whitespace-nowrap z-[4]">
            FETCH DATA
          </span>
        </div>
      </div>
    </div>
    </>
  );
}
export default Admin_1;