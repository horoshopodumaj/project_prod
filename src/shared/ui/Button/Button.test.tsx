
import {render, screen} from '@testing-library/react'
import { Button, ThemeButton } from "shared/ui/Button/Button";

describe('Button', ()=> {
    test('Test render button', ()=> {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument()
    });

    test('est class', ()=> {
        render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
        screen.debug();
    });
})