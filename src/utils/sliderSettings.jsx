import CustomPrevArrow from "../Components/Individuals/ButtonsNavCarrusel/CustomPrevArrow ";
import CustomNextArrow from "../Components/Individuals/ButtonsNavCarrusel/CustomNextArrow";

const responsive = [
  {
    breakpoint: 480,
    settings: {
      arrows: false,
      slidesToShow: 2.2,
    }
  },
  {
    breakpoint: 600,
    settings: {
      arrows: false,
      slidesToShow: 3,
    }
  },
  {
    breakpoint: 700,
    settings: {
      slidesToShow: 4,
    }
  },
  {
    breakpoint: 900,
    settings: {
      slidesToShow: 5,
    }
  },
  {
    breakpoint: 1000,
    settings: {
      slidesToShow: 6,
    }
  },
];

export const settingsCine = {
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: false,
};
export const settingsCarrunsel = {
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 1,
  arrows: true,
  nextArrow: <CustomNextArrow/>,
  prevArrow: <CustomPrevArrow />,
  responsive,
};


const responsiveVertical = [
  {
    breakpoint: 480,
    settings: {
      vertical: false,
      arrows: false,
      slidesToShow: 2.2,
    }
  },
  {
    breakpoint: 600,
    settings: {
      arrows: false,
      vertical: false,
      slidesToShow: 3,
    }
  },
  {
    breakpoint: 700,
    settings: {
      vertical: false,
      slidesToShow: 4,
    }
  },
  {
    breakpoint: 900,
    settings: {
      vertical: false,
      slidesToShow: 5,
    }
  },
  {
    breakpoint: 1000,
    settings: {
      vertical: false,
      slidesToShow: 6,
    }
  },
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 6,
      vertical: false,
      nextArrow: <CustomNextArrow/>,
      prevArrow: <CustomPrevArrow />,
    }
  },
];


export const settingsCarrunselVertical = {
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: true,
  vertical: true,
  nextArrow: <CustomNextArrow/>,
  prevArrow: <CustomPrevArrow />,
  responsive: responsiveVertical,
};

