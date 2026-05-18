import { classNames } from "./classNames";

describe('classNames', ()=> {
    test('with only first param', ()=> {
        expect(classNames('someClass')).toBe('someClass')
    });

    test('with additional class', ()=> {
        expect(classNames('someClass', 
            {}, 
            ['class1' ,'class2']
        )).toBe('someClass class1 class2')
    });

    test('with mods', ()=> {
        expect(classNames('someClass', 
            {hovered: true, disabled: true}, 
            ['class1' ,'class2']
        )).toBe('someClass class1 class2 hovered disabled')
    });

    test('with mods false', ()=> {
        expect(classNames('someClass', 
            {hovered: true, disabled: false}, 
            ['class1' ,'class2']
        )).toBe('someClass class1 class2 hovered')
    });

    test('with mods undefined', ()=> {
        expect(classNames('someClass', 
            {hovered: true, disabled: undefined}, 
            ['class1' ,'class2']
        )).toBe('someClass class1 class2 hovered')
    });
})