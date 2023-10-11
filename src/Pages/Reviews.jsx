import styles from './Reviews.module.css';

function Reviews() {
    return (
        <>
            <p className={styles.sub_lg}>
                자유롭게 작성하는
                <br />
                게시판입니다.
            </p>
            <button className={styles.writeBtn}>작성하기</button>
        </>
    );
}

export default Reviews;
