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
        const { data: staff_detils, error } = await supabase.from('staff_detils').select('*');

        if (error) {
            console.error('Error fetching data:', error);
        } else {
            setData(staff_detils);
            console.log(staff_detils);
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
                <table className='w-full overflow-auto'>
  <div className='w-[320px] h-[48px] bg-[#fafafb] relative z-[1] mt-0 mr-0 mb-0 ml-0'>
    <div className='w-[12.95%] h-full bg-[#fafafb] border-solid border border-[#dee1e6] absolute top-0 left-0 overflow-hidden z-[13]'>
      <th className="flex w-[106px] h-[22px] justify-center items-start font-['Epilogue'] text-[14px] font-semibold leading-[22px] text-[#171a1f] absolute top-[calc(50%-11px)] left-[calc(50%-53px)] text-center whitespace-nowrap z-[14]">
        S. No.
      </th>
    </div>
    <div className='w-[52.47%] h-full bg-[#fafafb] border-solid border border-[#dee1e6] absolute top-0 left-[12.95%] overflow-hidden z-[12]'>
      <th className="flex w-[512px] h-[22px] justify-center items-start font-['Epilogue'] text-[14px] font-semibold leading-[22px] text-[#171a1f] absolute top-[calc(50%-11px)] left-[calc(50%-256px)] text-center whitespace-nowrap z-[13]">
        Name
      </th>
    </div>
    <div className='w-[34.58%] h-full bg-[#fafafb] border-solid border border-[#dee1e6] absolute top-0 left-[65.42%] overflow-hidden z-[15] pointer'>
      <th className="flex w-[336.44px] h-[22px] justify-center items-start font-['Epilogue'] text-[14px] font-semibold leading-[22px] text-[#171a1f] absolute top-[calc(50%-11px)] left-[calc(50%-168.5px)] text-center whitespace-nowrap z-[16]">
        Email
      </th>
    </div>
  </div>
  {data.map((item, index) => (
    <tr key={index} className='w-full h-[48px] bg-[rgba(0,0,0,0)] relative z-[2] mt-0 mr-0 mb-0 ml-0'>
      <td className='w-[12.95%] h-full bg-[#fff] border-solid border border-[#dee1e6]'>
        <span>{index + 1}</span>
      </td>
      <td className='w-[52.47%] h-full bg-[#fff] border-solid border border-[#dee1e6]'>
        <span>{item.Name}</span>
      </td>
      <td className='w-[34.58%] h-full bg-[#fff] border-solid border border-[#dee1e6]'>
        <span>{item.email}</span>
      </td>
    </tr>
  ))}
</table>
</div>
            </>
    );
}

export default Admin_2;