import React from 'react';
import MainPage from '../../Mainpage';
import { useNavigate } from 'react-router-dom';
function Staff_3() {
    const navigate = useNavigate();
    const stdata =()=>{
        navigate('/Staff_5');
    };
    return (
        <>
            <MainPage />
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1279px] h-[645px] bg-[rgba(255,255,255,0.85)] rounded-xl">            
               <div className='w-[1179px] h-[47px] relative z-[41] mt-[30px] mr-0 mb-0 ml-[67px]'>
                <span className="flex h-[82.98%] justify-start items-start font-['Inknut_Antiqua'] text-[20px] font-bold leading-[39px] text-[#000] absolute top-0 left-[7.63%] text-left whitespace-nowrap z-40">
                    YEAR :
                </span>
                <div className='w-[69px] h-[47px] bg-[#fff] rounded-[8px] border-solid border border-[#fff] absolute top-0 left-[226px] box-content overflow-hidden z-[1]'>
                    <input className='w-[69px] h-[47px] bg-transparent border-none absolute top-0 left-0 z-[3]' />
                </div>
                <span className="flex h-[82.98%] justify-start items-start font-['Inknut_Antiqua'] text-[20px] font-bold leading-[39px] text-[#000] absolute top-0 left-[31.55%] text-left whitespace-nowrap z-[41]">
                    DEPARTMENT :
                </span>
                <div className='w-[339px] h-[47px] bg-[#fff] rounded-[8px] border-solid border border-[#fff] absolute top-0 left-[579px] box-content z-[4]'>
                    <span className="flex h-[26px] justify-start items-start font-['Inter'] text-[16px] font-normal leading-[26px] text-[#171a1f] absolute top-[11px] left-[12px] text-left whitespace-nowrap z-[5]" />
                </div>
                <span className="flex h-[82.98%] justify-start items-start font-['Inknut_Antiqua'] text-[20px] font-bold leading-[39px] text-[#000] absolute top-0 left-[81.68%] text-left whitespace-nowrap z-[6]">
                    SECTION :
                </span>
                <div className='w-[69px] h-[47px] bg-[#fff] rounded-[8px] border-solid border border-[#fff] absolute top-0 left-[1110px] box-content z-[7]'>
                    <span className="flex h-[26px] justify-start items-start font-['Inter'] text-[16px] font-normal leading-[26px] text-[#171a1f] absolute top-[11px] left-[12px] text-left whitespace-nowrap z-[8]" />
                </div>
                <div className='w-[34px] h-[34px] absolute top-[10px] left-0 overflow-hidden z-[33]'>
                    <div className='w-[35%] h-3/4 absolute top-[0%] left-[12.5%] z-[39]'>
                        <div className='w-[30px] h-[25px] bg-[url(../../images/filter_image.png)] bg-[length:100%_100%] bg-no-repeat relative z-[30] mt- mr-0 mb-0 ml-0' />
                    </div>
                </div>
            </div>
                <div className='w-[1098.01px] h-[164px] bg-[rgba(0,0,0,0)] rounded-[8px] border-solid border border-[#dee1e6] relative overflow-hidden z-[9] mt-[95px] mr-0 mb-0 ml-[84px]'>
                    <div className='w-[1098.01px] h-[68px] bg-[rgba(0,0,0,0)] relative z-[22] mt-0 mr-0 mb-0 ml-0'>
                        <div className='w-[30.6%] h-full bg-[#fafafb] border-solid border border-[#dee1e6] absolute top-0 left-[47.63%] overflow-hidden z-[23]'>
                            <span className="flex w-[49.67px] h-[22px] justify-center items-start font-['Epilogue'] text-[14px] font-semibold leading-[22px] text-[#171a1f] absolute top-[calc(50%-11px)] left-[calc(50%-25px)] text-center whitespace-nowrap z-[26]">
                               CATERORY
                            </span> </div>
                        <div className='w-[7.44%] h-full bg-[#fafafb] border-solid border border-[#dee1e6] absolute top-0 left-0 overflow-hidden z-[25]'>
                            <span className="flex w-[49.67px] h-[22px] justify-center items-start font-['Epilogue'] text-[14px] font-semibold leading-[22px] text-[#171a1f] absolute top-[calc(50%-11px)] left-[calc(50%-25px)] text-center whitespace-nowrap z-[26]">
                                S.No
                            </span>
                        </div>
                        <div className='w-[25.56%] h-full bg-[#fafafb] border-solid border border-[#dee1e6] absolute top-0 left-[22.07%] overflow-hidden z-[27]'>
                            <span className="flex w-[248.67px] h-[22px] justify-center items-start font-['Epilogue'] text-[14px] font-semibold leading-[22px] text-[#171a1f] absolute top-[calc(50%-11px)] left-[calc(50%-124.5px)] text-center whitespace-nowrap z-[28]">
                                NAME
                            </span>
                        </div>
                        <div className='w-[14.63%] h-full bg-[#fafafb] border-solid border border-[#dee1e6] absolute top-0 left-[7.44%] overflow-hidden z-[29]'>
                            <span className="flex w-[128.67px] h-[22px] justify-center items-start font-['Epilogue'] text-[14px] font-semibold leading-[22px] text-[#171a1f] absolute top-[calc(50%-11px)] left-[calc(50%-64.5px)] text-center whitespace-nowrap z-30">
                                ROLL NO
                            </span>
                        </div>
                        <div className='w-[21.77%] h-full bg-[#fafafb] border-solid border border-[#dee1e6] absolute top-0 left-[78.23%] overflow-hidden z-[31]'>
                        <span className="flex w-[128.67px] h-[22px] justify-center items-start font-['Epilogue'] text-[14px] font-semibold leading-[22px] text-[#171a1f] absolute top-[calc(50%-11px)] left-[calc(50%-64.5px)] text-center whitespace-nowrap z-30">
                                STATUS
                            </span> </div>
                    </div>
                    <div className='w-[1098.01px] h-[48px] bg-[rgba(0,0,0,0)] relative z-10 mt-0 mr-0 mb-0 ml-0'>
                        <div className='w-[21.77%] h-full bg-[#fff] border-solid border border-[#dee1e6] absolute top-0 left-[78.23%] overflow-hidden z-[11]' />
                        <div className='w-[14.63%] h-full bg-[#fff] border-solid border border-[#dee1e6] absolute top-0 left-[7.44%] overflow-hidden z-[12]' />
                        <button className='w-[25.56%] h-full bg-[#fff] border-solid border border-[#dee1e6] absolute top-0 left-[22.07%] overflow-hidden z-[13]' onClick={stdata} ></button>
                        <div className='w-[30.6%] h-full bg-[#fff] border-solid border border-[#dee1e6] absolute top-0 left-[47.63%] overflow-hidden z-[14]' />
                        <div className='w-[7.44%] h-full bg-[#fff] border-solid border border-[#dee1e6] absolute top-0 left-0 overflow-hidden z-[15]' />
                    </div>
                    <div className='w-[1098.01px] h-[48px] bg-[rgba(0,0,0,0)] relative z-[16] mt-0 mr-0 mb-0 ml-0'>
                        <button className='w-[25.56%] h-full bg-[#fff] border-solid border border-[#dee1e6] absolute top-0 left-[22.07%] overflow-hidden z-[17]' />
                        <div className='w-[7.44%] h-full bg-[#fff] border-solid border border-[#dee1e6] absolute top-0 left-0 overflow-hidden z-[18]' />
                        <div className='w-[30.6%] h-full bg-[#fff] border-solid border border-[#dee1e6] absolute top-0 left-[47.63%] overflow-hidden z-[19]' />
                        <div className='w-[21.77%] h-full bg-[#fff] border-solid border border-[#dee1e6] absolute top-0 left-[78.23%] overflow-hidden z-20' />
                        <div className='w-[14.63%] h-full bg-[#fff] border-solid border border-[#dee1e6] absolute top-0 left-[7.44%] overflow-hidden z-[21]' />
                    </div>
                </div>
            </div>
        </>
    );
}
export default Staff_3;
