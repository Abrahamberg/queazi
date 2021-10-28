import React, { useState } from 'react'
import { Container, Row } from 'react-bootstrap';
import Simple from '../../components/answer-alternatives/LongCells'
import CountDownProgressBar from '../../components/CountDownProgressBar'
interface Props {
    question: string,
    alternatives: string[],
}

const BasicQuestions: React.FC<Props> = ({ question, alternatives }) => {


    const [enabled, setEnabled] = useState(true);
    return (
        <>
            <CountDownProgressBar seconds={10} onProgressFinish={() => setEnabled(false)} />
            <Container>

                <h3 className="pt-4">{question}</h3>

                <Row>
                    {alternatives.map((alternative, i) => <Simple key={i} index={i} enabled={enabled} onSelect={() => setEnabled(false)} > {alternative}  </Simple>)}

                </Row>
            </Container>
        </>
    )
}


export default BasicQuestions;