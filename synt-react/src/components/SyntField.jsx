export default function SyntField(props){
    return (
        <>
            <label  className="form-label">{props.value}</label>
            <label  className="form-label">{props.label}</label>
            <input type="text" className="form-control" />
        </>
    )
}

SyntField.propTypes = {
    label: String,
    value: String,
    setValue: String
}