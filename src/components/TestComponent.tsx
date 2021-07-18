import React, {useState, useEffect} from "react";

interface Props {
    word?: string
}

const TestComponent: React.FC<Props> = ({word}) => {
    const [theWord, setTheWord] = useState<string|undefined>();

    useEffect( () => {
        if(word === "hello"){
            setTheWord("That isn't very creative...");
        } else {
            setTheWord(word);
        }
    }, [word]);

    return (
        <p>Your word: {theWord}</p>
    );
};

export default TestComponent;