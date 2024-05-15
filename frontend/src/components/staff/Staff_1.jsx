import React, { useContext, useEffect, useState } from 'react';
import MainPage from '../../Mainpage';
import { StudentContext } from '../../context/StudentContext';
import { useNavigate } from 'react-router-dom';
import supabase from '../../database/Client';
import Staff_2 from './Staff_2';
import Staff_3 from './Staff_3';
function Staff_1() {
    const navigate = useNavigate(); 
    const page2 = () => {
        navigate('/Staff_2');
    };
    const page3 = () => {
        navigate('/Staff_3');
    };
    return (
        <>
            <MainPage />
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1279px] h-[645px] bg-[rgba(255,255,255,0.85)] rounded-xl">
                <div className='w-[57px] h-[59px] bg-[url(../../images/logo.png)] bg-cover bg-no-repeat rounded-[6px] relative mt-[61px] mr-0 mb-0 ml-[609px]' />
                <span className="block h-[39px] font-['Inknut_Antiqua'] text-[30px] font-normal leading-[39px] text-[#000] relative text-left whitespace-nowrap z-[5] mt-[48px] mr-0 mb-0 ml-[365px]">
                    DEPARTMENT OF ARTIFICIAL INTELLIGENCE
                </span>
                <div className='flex w-[545px] h-[131px] justify-between items-center relative z-[3] mt-[107px] mr-0 mb-0 ml-[365px]'>
                    <button className='w-[244px] h-[131px] shrink-0 bg-[#a07ce9] rounded-[8px] border-none relative overflow-hidden shadow-[0_17px_35px_0_rgba(23,26,31,0.24)] z-[1] pointer ' onClick={page2}>
                        <span className="flex h-[39px] justify-start items-start font-['Inknut_Antiqua'] text-[20px] font-normal leading-[38.685px] text-[#000] absolute top-[50px] left-[calc(50%-42px)] text-left whitespace-nowrap z-[2]">
                            REPORT
                        </span>
                    </button>
                    <button className='w-[244px] h-[131px] shrink-0 bg-[#a07ce9] rounded-[8px] border-none relative overflow-hidden shadow-[0_17px_35px_0_rgba(23,26,31,0.24)] z-[3] pointer' onClick={page3}>
                        <span className="flex h-[39px] justify-start items-start font-['Inknut_Antiqua'] text-[20px] font-normal leading-[38.685px] text-[#000] absolute top-[50px] left-[calc(50%-42px)] text-left whitespace-nowrap z-[4]">
                            APPROVE
                        </span>
                    </button>
                </div>
            </div>
        </>
    );
}
export default Staff_1;
