import React, { useState } from 'react';
import MainPage from '../../Mainpage';
import PaperPresentationPopup from '../popups/Paper';
import ProjectPresentationPopup from '../popups/Project';
import TechoPopup from '../popups/Techo';
import SportsPopup from '../popups/Sports';
import MemberPopup from '../popups/Member';
import LeaderPopup from '../popups/Leader';
import VacPopup from '../popups/Vac';
import PatentPopup from '../popups/Patent';
import PpPopup from '../popups/Project_to_Paper';
import PlacementPopup from '../popups/Placement';
import GatePopup from '../popups/Gate';
import EntrepPopup from '../popups/Entrep';
import SocialPopup from '../popups/Social';
import OthersPopup from '../popups/Others';

function Student_3() {
  const [popups, setPopups] = useState({
    showPaperPopup: false,
    showProjectPopup: false,
    showTechoPopup: false,
    showSportsPopup: false,
    showMemberPopup: false,
    showLeaderPopup: false,
    showVacPopup: false,
    showPatentPopup: false,
    showPpPopup: false,
    showPlacementPopup: false,
    showGatePopup: false,
    showEntrepPopup: false,
    showSocialPopup: false,
    showOthersPopup: false,
  });

  const togglePopup = (popupName) => {
    setPopups((prevPopups) => ({ ...prevPopups, [popupName]: !prevPopups[popupName] }));
  };
  return (
    <div>
    <MainPage/>
    <div className='main-container absolute top-[40px] left-[80px] w-[1356px] h-[1440px] bg-white border-2 border-[#BCC1CAFF] rounded border-solid pb-10'>
      <div className='w-[1214px] h-[249px] relative z-30 mt-[65px] mr-0 mb-0 ml-[55px]'>
      <div className='w-[224px] h-[248px] bg-[rgba(131,83,226,0.74)] rounded-[8px] absolute top-px left-0 shadow-[0_17px_35px_0_rgba(23,26,31,0.24)] z-[1]'>
          <div className='w-[224px] h-[154px] bg-[url(../../images/Paper_Presentation.jpg)] bg-cover bg-no-repeat rounded-[6px] relative z-[17] mt-0 mr-0 mb-0 ml-0' />
          <button className="flex w-[224px] h-[103px] justify-center items-center font-['Inknut_Antiqua'] text-[18px] font-semibold leading-[30px] text-[#fff] relative text-center z-[28] mt-[-9px] mr-0 mb-0 ml-0" onClick={() => togglePopup('showPaperPopup')}> 
            1.PAPER <br /> PRESENTATION
          </button>
 
        </div>
        <div className='w-[224px] h-[248px] bg-[rgba(131,83,226,0.76)] rounded-[8px] absolute top-0 left-[336px] shadow-[0_17px_35px_0_rgba(23,26,31,0.24)]'>
          <div className='w-[224px] h-[153px] bg-[url(../../images/Project_Presentation.jpg)] bg-cover bg-no-repeat rounded-[6px] relative z-[3] mt-px mr-0 mb-0 ml-0' />
          <button className="flex w-[224px] h-[103px] justify-center items-center font-['Inknut_Antiqua'] text-[18px] font-semibold leading-[30px] text-[#fff] relative text-center z-[28] mt-[-9px] mr-0 mb-0 ml-0" onClick={() => togglePopup('showProjectPopup')}>
            
            2.PROJECT <br /> PRESENTATION
          </button>
        </div>
        <div className='w-[224px] h-[248px] bg-[rgba(131,83,226,0.77)] rounded-[8px] absolute top-0 left-[654px] shadow-[0_17px_35px_0_rgba(23,26,31,0.24)] z-[4]'>
          <div className='w-[224px] h-[154px] bg-[url(../../images/Techo_Managerial_Events.jpg)] bg-cover bg-no-repeat rounded-[8px] relative z-[21] mt-0 mr-0 mb-0 ml-0' />
          <button className="flex w-[224px] h-[103px] justify-center items-center font-['Inknut_Antiqua'] text-[18px] font-semibold leading-[30px] text-[#fff] relative text-center z-[28] mt-[-9px] mr-0 mb-0 ml-0" onClick={() => togglePopup('showTechoPopup')}>
            
            3.TECHO<br />MANAGERIAL <br /> EVENTS
          </button>
        </div>
        
        <div className='w-[224px] h-[248px] bg-[rgba(131,83,226,0.8)] rounded-[8px] absolute top-px left-[990px] shadow-[0_17px_35px_0_rgba(23,26,31,0.24)] z-[5]'>
          <div className='w-[224px] h-[154px] bg-[url(../../images/Sports.jpg)] bg-cover bg-no-repeat rounded-[6px] relative z-[12] mt-[-1px] mr-0 mb-0 ml-0' />
          <button className="flex w-[224px] h-[103px] justify-center items-center font-['Inknut_Antiqua'] text-[18px] font-semibold leading-[30px] text-[#fff] relative text-center z-[28] mt-[-9px] mr-0 mb-0 ml-0" onClick={() => togglePopup('showSportsPopup')}>
            
            4.SPORTS & <br /> GAMES
          </button>
        </div>
      </div>
      <div className='w-[1209px] h-[250px] relative z-[34] mt-[97px] mr-0 mb-0 ml-[60px]'>
      <div className='w-[224px] h-[248px] bg-[rgba(131,83,226,0.74)] rounded-[8px] absolute top-[2px] left-0 shadow-[0_17px_35px_0_rgba(23,26,31,0.24)] z-[8]' >
      <div className='w-[225px] h-[149px] bg-[url(../../images/Membership.jpg)] bg-cover bg-no-repeat rounded-[8px] relative z-[15] mt-px mr-0 mb-0 ml-0' />
          <button className="flex w-[225px] h-[97px] justify-center items-center font-['Inknut_Antiqua'] text-[18px] font-semibold leading-[30px] text-[#fff] relative text-center z-[33] mt-px mr-0 mb-0 ml-[-1px]" onClick={() => togglePopup('showMemberPopup')}>
            5.MEMBERSHIP
          </button>
        </div>
      <div className='w-[224px] h-[248px] bg-[rgba(131,83,226,0.78)] rounded-[6px] absolute top-px left-[331px] shadow-[0_17px_35px_0_rgba(23,26,31,0.24)] z-[7]'>
          <div className='w-[225px] h-[149px] bg-[url(../../images/Leadership.jpg)] bg-cover bg-no-repeat rounded-[8px] relative z-[15] mt-px mr-0 mb-0 ml-0' />
          <button className="flex w-[225px] h-[97px] justify-center items-center font-['Inknut_Antiqua'] text-[18px] font-semibold leading-[30px] text-[#fff] relative text-center z-[33] mt-px mr-0 mb-0 ml-[-1px]" onClick={() => togglePopup('showLeaderPopup')}>
            6.LEADERSHIP / <br />
            ORGANIZING EVENTS
          </button>
        </div>
        <div className='w-[224px] h-[248px] bg-[rgba(131,83,226,0.78)] rounded-[6px] absolute top-0 left-[649px] shadow-[0_17px_35px_0_rgba(23,26,31,0.24)] z-[6]'>
          <div className='w-[224px] h-[156px] bg-[url(../../images/VAC.jpg)] bg-cover bg-no-repeat rounded-[6px] relative z-[18] mt-0 mr-0 mb-0 ml-0' />
          <button className="flex w-[224px] h-[103px] justify-center items-center font-['Inknut_Antiqua'] text-[18px] font-semibold leading-[30px] text-[#fff] relative text-center z-[28] mt-[-9px] mr-0 mb-0 ml-0" onClick={() => togglePopup('showVacPopup')}>
            
            7.VAC / <br /> ONLINE COURSE
          </button>
        </div>
        <div className='w-[224px] h-[248px] bg-[rgba(131,83,226,0.75)] rounded-[6px] absolute top-[2px] left-[985px] shadow-[0_17px_35px_0_rgba(23,26,31,0.24)] z-[22]'>
        <div className='w-[224px] h-[156px] bg-[url(../../images/Patent.jpg)] bg-cover bg-no-repeat rounded-[6px] relative z-[18] mt-0 mr-0 mb-0 ml-0' />
        <button className="flex w-[224px] h-[103px] justify-center items-center font-['Inknut_Antiqua'] text-[18px] font-semibold leading-[30px] text-[#fff] relative text-center z-[28] mt-[-9px] mr-0 mb-0 ml-0" onClick={() => togglePopup('showPatentPopup')}>
            
            8.PATENT / <br /> COPYRIGHT
          </button>
        </div>
        
      </div>
      <div className='w-[1209px] h-[252px] relative z-[27] mt-[94px] mr-0 mb-0 ml-[60px]'>
        <div className='w-[224px] h-[248px] bg-[rgba(131,83,226,0.75)] rounded-[8px] absolute top-[4px] left-0 shadow-[0_17px_35px_0_rgba(23,26,31,0.24)] z-[9]'>
        <div className='w-[224px] h-[153px] bg-[url(../../images/Project_to_Paper.jpg)] bg-cover bg-no-repeat rounded-[6px] relative z-[16] mt-0 mr-0 mb-0 ml-0' />
        <button className="flex w-[224px] h-[103px] justify-center items-center font-['Inknut_Antiqua'] text-[18px] font-semibold leading-[30px] text-[#fff] relative text-center z-[28] mt-[-9px] mr-0 mb-0 ml-0" onClick={() => togglePopup('showPpPopup')}>
            
            9.PROJECT TO<br /> PAPER
          </button>
        </div>
        <div className='w-[224px] h-[248px] bg-[rgba(131,83,226,0.85)] rounded-[8px] absolute top-[4px] left-[331px] shadow-[0_17px_35px_0_rgba(23,26,31,0.24)] z-[11]'>
        <div className='w-[224px] h-[153px] bg-[url(../../images/Internship.jpg)] bg-cover bg-no-repeat rounded-[6px] relative z-[16] mt-0 mr-0 mb-0 ml-0' />
        <button className="flex w-[224px] h-[103px] justify-center items-center font-['Inknut_Antiqua'] text-[18px] font-semibold leading-[30px] text-[#fff] relative text-center z-[28] mt-[-9px] mr-0 mb-0 ml-0" onClick={() => togglePopup('showPlacementPopup')}>
            
            10.PLACEMENT /<br /> INTERNSHIP
          </button>
        </div>
        <div className='w-[224px] h-[248px] bg-[rgba(131,83,226,0.75)] rounded-[8px] absolute top-[4px] left-[649px] shadow-[0_17px_35px_0_rgba(23,26,31,0.24)] z-10'>
        <div className='w-[224px] h-[153px] bg-[url(../../images/Govt_Exam.jpg)] bg-cover bg-no-repeat rounded-[6px] relative z-[16] mt-0 mr-0 mb-0 ml-0' />
        <button className="flex w-[224px] h-[103px] justify-center items-center font-['Inknut_Antiqua'] text-[18px] font-semibold leading-[30px] text-[#fff] relative text-center z-[28] mt-[-9px] mr-0 mb-0 ml-0" onClick={() => togglePopup('showGatePopup')}>
            
            11.GATE / CAT /<br /> GOVT EXAMS
          </button>
        </div>
        <div className='w-[224px] h-[248px] bg-[rgba(131,83,226,0.75)] rounded-[8px] absolute top-[4px] left-[985px] shadow-[0_17px_35px_0_rgba(23,26,31,0.24)] z-[24]'>
        <div className='w-[224px] h-[153px] bg-[url(../../images/Entrepreneship.jpg)] bg-cover bg-no-repeat rounded-[6px] relative z-[16] mt-0 mr-0 mb-0 ml-0' />
        <button className="flex w-[224px] h-[103px] justify-center items-center font-['Inknut_Antiqua'] text-[18px] font-semibold leading-[30px] text-[#fff] relative text-center z-[28] mt-[-9px] mr-0 mb-0 ml-0" onClick={() => togglePopup('showEntrepPopup')}>
            12.ENTREPRENERSHIP
          </button>
        </div>
      </div>
      <div className='w-[545px] h-[248px] relative z-[41] mt-[119px] mr-0 mb-0 ml-[71px]'>
        <div className='w-[224px] h-[248px] bg-[rgba(131,83,226,0.74)] rounded-[8px] absolute top-0 left-0 shadow-[0_17px_35px_0_rgba(23,26,31,0.24)] z-[2]'>
        <div className='w-[224px] h-[153px] bg-[url(../../images/Social_activities.jpg)] bg-cover bg-no-repeat rounded-[6px] relative z-[16] mt-0 mr-0 mb-0 ml-0' />
        <button className="flex w-[224px] h-[103px] justify-center items-center font-['Inknut_Antiqua'] text-[18px] font-semibold leading-[30px] text-[#fff] relative text-center z-[28] mt-[-9px] mr-0 mb-0 ml-0" onClick={() => togglePopup('showSocialPopup')}>
            13.SOCIAL <br /> ACTIVITIES
          </button>
        </div>
        <div className='w-[224px] h-[248px] bg-[rgba(131,83,226,0.85)] rounded-[8px] absolute top-0 left-[320px] shadow-[0_17px_35px_0_rgba(23,26,31,0.24)] z-[23]'>
        <div className='w-[224px] h-[153px] bg-[url(../../images/Others.jpg)] bg-cover bg-no-repeat rounded-[6px] relative z-[16] mt-0 mr-0 mb-0 ml-0' />
        <button className="flex w-[224px] h-[103px] justify-center items-center font-['Inknut_Antiqua'] text-[18px] font-semibold leading-[30px] text-[#fff] relative text-center z-[28] mt-[-9px] mr-0 mb-0 ml-0" onClick={() => togglePopup('showOthersPopup')}>
            14.OTHERS
          </button>
        </div>  
        </div>

        {Object.keys(popups).map((popupName) => {
        const PopupComponent = {
          showPaperPopup: PaperPresentationPopup,
          showProjectPopup: ProjectPresentationPopup,
          showTechoPopup: TechoPopup,
          showSportsPopup: SportsPopup,
          showMemberPopup: MemberPopup,
          showLeaderPopup: LeaderPopup,
          showVacPopup: VacPopup,
          showPatentPopup: PatentPopup,
          showPpPopup: PpPopup,
          showPlacementPopup: PlacementPopup,
          showGatePopup: GatePopup,
          showEntrepPopup: EntrepPopup,
          showSocialPopup: SocialPopup,
          showOthersPopup: OthersPopup
        }[popupName];

        return popups[popupName] && <PopupComponent onClose={() => togglePopup(popupName)} key={popupName} />;
      })}
    </div>
    </div>
  );
}
export default Student_3;
