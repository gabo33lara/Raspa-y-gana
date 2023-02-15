import ScratchCard from 'react-scratchcard-v2';
import CouponCover from '../img/golden-gift.jpg';
import Coin from '../img/coin.png';
import Grandad from '../img/abuelo.jpg';
import '../stylesheets/Scratchpad.css';
import Fireworks from 'fireworks-js';
import { useMediaQuery } from 'usehooks-ts';

function Scratchpad({onComplete}) {
    const matches = useMediaQuery('(max-width: 598px)');
    const matchTablet = useMediaQuery('(max-width: 1024px)');
    console.log(matches);
    const bool = !matches ? matchTablet ? 500 : 700 : 300;
    const handleOnComplete = () => {
        const container = document.querySelector('.App');
        const fireworks = new Fireworks(container, { /* options */ }); 
        fireworks.start();

        onComplete('Felicidades abuelo!');
    }
    return (
        <div className="scratchpad-wrapper" style={{cursor: `url(${Coin}), auto`}}>
            <ScratchCard
                width={bool}
                height={bool}
                image={CouponCover}
                finishPercent={50}
                onComplete={handleOnComplete}
                style={{left: '0'}}
            >
                <img className="img" src={Grandad} alt="Surprise babe" />
            </ScratchCard>
        </div>
    );
}

export default Scratchpad;