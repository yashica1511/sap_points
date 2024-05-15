import React from 'react';
import MainPage from '../../Mainpage';
import { useNavigate } from 'react-router-dom';
function Admin_3() {
    const navigate = useNavigate();
    const fgdata = () => {
        navigate('/Admin_4');
    };
  return (
    <>
    <MainPage />
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1279px] h-[645px] bg-[rgba(255,255,255,0.85)] rounded-xl">
      <div className='w-[57px] h-[59px] bg-[url(../../images/logo.png)] bg-cover bg-no-repeat rounded-[6px] relative mt-[61px] mr-0 mb-0 ml-[609px]' />
      <span className="flex w-[568px] h-[39px] justify-center items-start font-['Inknut_Antiqua'] text-[25px] font-bold leading-[39px] text-[#000] relative text-center whitespace-nowrap z-[17] mt-[33px] mr-0 mb-0 ml-[354px]">
        FETCH THE DATA OF STUDENT
      </span>
      <div className='w-[245px] h-[55px] bg-[rgba(0,0,0,0)] rounded-[8px] border-solid border-[5px] border-[rgba(144,149,160,0.2)] absolute top-1/2 left-1/2 translate-x-[58.57%] translate-y-[-173.64%] z-[2] pointer'>
          <select className="flex w-[100px] h-[26px] justify-start items-start font-['Inter'] text-[20px] font-normal leading-[26px] text-[#171a1f] absolute top-[calc(50%-12.5px)] left-[79.5px] right-[101.5px] text-left  bg-transparent whitespace-nowrap z-[3]">
      <option value="III">III</option>
      <option value="II">II</option>
          </select>
          <div className='w-[16px] h-[16px] absolute top-1/2 right-[11px] translate-x-0 translate-y-[-46.88%] overflow-hidden z-[4]'>
          </div>
      </div>
      <span className="flex h-[47px] justify-start items-start font-['Inknut_Antiqua'] text-[25px] font-bold leading-[47px] text-[#000] absolute top-[230px] left-[calc(50%-371.5px)] text-left whitespace-nowrap z-[18]">
        YEAR :
      </span>
      <div className='w-[245px] h-[55px] bg-[rgba(0,0,0,0)] rounded-[8px] border-solid border-[5px] border-[rgba(144,149,160,0.2)] absolute top-1/2 left-1/2 translate-x-[58.57%] translate-y-[19.09%] z-[7] pointer'>
          <select className="flex w-[100px] h-[26px] justify-start items-start font-['Inter'] text-[20px] font-normal leading-[26px] text-[#171a1f] absolute top-[calc(50%-12.5px)] left-[79.5px] right-[101.5px] text-left bg-transparent whitespace-nowrap z-[3]">
            <option value="DS">AI & DS</option>
            <option value="ML">AI & ML</option>
          </select>
          <div className='w-[16px] h-[16px] absolute top-1/2 right-[11px] translate-x-0 translate-y-[-46.88%] overflow-hidden z-[9]'>
            <div className='w-[12px] h-[7.073px] bg-[url(../assets/images/69ee8afd-a9e8-4e4c-8a9c-6a697225ba00.png)] bg-[length:100%_100%] bg-no-repeat relative z-10 mt-[4.667px] mr-0 mb-0 ml-[2px]' />
          </div>
       
      </div>
      <span className="flex h-[47px] justify-start items-start font-['Inknut_Antiqua'] text-[25px] font-bold leading-[47px] text-[#000] absolute top-[330px] left-[calc(50%-371.5px)] text-left whitespace-nowrap z-[19]">
        DEPARTMENT :
      </span>
      <div className='w-[245px] h-[55px] bg-[rgba(0,0,0,0)] rounded-[8px] border-solid border-[5px] border-[rgba(144,149,160,0.2)] absolute top-1/2 left-1/2 translate-x-[58.57%] translate-y-[210%] z-[12] pointer'>
      <select className="flex w-[100px] h-[26px] justify-start items-start font-['Inter'] text-[20px] font-normal leading-[26px] text-[#171a1f] absolute top-[calc(50%-12.5px)] left-[79.5px] right-[101.5px] text-left bg-transparent whitespace-nowrap z-[3]">
             <option value="A">A</option>
            <option value="B">B</option>
          </select>
          <div className='w-[16px] h-[16px] absolute top-1/2 right-[11px] translate-x-0 translate-y-[-46.88%] overflow-hidden z-[14]'>
            <div className='w-[12px] h-[7.073px] bg-[url(../assets/images/bbe223cd-e417-4ca0-9dac-51297d5908a0.png)] bg-[length:100%_100%] bg-no-repeat relative z-[15] mt-[4.667px] mr-0 mb-0 ml-[2px]' />
          </div>
      </div>
      <span className="flex h-[47px] justify-start items-start font-['Inknut_Antiqua'] text-[25px] font-bold leading-[47px] text-[#000] absolute top-[440px] left-[calc(50%-371.5px)] text-left whitespace-nowrap z-20">
        SECTION :
      </span>
      <button className="flex w-[145px] h-[45px] justify-center items-start font-['Inknut_Antiqua'] text-[20px] font-bold leading-[45px] text-[#000] absolute top-[550px] left-[calc(50%--239.5px)] text-center whitespace-nowrap z-[21]" >
        GET DATA
      </button>
      <div className='w-[145px] h-[45px] bg-[rgba(131,83,226,0.93)] rounded-[10px] border-none absolute top-[550px] left-[877px] overflow-hidden z-[16] pointer' onClick={fgdata}>
        </div>
    </div>
    </>
  );
}
export default Admin_3;