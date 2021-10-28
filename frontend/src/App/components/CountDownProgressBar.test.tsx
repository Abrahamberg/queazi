import React from 'react';
import { act, render } from '@testing-library/react';
import CountDownProgressBar from './CountDownProgressBar';
import { unmountComponentAtNode } from 'react-dom';

let container: any = null;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
    jest.useFakeTimers();
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
    jest.useRealTimers();
});

describe('Count Down Progress bar', () => {
    test('faction called when time is up', () => {
        const onProgressFinish = jest.fn();
        act(() => {
            render(<CountDownProgressBar seconds={1} onProgressFinish={onProgressFinish} />, container);
        });
        expect(onProgressFinish).not.toBeCalled();
        act(() => {
            jest.advanceTimersByTime(5000);
        });
        expect(onProgressFinish).toBeCalledTimes(1);
    });

    test('faction not called when seconds are set to 0', () => {
        const onProgressFinish = jest.fn();
        act(() => {
            render(<CountDownProgressBar seconds={0} onProgressFinish={onProgressFinish} />, container);
        });
        expect(onProgressFinish).not.toBeCalled();
        act(() => {
            jest.advanceTimersByTime(5000);
        });
        expect(onProgressFinish).not.toBeCalled();
    });


});