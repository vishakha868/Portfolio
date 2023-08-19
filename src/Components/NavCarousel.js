import Carousel from 'react-multi-carousel';
import NavButton from './NavButton';


const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };
  
function NavCarousel(){
    return(
        <Carousel responsive={responsive}>
        <NavButton text='VA'></NavButton>
        <NavButton text='Personal Info' iconName='Person'></NavButton>
        <NavButton text='Interest' iconName='SportsVolleyball'></NavButton>
        <NavButton text='Skill' iconName='DeveloperMode'></NavButton>
        <NavButton text='Languages' iconName='Language'></NavButton>
        <NavButton text='Work' iconName='BusinessCenter'></NavButton>
        <NavButton text='Education 'iconName='School'></NavButton>
        <NavButton text='Strength 'iconName='Star'></NavButton>
      </Carousel> 
    )
}

export default NavCarousel;
