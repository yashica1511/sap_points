import React, { useEffect, useState } from 'react';
import MainPage from '../../Mainpage';
import supabase from '../../database/Client';
import { useNavigate } from 'react-router-dom';

function Admin_2() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        const { data, error } = await supabase.from('staff_detils').select('*');

        if (error) {
            console.error('Error fetching data:', error);
        } else {
            setData(data);
            console.log(data);
        }
    }

    return (
        <>
            <MainPage />
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1279px] h-[645px] bg-[rgba(255,255,255,0.85)] rounded-xl">
                <div className='w-[57.096px] h-[59.093px] bg-[url(../../images/logo.png)] bg-cover bg-no-repeat rounded-[6px] relative mt-[61.991px] mr-0 mb-0 ml-[609.099px]' />
                <span className="block h-[70px] font-['Inknut_Antiqua'] text-[30px] font-normal leading-[39px] text-[#000] relative text-left rotate-[0.09deg] whitespace-nowrap z-[5] mt-[67.78px] mr-0 mb-0 ml-[350.863px]">
                    DEPARTMENT OF ARTIFICIAL INTELLIGENCE
                </span>
                <div className='w-[1065.44px] h-[155px] bg-[rgba(0,0,0,0)] rounded-[8px] border-solid border border-[#dee1e6] relative overflow-hidden z-[1] mt-[57px] mr-0 mb-0 ml-[104px]'>
                    <div className='w-[1065.44px] h-[59px] bg-[rgba(0,0,0,0)] relative z-10 mt-0 mr-0 mb-0 ml-0'>
                        <div className='w-[52.47%] h-full bg-[#fafafb] border-solid border border-[#dee1e6] absolute top-0 left-[12.95%] overflow-hidden z-[11]'>
                            <span className="flex w-[527px] h-[22px] justify-center items-start font-['Epilogue'] text-[14px] font-semibold leading-[22px] text-[#171a1f] absolute top-[calc(50%-11px)] left-[calc(50%-263.5px)] text-center whitespace-nowrap z-[12]">
                                NAME
                            </span>
                        </div>
                        <div className='w-[12.95%] h-full bg-[#fafafb] border-solid border border-[#dee1e6] absolute top-0 left-0 overflow-hidden z-[13]'>
                            <span className="flex w-[106px] h-[22px] justify-center items-start font-['Epilogue'] text-[14px] font-semibold leading-[22px] text-[#171a1f] absolute top-[calc(50%-11px)] left-[calc(50%-53px)] text-center whitespace-nowrap z-[14]">
                                S. No.
                            </span>
                        </div>
                        <button className='w-[34.58%] h-full bg-[#fafafb] border-solid border border-[#dee1e6] absolute top-0 left-[65.42%] overflow-hidden z-[15] pointer'>
                            <span className="flex w-[336.44px] h-[22px] justify-center items-start font-['Epilogue'] text-[14px] font-semibold leading-[22px] text-[#171a1f] absolute top-[calc(50%-11px)] left-[calc(50%-168.5px)] text-center whitespace-nowrap z-[16]">
                                EMAIL
                            </span>
                        </button>
                    </div>
                    {data.map((item, index) => (
                        <div key={index} className='w-[1065.44px] h-[48px] bg-[rgba(0,0,0,0)] relative z-[2] mt-0 mr-0 mb-0 ml-0'>
                            <div className='w-[12.95%] h-full bg-[#fff] border-solid border border-[#dee1e6] absolute top-0 left-0 overflow-hidden z-[3]'>
                                <span>{index + 1}</span>
                            </div>
                            <div className='w-[52.47%] h-full bg-[#fff] border-solid border border-[#dee1e6] absolute top-0 left-[12.95%] overflow-hidden z-[4]'>
                                <span>{item.Name}</span>
                            </div>
                            <div className='w-[34.58%] h-full bg-[#fff] border-solid border border-[#dee1e6] absolute top-0 left-[65.42%] overflow-hidden z-[5]'>
                                <span>{item.email}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Admin_2;