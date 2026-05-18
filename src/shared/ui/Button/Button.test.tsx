
import {render, screen} from '@testing-library/react'
import { Button, ButtonTheme } from "./Button";

describe('Button', ()=> {
    test('Test render button', ()=> {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument()
    });

    test('est class', ()=> {
        render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
        screen.debug();
    });
})