const word = {
    word: '',
    translate: ''
}
export default function AddWord() {
    return (
        <div>
            <Input label="Слово"></Input>
        </div>
    )
}
function Input({label}){
    return(
        <div>
            <label>{label}</label>
            <input  />
        </div>
    )
}