import React from 'react';
import { render, screen } from '@testing-library/react';
import BasicQuestions from './BasicQuestions';



describe('BasicQuestions', () => {

    test('renders correctly', () => {
        render(<BasicQuestions question={{ image: "img01.jpg", text: "Question Text" }} alternatives={[{ image: "img01.jpg", text: "alt1" }, { image: "img01.jpg", text: "alt2" }]} />);
        expect(screen.getByText(/Question Text/i)).toBeInTheDocument();
        expect(screen.getByText(/alt1/i)).toBeInTheDocument();
        expect(screen.getByText(/alt2/i)).toBeInTheDocument();
    });
});
