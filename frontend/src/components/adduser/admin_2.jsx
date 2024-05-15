import React, { useEffect, useState } from 'react';
import MainPage from '../../Mainpage';
import supabase from '../../database/Client';
import { useNavigate } from 'react-router-dom';

function Admin_2() {
  const [data, setData] = useState([]);
  const [selectedEmail, setSelectedEmail] = useState(false);

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

  const HandleAllocateClick = async () => {
    const { data: staff_detils, error } = await supabase.from('staff_detils').select('*');

    if (error) {
      console.error('Error fetching data:', error);
    } 
    const password = staff_detils.password;
    console.log(password);

    const {user, error:authError}=await supabase.auth.signIn({
      email:selectedEmail,
      password:password
    });
    if (authError) {
      console.error('Authentication failed:', authError);
      return;
    }
    else{
      console.log('User:', user);
    }
    const { error: insertError } = await supabase
    .from('staff_detils')
    .update({ year: selectedYear, department: selectedDept, section: selectedSection })
    .eq('email', selectedEmail);

    if (insertError) {
      console.error('Error inserting data:', insertError);
    }
  }
  return (
    <>
      <MainPage />
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1279px] h-[645px] bg-[rgba(255,255,255,0.85)] rounded-xl">
        <div className='w-[57.096px] h-[59.093px] bg-[url(../../images/logo.png)] bg-cover  rounded-[6px] relative mt-[61.991px]  ml-[609.099px]' />
        <span className="block h-[70px] font-['Inknut_Antiqua'] text-[30px] font-normal leading-[39px] text-[#000] relative text-left rotate-[0.09deg]  mt-[67.78px] ml-[350.863px]">
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
                      <td className='border px-4 py-2' onClick={() => setSelectedEmail(item.email)}>{item.email}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {selectedEmail && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">

                  <div className="bg-[#D9CBF6] p-4 rounded flex flex-col relative">
                    <button className="absolute top-0 right-0 m-2" onClick={() => setSelectedEmail(false)}>
                      <img src="../../images/close_icon.png" alt="Close" style={{ width: '20px', height: '20px' }} />
                    </button>
                    <div className="flex justify-center">
                      <h2 className="font-Inknut_Antiqua text-26px mb-6 text-black">SAP  COORDINATOR</h2>
                    </div>
                    <div className="flex h-[60px]">
                      <div className='w-[136px] h-[-60px] text-0 '>
                        <span className="block font-Inter text-14px font-bold leading-22px text-#323842 relative whitespace-nowrap">
                          YEAR
                        </span>
                        <div className='w-120  bg-#fafafb rounded-4 relative overflow-hidden'>
                          <select className='w-[80px] h-full bg-white border-none' >
                            <option value="III">III</option>
                            <option value="II">II</option>
                          </select>
                        </div>
                      </div>
                      <div className=''>
                        <span className="block font-Inter text-14px font-bold leading-30px text-#323842 relative whitespace-nowrap">
                          CLASS
                        </span>
                        <div className='w-202 h-21 bg-#fafafb rounded-4 relative overflow-hidden'>
                          <select className='w-full h-full bg-white ' >
                            <option value="ds">AI & DS</option>
                            <option value="ml">AI & ML</option>
                          </select>
                        </div>
                      </div>
                      <div className='w-203 h-20 text-0 relative ml-4'>
                        <span className="block font-Inter text-14px font-bold leading-22px text-#323842 relative whitespace-nowrap">
                          SECTION
                        </span>
                        <button className='w-82 h-21 bg-#fafafb rounded-4 border-none relative mt-px'>
                          <select className='w-full h-full bg-white ' >
                            <option value="A">A</option>
                            <option value="B">B</option>
                          </select>
                        </button>
                      </div>
                    </div>
                    <div className="flex h-[9vh]">
                      <span className="block font-Inter text-14px font-bold leading-22px text-#323842 relative whitespace-nowrap">
                        STAFF EMAIL
                      </span>
                      <div className='w-135  bg-#fafafb rounded-4 relative overflow-hidden'>
                        <input type="text" className='w-full  bg-[rgba(250,250,251,0.93)] rounded- border-none relative ' value={selectedEmail} readOnly />
                      </div>
                    </div>
                    <button className='w-79 h-[5vh] bg-white rounded- border-20px relative'>
                      <span className="font-Inter text-18px font-normal leading-28px text-#171a1f"
                      onClick={HandleAllocateClick}>
                        ALLOCATE
                      </span>
                    </button>
                  </div>


                </div>
              )}

            </div></div></div></div>
    </>
  );
}
export default Admin_2;