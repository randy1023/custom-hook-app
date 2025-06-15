import { render, screen } from "@testing-library/react"
import { UserContext } from "../../src/09-useContext/context/UserContext"
import { HomePage } from "../../src/09-useContext/HomePage"

describe('test on <HomePage/>', () => {

    const user = {
        id: 1,
        name: 'Demo User',
        email: 'demo@gmail.com'
    }
    test('should show component without user', () => {
        render(
            <UserContext.Provider value={{ user: null, setUser: () => { } }}>
                <HomePage />
            </UserContext.Provider>
        )

        const preTagElement = screen.getByLabelText('pre');

        expect(preTagElement.innerHTML).toBe('null')
    })

    test('should show component with user', () => {
        render(
            <UserContext.Provider value={{ user, setUser: () => { } }}>
                <HomePage />
            </UserContext.Provider>
        )

        const preTagElement = screen.getByLabelText('pre');
        
        expect(JSON.parse(preTagElement.innerHTML)).toEqual(user)
    })
})