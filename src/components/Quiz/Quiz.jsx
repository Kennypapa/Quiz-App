import { useRef, useState } from "react";
import { data } from "../../assets/data";
import "./Quiz.css";

const Quiz = () => {
    let [index, setIndex] = useState(0);
    const [question, setQuestion] = useState(data[index]);
    const [lock, setLock] = useState(false);
    const [score, setScore] = useState(0);
    const [result, setResult] = useState(false);

    let Option1 = useRef(null);
    let Option2 = useRef(null);
    let Option3 = useRef(null);
    let Option4 = useRef(null);

    let option_array = [Option1, Option2, Option3, Option4];

    const checkAns = (e, ans) => {
        if (lock === false) {
            if (question.ans === ans) {
                e.target.classList.add("Correct");
                setLock(true);
                setScore((prev) => prev + 1);
            } else {
                e.target.classList.add("Wrong");
                setLock(true);
                option_array[question.ans - 1].current.classList.add("correct");
            }
        }
    };

    const next = () => {
        console.log("1");
        if (lock === true) {
             if(index === data.length -1) {
                setResult(true);
                return 0;
             }
            setIndex(++index);
            setQuestion(data[index]);
            setLock(false);

            option_array.map((option) => {
                option.current.classList.remove("Wrong");
                option.current.classList.remove("Correct");
                return null;
            });
        }
    };
    return (
        <div className=" w-[500px] mx-auto mt-[90px] bg-white text-[#262626] rounded-[10px] px-[30px] py-[20px] flex flex-col gap-[20px]"
        >
            <p className="text-3xl text-[#262626] uppercase font-[600]">Quiz App</p>
            {result ? (
                <>
                  <p>
                    You Scored {score} out of {data.length} questions.
                  </p>
                </>
            ) : (
                <div>
                    <p>
                        {index + 1}. {question.question}
                    </p>
                    <ul>
                        <li
                            ref={Option1}
                            onClick={(e) => {
                                checkAns(e, 1);
                            }}
                            className="flex items-center h-[45px] pl-[15px] border border-[#686868] rounded-[8px]  mb-[14px] text-base cursor-pointer"
                        >
                            {question.option1}
                        </li>
                        <li
                            ref={Option2}
                            onClick={(e) => {
                                checkAns(e, 2);
                            }}
                            className="flex items-center h-[45px] pl-[15px] border border-[#686868] rounded-[8px]  mb-[14px] text-base cursor-pointer"
                        >
                            {question.option2}
                        </li>
                        <li
                            ref={Option3}
                            onClick={(e) => {
                                checkAns(e, 3);
                            }}
                            className="flex items-center h-[45px] pl-[15px] border border-[#686868] rounded-[8px]  mb-[14px] text-base cursor-pointer"
                        >
                            {question.option3}
                        </li>
                        <li
                            ref={Option4}
                            onClick={(e) => {
                                checkAns(e, 4);
                            }}
                            className="flex items-center h-[45px] pl-[15px] border border-[#686868] rounded-[8px]  mb-[14px] text-base cursor-pointer"
                        >
                            {question.option4}
                        </li>
                    </ul>
                    <div>
                        <button
                            onClick={next}
                            className="mx-auto w-full bg-[rgba(13,129,79,1)] hover:bg-white border border-transparent hover:border hover:border-[rgba(13,129,79,1)] hover:text-[rgba(13,129,79,1)] ease-in-out duration-150 h-[45px] rounded-[8px] text-white"
                        >
                            Next
                        </button>
                    </div>
                    <div className="text-center text-sm pt-3">
                        {index + 1} of {data.length} questions
                    </div>
                </div>
            )}
        </div>
    );
};

export default Quiz;
