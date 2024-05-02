"use client"

import Slider from 'react-slick'
import CardProject from '../CardProject';
import { ProjectProps } from '@/utils/types/project';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Container from '../Container';


export default function SimpleSlider({ data }: { data: ProjectProps[] }) {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
    };
    return (
        <Container>

            <Slider {...settings} >
                {data.map((project: ProjectProps) => (

                    <CardProject project={project} key={project.id} />

                ))}
            </Slider>
        </Container>

    );
}



// export default function Carrousel({ data }: { data: ProjectProps[] }) {
//     return (
//         <Slider {...settings}>

//             <div>
//                 <h1>1</h1>
//             </div>
//             <div className='bg-red-600 h-96 w-1/2'>
//                 <h1>2</h1>
//             </div>
//         </Slider>
//     );
// }
