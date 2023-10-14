import Modal from 'react-modal';
import styles from './ModalComponent.module.css';
import ModalCloseBtn from '../../Assets/SVG/ModalCloseBtn';
import Lottie from 'lottie-react';
import DUMMY from '../../Assets/JSON/heart-boom.json';

function ModalComponent({ isOpen, closeModal, content }) {
    const ModalStyle = {
        overlay: {
            position: 'absolute',
        },
        content: {
            display: 'flex',
            flexDirection: 'column',
            overflow: 'auto',
            width: '320px',
            height: '550px',
            top: '0px',
            left: '0px',
            right: '0px',
            bottom: '0px',
            margin: 'auto',
            borderRadius: '20px',
            zIndex: 1000,
            padding: 0,
            // padding: '30px',
        },
    };

    return (
        <Modal
            appElement={document.getElementById('root')}
            // 또는 다른 주요 콘텐츠의 루트 요소
            style={ModalStyle}
            isOpen={isOpen}
            onRequestClose={closeModal}
        >
            <div className={styles.content}>
                <Lottie
                    animationData={DUMMY}
                    // loop={false}
                ></Lottie>
                <div className={`${styles.layout} ${styles.slide_in2}`}>
                    <button
                        onClick={closeModal}
                        className={styles.modalclosebtn}
                    >
                        <ModalCloseBtn />
                    </button>
                    <div className={styles.imgContent}>{content}</div>
                    <p className={`${styles.sub_cap} ${styles.comment}`}>
                        길게 탭하여 말씀카드를 저장해보세요!
                    </p>
                </div>
            </div>
        </Modal>
    );
}

export default ModalComponent;
