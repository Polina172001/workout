import StepControl from "./StepControl"
import StepCardStyled from "./styled/StepCardStyled"

const StepCard = ({ item, deleteItem, changeItem }) => {
    function handleClick(event) {
        event.preventDefault()
        if (event.target.classList.contains('delete-btn')) {
            deleteItem(item.id)
        }

        if (event.target.classList.contains('create-btn')) {
            changeItem(item.id)
        }
    }

    return (
        <StepCardStyled>
            <div className="step-card_info">
                <span>{item.date.value}</span>
                <span>{item.passedKm.value}</span>
            </div>
            <StepControl onClick={handleClick} />
        </StepCardStyled>

    )
}

export default StepCard