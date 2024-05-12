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

      <div className='flex flex-col items-center mt-[100px]'>
        <div className='h-[3vh] w-[3wv] bg-[url(../../images/logo.png)] bg-cover bg-no-repeat rounded-[6px]' />
        <div className='flex flex-col items-center bg-tilebox bg-white rounded-lg h-[50vh] w-[60vh] overflow-y-auto p-2'>
          <span className="block h-[70px] font-['Inknut_Antiqua'] text-[30px] font-normal  text-[#000] relative text-left rotate-[0.09deg] whitespace-nowrap z-[5]"> DEPARTMENT OF ARTIFICIAL INTELLIGENCE </span>
          <div className='flex flex-col justify-center w-full'>
            <table className='border border-1 overflow-y-auto rounded-lg'>
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
    </>
  );
}

export default Admin_2;