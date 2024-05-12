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
      <div className='w-[57.096px] h-[59.093px] bg-[url(../../images/logo.png)] bg-cover  rounded-[6px] relative mt-[61.991px]  ml-[609.099px]' />
      <span className="block h-[70px] font-['Inknut_Antiqua'] text-[30px] font-normal leading-[39px] text-[#000] relative text-left rotate-[0.09deg] whitespace-nowrap z-[5] mt-[67.78px] mr-0 mb-0 ml-[350.863px]">
        DEPARTMENT OF ARTIFICIAL INTELLIGENCE
      </span>
      <div className='flex flex-col items-center mt-[0px] bg-transparent '>
        <div className='flex flex-col items-center bg-transparent bg-white rounded-lg h-[50vh] w-[100vh] overflow-y-auto p-2'>
         <div className='flex flex-col justify-center w-full bg-transparent '>
            <table className='border border-1 overflow-y-auto bg-transparent rounded-lg w-[96vh]'>
              <thead>
                <tr>
                  <th className='px-4 py-2 border'>SNo</th>
                  <th className='px-4 py-2 border'>Name</th>
                  <th className='px-4 py-2'>Email</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    <td className='border px-4 py-2'>{index + 1}</td>
                    <td className='border px-4 py-2'>{item.Name}</td>
                    <td className='border px-4 py-2'>{item.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
export default Admin_2;