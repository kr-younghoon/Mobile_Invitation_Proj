import Modal from 'react-modal';
import styles from './ModalComponent.module.css';
function ModalComponent({ isOpen, closeModal, content }) {
    return (
        <div className={styles.ModalLayout}>
            <Modal
                appElement={document.getElementById('root')} // 또는 다른 주요 콘텐츠의 루트 요소
                className={styles.ModalLayout}
                isOpen={isOpen}
                onRequestClose={closeModal}
            >
                <div>
                    <button onClick={closeModal}>닫기</button>
                    {content}
                </div>
            </Modal>
        </div>
    );
}

export default ModalComponent;
