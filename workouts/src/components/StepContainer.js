import StepCard from "./StepCard"
import StepsStyled from "./styled/StepsStyles"

const StepsContainer = ({items, deleteItem, changeItem}) => {
    return (
        <StepsStyled>
            <header>
                <h3>Дата (ДД.ММ.ГГ)</h3>
                <h3>Пройдено (км)</h3>
                <h3>Действия</h3>
            </header>
            <div className="steps-wrapper">
                {   
                    items.length
                    ? items.map(item => <StepCard key={item.id} item={item} changeItem={changeItem} deleteItem={deleteItem} />)
                    : 'Вы еще не начали шагать'
                }
            </div>
        </StepsStyled>
    )
}

export default StepsContainer