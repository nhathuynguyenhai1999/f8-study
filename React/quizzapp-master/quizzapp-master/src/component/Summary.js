


function Summary({ playAgain, answerCorrect, totalQuestions,calculateTimeTaken }) {
    return (

        <div className="Summary">
            <div className="Summary-box">
                <img src='./img/congrate.png' />
                <div className="Summary-content">
                    <span className="Summary-congrate">You are amazing !</span>
                    <br />
                    <span className="Summary-text">{answerCorrect}/{totalQuestions} correct answer in {calculateTimeTaken}</span>

                </div>
                <div
                    className='play-again'
                    onClick={playAgain}
                >Play Again</div>
            </div>
        </div>


    )


}
export default Summary