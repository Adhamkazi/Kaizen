import { Image,  IconButton, useBreakpointValue } from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { MdOutlineKeyboardArrowRight,MdKeyboardArrowLeft } from 'react-icons/md';
//new check

export const Crousal = () => {
  const CustomRightArrow = ({ onClick }) => ( 
    <IconButton
    icon={<MdOutlineKeyboardArrowRight size={{base:"40px",md:"80px"}} />}
    onClick={onClick}
    aria-label="right-arrow"
    variant="ghost"
    position="absolute"
    right={useBreakpointValue({ base: '10px' })}
    top="50%"
    _hover={{bg:"transparent"}}
    transform="translate(0%, -50%)"
    zIndex={2}/>
  );

  const CustomLeftArrow = ({ onClick }) => (
    <IconButton
    icon={<MdKeyboardArrowLeft size={{base:"40px",md:"80px"}} />}
    onClick={onClick}
    aria-label="left-arrow"
    variant="ghost"
    _hover={{bg:"transparent"}}
    position="absolute"
    left={useBreakpointValue( '10px' )}
    top="50%"
    transform="translate(0%, -50%)"
    zIndex={2}/>
  );

  return (
    <div style={{marginTop:"110px",width:"70%",margin:"auto"}}>
      <Carousel
        additionalTransfrom={0}
        arrows  
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024
            },
            items: 5,
            partialVisibilityGutter: 40
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0
            },
            items: 1,
            partialVisibilityGutter: 30
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464
            },
            items: 2,
            partialVisibilityGutter: 30
          }
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
        transitionDuration={500}
        transitionTimingFunction="ease-in-out"
        customRightArrow={<CustomRightArrow />}
        customLeftArrow={<CustomLeftArrow />}
      >
        <Image src="https://i.imgur.com/DnMegu6.png" />
        <Image src="https://i.imgur.com/HWrJkPl.png" />
        <Image src="https://i.imgur.com/QDwzksY.png" />
        <Image src="https://i.imgur.com/GaPCjcI.png" />
        <Image src="https://i.imgur.com/1XJYRai.png" />
        <Image src="https://i.imgur.com/WaH4Ua0.png"/>
        <Image src="https://i.imgur.com/0OUdYhW.png"/>
      </Carousel>
      
    </div>
  );
};
