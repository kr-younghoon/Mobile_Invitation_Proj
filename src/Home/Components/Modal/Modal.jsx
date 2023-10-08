import './Modal.css'; // 필요한 스타일 시트를 import하세요.

function Modal({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close-button" onClick={onClose}>
                    X
                </span>
                {/* 모달 내용을 추가하세요 */}
                <p>모달 내용을 추가하세요.</p>
            </div>
        </div>
    );
}

export default Modal;
