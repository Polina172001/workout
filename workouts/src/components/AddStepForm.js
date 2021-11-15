import FormStyled from "./styled/FormStyled"

const AddStepForm =({form, submit, change}) => {
    function handleChange(event) {
        change(event)
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log('submitHandle')
        submit(event)
    }

    return (
        <FormStyled>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="date">Дата (ДД.ММ.ГГ)</label>
                    <input
                        id="date"
                        type="text"
                        name="date"
                        value={form.date.value}
                        className={form.date.isValid ? '' : 'invalid'}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="passedKm">Пройдено (км)</label>
                    <input
                        id="passedKm"
                        type="text"
                        name="passedKm"
                        value={form.passedKm.value}
                        className={form.passedKm.isValid ? '' : 'invalid'}
                        onChange={handleChange}
                    />
                </div>
                <button>ОК</button>
            </form>
        </FormStyled>
    )
}

export default AddStepForm