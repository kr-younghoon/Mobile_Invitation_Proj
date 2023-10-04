const RelationshipSelector = () => {
    return (
        <>
            <form>
                <label>
                    <input type="radio" name="relationship" value="family" />
                    가족
                </label>

                <label>
                    <input type="radio" name="relationship" value="friend" />
                    친구
                </label>

                <label>
                    <input type="radio" name="relationship" value="partner" />
                    친척
                </label>

                <label>
                    <input type="radio" name="relationship" value="colleague" />
                    직장동료
                </label>

                <label>
                    <input type="radio" name="relationship" value="mentor" />
                    선배, 후배
                </label>

                <label>
                    <input type="radio" name="relationship" value="neighbor" />
                    이웃
                </label>
            </form>
        </>
    );
};

export default RelationshipSelector;
