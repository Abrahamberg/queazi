import React from 'react';
import { render, screen } from '@testing-library/react';
import BasicQuestions from './BasicQuestions';



describe('BasicQuestions', () => {

    test('renders correctly', () => {
        render(<BasicQuestions question="Question Text" alternatives={["alt1", "alt2"]} />);
        expect(screen.getByText(/Question Text/i)).toBeInTheDocument();
        expect(screen.getByText(/alt1/i)).toBeInTheDocument();
        expect(screen.getByText(/alt2/i)).toBeInTheDocument();
    });
});
