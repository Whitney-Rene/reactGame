import GuessGame from "./components/GuessGame";
import { render } from '@testing-library/react';
import { expect, test } from 'vitest';

describe("testing that strings render", () => {


    test("is rendering the game", () => {
        const { getByText } = render(<GuessGame />);
        expect(getByText('Guess a Number between 1-10')).toBeDefined()

    })

    test("is rendering the game", () => {
        const { getByText } = render(<GuessGame />);
        expect(getByText('Enter your GUESS in the box below:')).toBeDefined()

    })

})
//Enter your GUESS in the box below: