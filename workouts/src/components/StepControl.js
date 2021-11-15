
const StepControl = ({onClick}) => {
    
    return (
        <div onClick={onClick} className="step-card_actions">
            <span className="material-icons">
                <a href="/" className="create-btn">
                    create
                </a>
            </span>
            <span className="material-icons">
                <a href="/" className="delete-btn">
                    delete
                </a>
            </span>
        </div>
    )
}

export default StepControl