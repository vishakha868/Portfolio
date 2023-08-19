import React,{ useState }  from 'react';
import Slider from 'react-slick';
import MainPage from './MainPage';
import PersonalInfo from './PersonalInfo';
import Interest from './Interest';
import Skill from './Skill';
import Languages from './Languages';
import Work from './Work';
import Education from './Education';
import Strengths from './Strengths';
import IconButton from '@mui/material/IconButton';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';


const CustomPrevArrow = ({ curr,onClick }) => (
   
    curr>0 &&<button className="custom-arrow prev-arrow" onClick={onClick}>
    <ArrowBackOutlinedIcon/>
 </button>
   
   
);

const CustomNextArrow = ({ onClick }) => (
   <button className="custom-arrow next-arrow" onClick={onClick}>
     <ArrowForwardOutlinedIcon/>
   </button>
);

function MainContent() {
   const [currentIndex, setCurrentIndex] = useState(0);
   const mainSliderSettings = {
      dots: false,
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: <CustomPrevArrow  curr={currentIndex}/>,
      nextArrow: <CustomNextArrow curr/>
   };
   return (
      <div className='main-carousel'>
         <Slider {...mainSliderSettings}  beforeChange={(currentSlide, nextSlide) => {
              setCurrentIndex(nextSlide);
          }}>
            <div>
               <MainPage />
            </div>
            <div>
               <Languages />
            </div>
            <div>
               <MainPage />
            </div>
            <div>
               <MainPage />
            </div>
         </Slider>
      </div>
   )
}
export default MainContent;
