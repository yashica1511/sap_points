import React from 'react';
import MainPage from '../../Mainpage';
function Admin_5() {
    return (
        <>
            <MainPage />
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1279px] h-[645px] bg-[rgba(255,255,255,0.85)] rounded-xl">
                <span className="block h-[30px] font-['Inknut_Antiqua'] text-[15px] font-bold leading-[30px] text-[#000] relative text-left whitespace-nowrap z-[41] mt-[45px] mr-0 mb-0 ml-[146px]">
                    STUDENTS DETAILS :
                </span>
                <div className='w-[490px] h-[38px] relative z-40 mt-[18px] mr-0 mb-0 ml-[211px]'>
                    <span className="flex h-[30px] justify-start items-start font-['Inknut_Antiqua'] text-[15px] font-bold leading-[30px] text-[#000] absolute top-0 left-0 text-left whitespace-nowrap z-40">
                        NAME:
                    </span>
                    <div className='w-[305px] h-[30px] bg-[#fff] rounded-[15px] opacity-40 absolute top-[8px] left-[185px]' />
                    <span className="flex h-[22px] justify-start items-start font-['Inter'] text-[14px] font-normal leading-[22px] text-[#171a1f] absolute top-[12px] left-[197px] text-left whitespace-nowrap z-[1]" />
                </div>
                <div className='w-[490px] h-[39px] relative z-[43] mt-[16px] mr-0 mb-0 ml-[211px]'>
                    <span className="flex h-[39px] justify-start items-start font-['Inknut_Antiqua'] text-[15px] font-bold leading-[38.685px] text-[#000] absolute top-0 left-0 text-left whitespace-nowrap z-[43]">
                        ROLL NO :
                    </span>
                    <div className='w-[305px] h-[29px] bg-[#fff] rounded-[15px] opacity-40 absolute top-[4px] left-[185px] z-[2]' />
                    <span className="flex h-[22px] justify-start items-start font-['Inter'] text-[14px] font-normal leading-[22px] text-[#171a1f] absolute top-[8px] left-[197px] text-left whitespace-nowrap z-[3]" />
                </div>
                <div className='w-[490px] h-[30px] relative z-[42] mt-[12px] mr-0 mb-0 ml-[211px]'>
                    <span className="flex h-[30px] justify-start items-start font-['Inknut_Antiqua'] text-[15px] font-bold leading-[30px] text-[#000] absolute top-0 left-0 text-left whitespace-nowrap z-[42]">
                        EMAIL :
                    </span>
                    <div className='w-[305px] h-[29px] bg-[#fff] rounded-[15px] opacity-40 absolute top-0 left-[185px] z-[4]' />
                    <span className="flex h-[22px] justify-start items-start font-['Inter'] text-[14px] font-normal leading-[22px] text-[#171a1f] absolute top-[4px] left-[197px] text-left whitespace-nowrap z-[5]" />
                </div>
                <div className='w-[212px] h-[39px] relative z-[39] mt-[13px] mr-0 mb-0 ml-[1000px]'>
                    <button className='w-[160px] h-[38px] bg-[rgba(131,83,226,0.93)] rounded-[4px] border-none absolute top-0 left-0 overflow-hidden z-[42] pointer'>
                        <span className="flex h-[102.63%] justify-start items-start font-['Inknut_Antiqua'] text-[15px] font-normal leading-[38.685px] text-[#000] absolute top-[-2.63%] left-[2.91%] text-left whitespace-nowrap z-[43]">
                            DOWNLOAD REPORT
                        </span>
                    </button>
                </div>
                <div className='w-[1160.75px] h-[155px] bg-[rgba(0,0,0,0)] rounded-[8px] border-solid border border-[#dee1e6] relative overflow-hidden z-[6] mt-[34px] mr-0 mb-0 ml-[57px]'>
                    <div className='w-[1160.75px] h-[59px] bg-[rgba(0,0,0,0)] relative z-[23] mt-0 mr-0 mb-0 ml-0'>
                        <div className='w-[7.47%] h-full bg-[#fafafb] border-solid border border-[#dee1e6] absolute top-0 left-0 overflow-hidden z-[24]'>
                            <span className="flex w-[54.75px] h-[22px] justify-center  font-['Epilogue'] text-[14px] font-semibold leading-[22px] text-[#171a1f] absolute top-[calc(50%-11px)] left-[calc(50%-27.5px)] text-center whitespace-nowrap z-[25]">
                                S. No.
                            </span>
                        </div>
                        <div className='w-[18.78%] h-full bg-[#fafafb] border-solid border border-[#dee1e6] absolute top-0 left-[7.47%] overflow-hidden z-[26]'>
                            <span className="flex w-[186px] h-[22px] justify-center items-start font-['Epilogue'] text-[14px] font-semibold leading-[22px] text-[#171a1f] absolute top-[calc(50%-11px)] left-[calc(50%-93px)] text-center whitespace-nowrap z-[27]">
                                CATERGORY
                            </span>
                        </div>
                        <div className='w-[10.6%] h-full bg-[#fafafb] border-solid border border-[#dee1e6] absolute top-0 left-[52.1%] overflow-hidden z-[28]'>
                            <span className="flex w-[91px] h-[22px] justify-center items-start font-['Epilogue'] text-[14px] font-semibold leading-[22px] text-[#171a1f] absolute top-[calc(50%-11px)] left-[calc(50%-45.5px)] text-center whitespace-nowrap z-[29]">
                                DATE
                            </span>
                        </div>
                        <div className='w-[17.14%] h-full bg-[#fafafb] border-solid border border-[#dee1e6] absolute top-0 left-[62.7%] overflow-hidden z-30'>
                            <span className="flex w-[167px] h-[22px] justify-center items-start font-['Epilogue'] text-[14px] font-semibold leading-[22px] text-[#171a1f] absolute top-[calc(50%-11px)] left-[calc(50%-83.5px)] text-center whitespace-nowrap z-[31]">

                                PROOF
                            </span>
                        </div>
                        <button className='w-[20.16%] h-full bg-[#fafafb] border-solid border border-[#dee1e6] absolute top-0 left-[79.84%] overflow-hidden z-[32] pointer'>
                            <span className="flex w-[202px] h-[22px] justify-center items-start font-['Epilogue'] text-[14px] font-semibold leading-[22px] text-[#565e6c] absolute top-[calc(50%-11px)] left-[calc(50%-101px)] text-center whitespace-nowrap z-[33]">
                                STATUS
                            </span>
                        </button>
                        <div className='w-[14.47%] h-full bg-[#fafafb] border-solid border border-[#dee1e6] absolute top-0 left-[26.25%] overflow-hidden z-[34]'>
                            <span className="flex w-[136px] h-[22px] justify-center items-start font-['Epilogue'] text-[14px] font-semibold leading-[22px] text-[#171a1f] absolute top-[calc(50%-11px)] left-[calc(50%-68px)] text-center whitespace-nowrap z-[35]">
                                PLACE
                            </span>
                        </div>
                        <div className='w-[11.37%] h-full bg-[#fafafb] border-solid border border-[#dee1e6] absolute top-0 left-[40.73%] overflow-hidden z-[36]'>
                            <span className="flex w-[100px] h-[22px] justify-center items-start font-['Epilogue'] text-[14px] font-semibold leading-[22px] text-[#171a1f] absolute top-[calc(50%-11px)] left-[calc(50%-50px)] text-center whitespace-nowrap z-[37]">
                                REWAED
                            </span>
                        </div>
                    </div>
                    <div className='w-[1160.75px] h-[48px] bg-[rgba(0,0,0,0)] relative z-[7] mt-0 mr-0 mb-0 ml-0'>
                        <div className='w-[14.47%] h-full bg-[#fff] border-solid border border-[#dee1e6] absolute top-0 left-[26.25%] overflow-hidden z-[8]' />
                        <div className='w-[11.37%] h-full bg-[#fff] border-solid border border-[#dee1e6] absolute top-0 left-[40.73%] overflow-hidden z-[9]' />
                        <div className='w-[18.78%] h-full bg-[#fff] border-solid border border-[#dee1e6] absolute top-0 left-[7.47%] overflow-hidden z-10' />
                        <div className='w-[10.6%] h-full bg-[#fff] border-solid border border-[#dee1e6] absolute top-0 left-[52.1%] overflow-hidden z-[11]' />
                        <div className='w-[17.14%] h-full bg-[#fff] border-solid border border-[#dee1e6] absolute top-0 left-[62.7%] overflow-hidden z-[12]' />
                        <div className='w-[7.47%] h-full bg-[#fff] border-solid border border-[#dee1e6] absolute top-0 left-0 overflow-hidden z-[13]' />
                        <div className='w-[20.16%] h-full bg-[#fff] border-solid border border-[#dee1e6] absolute top-0 left-[79.84%] overflow-hidden z-[14]' />
                    </div>
                    <div className='w-[1160.75px] h-[48px] bg-[rgba(0,0,0,0)] relative z-[15] mt-0 mr-0 mb-0 ml-0'>
                        <div className='w-[14.47%] h-full bg-[#fff] border-solid border border-[#dee1e6] absolute top-0 left-[26.25%] overflow-hidden z-[16]' />
                        <div className='w-[18.78%] h-full bg-[#fff] border-solid border border-[#dee1e6] absolute top-0 left-[7.47%] overflow-hidden z-[17]' />
                        <div className='w-[20.16%] h-full bg-[#fff] border-solid border border-[#dee1e6] absolute top-0 left-[79.84%] overflow-hidden z-[18]' />
                        <div className='w-[10.6%] h-full bg-[#fff] border-solid border border-[#dee1e6] absolute top-0 left-[52.1%] overflow-hidden z-[19]' />
                        <div className='w-[17.14%] h-full bg-[#fff] border-solid border border-[#dee1e6] absolute top-0 left-[62.7%] overflow-hidden z-20' />
                        <div className='w-[11.37%] h-full bg-[#fff] border-solid border border-[#dee1e6] absolute top-0 left-[40.73%] overflow-hidden z-[21]' />
                        <div className='w-[7.47%] h-full bg-[#fff] border-solid border border-[#dee1e6] absolute top-0 left-0 overflow-hidden z-[22]' />
                    </div>
                </div>
            </div>
        </>
    );
}
export default Admin_5; 