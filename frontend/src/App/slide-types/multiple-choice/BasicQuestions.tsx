import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import LongCells from '../../components/answer-alternatives/LongCells'
import CountDownProgressBar from '../../components/CountDownProgressBar'
import { TextAndImage } from '../../interfaces/TextAndImage';
interface Props {
    question: TextAndImage,
    alternatives: TextAndImage[],
}

const BasicQuestions: React.FC<Props> = ({ question, alternatives }) => {


    const [enabled, setEnabled] = useState(true);
    return (
        <>
            <CountDownProgressBar seconds={10} onProgressFinish={() => setEnabled(false)} />
            <Container style={{ maxWidth: '600px' }}>
                <Row>
                    <h3 className="pt-4">{question.text}</h3>
                    {question.image ? <img src={`gallery/${question.image}`} alt="" /> : null}
                </Row>
                <Row>
                    {alternatives.map((alternative, i) =>
                        <LongCells key={i} index={i} enabled={enabled} onSelect={() => setEnabled(false)} >
                            <Col xs={2} > {alternative.image && <img src={`gallery/${alternative.image}`} className="rounded-circle mini-icon" alt="" />}  </Col>
                            <Col className=" my-auto" ><span style={{ fontSize: '3vw' }}>{alternative.text}</span> </Col>
                        </LongCells>)}

                </Row>
            </Container>
        </>
    )
}


export default BasicQuestions;