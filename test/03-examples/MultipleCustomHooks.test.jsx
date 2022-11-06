const { render,screen } = require("@testing-library/react")

const { MultipleCustomHooks } = require("../../src/03-examples")

describe('Pruebas en <MultipleCustomHooks/>>', () => { 

    test('debe de mostrar el componente por defecto', ()=>{

        render(<MultipleCustomHooks/>)
        expect(screen.getByText('Loading...'))
        expect(screen.getByText('BreakingBad Quotes'))

        const nextButton=screen.getByRole('button', {name:'Next quote'})
        
        expect(nextButton.disabled).toBeTruthy()

        screen.debug();
    })
 })