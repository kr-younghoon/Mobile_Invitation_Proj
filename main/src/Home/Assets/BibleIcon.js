import Lottie from 'lottie-react';
import DUMMY from './bible.json';

const BibleIcon = () => {
    // const defaultOptions = {
    //     loop: true,
    //     autoplay: true,
    //     animationData: DUMMY,
    // };

    return (
        <div>
            <Lottie animationData={DUMMY} />
        </div>
    );
};

export default BibleIcon;
