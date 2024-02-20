import { useState, useEffect } from 'react'
import Summary from './Summary';
import questions from './question';



function Content({ handlePlayAgain, timeStart }) {

   



    const [currentQuestion, setCurrentQuestion] = useState(0) //câu hỏi hiện tại
    const Question = questions[currentQuestion];//lấy ra câu hỏi hiện tại
    const { question, answers, correctAnswer } = Question;// destructuring lấy dữ liệu ở mảng để render

    const [selectedAnswer, setSelectedAnswer] = useState(null);//câu được chọn
    const [choose, setChoose] = useState(false);//kiểm tra đúng sai
    const [answerCorrect, setAnswerCorrect] = useState(0)//state đếm số câu trả lời đúng (set khi click còn hết h thì k set)
    const [unactive, setUnActive] = useState(false)//state quản lí nút next và end
    const [isPlay, setIsPlay] = useState(true)// chuyển sang summary
    const [timeOver, setTimeOver] = useState(false)// state quản lí hết thời gian
    const [count, setCount] = useState(30);// đếm ngược thời gian 
    const [timeEnd, setTimeEnd] = useState(0)
    useEffect(() => {
        const timer = setInterval(() => {
            setCount((prevCount) => prevCount - 1);
        }, 1000);
        // dừng khi về 0
        if (count === 0) {
            clearInterval(timer);//về 0 xoá bộ đếm ngược
            setTimeOver(true); // set trạng thái timeover để chạy settimeout
            if (selectedAnswer === null) {
                setSelectedAnswer(123)
            }
        }

        // Xóa bộ đếm khi component bị unmount
        return () => {
            clearInterval(timer);
        };
    }, [count]);
    //cài chuông
    const playRingtone = () => {
        const audio = new Audio('path/to/ringtone.mp3');
        audio.play();
    };
    //kiểm tra câu trả lời đúng hay sai khi click chọn
    const checkAnswer = (index) => {
        if (selectedAnswer !== null) {
            return; // Ngăn không cho người dùng chọn lại câu trả lời sau khi đã chọn
        }
        setSelectedAnswer(index)
        if (correctAnswer === index) {
            setChoose(true);// đúng 
            setAnswerCorrect(prev => prev + 1)//cộng 1 điểm
        } else {
            setChoose(false)// sai
        }

        setCount(0)//ngưng đếm thời gian sau khi chọn

    }



    const handleNext = () => {
        if (selectedAnswer == null) {
            return; // Ngăn không cho người dùng qua caau khac khi chua tl
        }
        if (currentQuestion === questions.length - 1) {
            handleEnd()
        }
        else {
            setCurrentQuestion(pre => pre + 1)
            setSelectedAnswer(null)
            setCount(30)
        }
        setTimeOver(false);
    }
    const handleEnd = () => {
        setIsPlay(false)
        setTimeEnd(Date.now())
    }
    const calculateTimeTaken = () => {
        if (timeStart && timeEnd) {
            const timeTaken = Math.round((timeEnd - timeStart) / 1000); // Đổi thành giây và làm tròn
            return timeTaken;
        }
        return 0;
    };

    return (
        <div className='Content'>
            {isPlay ? (
                <>
                    <div className='content-title'>
                        <span>Quizz Game</span>
                        <span>- intellectual challenge</span>
                    </div>
                    <div
                        className='countdown'
                    >
                        {count}
                    </div>
                    <div className='question'>
                        <h3>Câu {currentQuestion + 1}</h3>
                        <span>{question}</span>
                    </div>
                    {answers.map((answer, index) => (
                        <div className='answer'>
                            <div
                                id='1'
                                className={`option ${choose && selectedAnswer === index ? 'correct' : ''} 
                                           ${!choose && selectedAnswer === index ? 'incorrect' : ''}
                                           `}
                                onClick={() => checkAnswer(index)}
                            >
                                {answer}
                                <input
                                    type='radio' name='a'
                                    className='answer-check'
                                    checked={selectedAnswer === index}
                                ></input>
                            </div>
                        </div>
                    ))}
                    <div
                        className='btn-next'
                        onClick={handleNext}
                    >Next
                    </div>
                </>
            ) : (
                <Summary
                    playAgain={handlePlayAgain}
                    answerCorrect={answerCorrect}
                    totalQuestions={questions.length}
                    calculateTimeTaken={calculateTimeTaken()}
                />
            )

            }
        </div>
    )
}
export default Content