export default function AnswerButton(){
    const handleClick = () => {

    };
    
    const buttonStyle = {
        backgroundColor: 'black',
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    };

    return (
        <button onClick={handleClick} style={buttonStyle}>
            Valider
        </button>
    )
}