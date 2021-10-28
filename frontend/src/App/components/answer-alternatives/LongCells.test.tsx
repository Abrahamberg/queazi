import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import LongCells from './LongCells';



describe('LongCells', () => {

    test('renders text as child node', () => {
        const { getByText } = render(<LongCells enabled={true} onSelect={() => null} index={0}> The Expected Text </LongCells>);
        expect(getByText(/The Expected Text/i)).toBeInTheDocument();
    });

    test('renders html as child node', () => {
        const { getByTestId } = render(<LongCells enabled={true} onSelect={() => null} index={0}> <div data-testid="my-div">text in div</div> </LongCells>);
        expect(getByTestId(/my-div/i).textContent).toBe("text in div");
    });

    test('show pointer when it is enabled', () => {
        const { container } = render(<LongCells enabled={true} onSelect={() => null} index={0}>some text</LongCells>);
        expect(container.firstChild).toHaveStyle(`cursor:pointer`)

    });
    test('dont show pointer when it is disabled', () => {
        const { container } = render(<LongCells enabled={false} onSelect={() => null} index={0}>some text</LongCells>);
        expect(container.firstChild).not.toHaveStyle(`cursor:pointer`);

    });

    test('on event click selects the cell', () => {
        const handelSelect = jest.fn();
        render(<LongCells enabled={true} onSelect={handelSelect} index={0}>some text</LongCells>);
        const cell = screen.getByText(/some text/i)
        fireEvent.click(cell)
        expect(handelSelect).toBeCalledTimes(1);
    });

    test('before event click not be selected', () => {
        const handelSelect = jest.fn();
        render(<LongCells enabled={true} onSelect={handelSelect} index={0}>some text</LongCells>);
        const cell = screen.getByText(/some text/i);
        expect(cell).not.toHaveClass("border-warning");
    });

    test('on event click get Selected', () => {
        const handelSelect = jest.fn();
        render(<LongCells enabled={true} onSelect={handelSelect} index={0}>some text</LongCells>);
        const cell = screen.getByText(/some text/i)
        fireEvent.click(cell);
        expect(cell).toHaveClass("border-warning");
    });


    test('click no effect on disabled cells', () => {
        const handelSelect = jest.fn();
        render(<LongCells enabled={false} onSelect={handelSelect} index={0}>some text</LongCells>);
        const cell = screen.getByText(/some text/i);
        fireEvent.click(cell);
        expect(cell).not.toHaveClass("border-warning");
        expect(handelSelect).not.toBeCalled();
    });


});

