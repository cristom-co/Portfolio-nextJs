import Slider from "./commons/slider/Slider";
import TitleSection from "./commons/TitleSection";

import { contacts } from "../data/sliderImages";


const Contact = () => {
    return <div className="sectionSite">
        <TitleSection title="Find me online" description="Feel free to reach out to me here!" />
        <Slider items={contacts} />

        <a href="https://construye-domotiza.vercel.app/" target="_blank" rel="noopener noreferrer">
            <p className="mt-10 text-gray-400 text-xs text-center underline">
                ¿Quieres construir o remodelar tu espacio? Conoce nuestro servicio de construcción y domotica.
            </p>
        </a>

    </div>;
};

export default Contact; 