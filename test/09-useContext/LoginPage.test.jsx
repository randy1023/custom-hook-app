import { fireEvent, render, screen } from "@testing-library/react"
import { LoginPage } from "../../src/09-useContext/LoginPage"
import { UserContext } from "../../src/09-useContext/context/UserContext"

describe('test on <LoginPage/>', () => {
    const setUserMock = jest.fn();
    const user = {
        id: 1,
        name: 'Demo User',
        email: 'demo@gmail.com'
    }
    beforeEach(() => {
        jest.clearAllMocks();
    })
    test('should show component without user', () => {
        render(
            <UserContext.Provider value={{ user: null, setUser: () => { } }}>
                <LoginPage />
            </UserContext.Provider>
        )
        const preTagElement = screen.getByLabelText('pre-login');
        expect(preTagElement.innerHTML).toBe('null');
        const buttonElement = screen.getByRole('button', { name: 'set user' });
        expect(buttonElement).toBeTruthy();

    })

    test('should show component with user', () => {
        render(
            <UserContext.Provider value={{ user, setUser: setUserMock }}>
                <LoginPage />
            </UserContext.Provider>
        )
        const buttonElement = screen.getByRole('button', { name: 'set user' });
        const preTagElement = screen.getByLabelText('pre-login');
        expect(JSON.parse(preTagElement.innerHTML)).toEqual(user)

        expect(buttonElement).toBeTruthy();
        fireEvent.click(buttonElement);

        expect(setUserMock).toHaveBeenCalledTimes(1);
        expect(setUserMock).toHaveBeenCalledWith(
            {
                id: 123,
                name: "randy gonzalez",
                email: "randygonzalezR@gmail.com",
            }
        )

    })
})