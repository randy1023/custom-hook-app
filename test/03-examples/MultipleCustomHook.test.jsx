import { fireEvent, render, renderHook, screen } from "@testing-library/react"
import { MultipleCustomHook } from "../../src/03-examples/MultipleCustomHook"
import { useFetch } from "../../src/hooks/useFetch"
import { useCounter } from "../../src/hooks/useCounter"
jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('test on MultipleCustomhook.jsx', () => {
  const mockIncrement = jest.fn();
  useCounter.mockReturnValue({
    counter: 1,
    increment: mockIncrement,
  })
  const id = 1;
  const pokeName = 'bulbasaur'
  beforeEach(() => {
    jest.clearAllMocks();
  })
  test('should show the component by default', () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null
    });
    render(<MultipleCustomHook />)
    const nextButton = screen.getByRole('button', { name: 'Siguiente' });
    const previousButton = screen.getByRole('button', { name: 'Anterior' });
    const resetButton = screen.getByRole('button', { name: 'Reset' });
    expect(screen.getByText('Informacion de Pokemon')).toBeTruthy();
    expect(screen.getByText("Cargando......")).toBeTruthy();
    expect(nextButton).toBeTruthy();
    expect(nextButton.disabled).toBeTruthy();
    expect(previousButton).toBeTruthy();
    expect(previousButton.disabled).toBeTruthy();
    expect(resetButton).toBeTruthy();
    expect(resetButton.disabled).toBeTruthy();
  })

  test('should show tha answer of api', async () => {

    useFetch.mockReturnValue({
      data: {
        id,
        name: pokeName,
        sprites: {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
          front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png',
          back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png',
          back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png'
        }
      },
      isLoading: false,
      hasError: null
    });

    render(<MultipleCustomHook />)
    const img = screen.getAllByRole('img').length;
    const nextButton = screen.getByRole('button', { name: 'Siguiente' });
    const previousButton = screen.getByRole('button', { name: 'Anterior' });
    const resetButton = screen.getByRole('button', { name: 'Reset' });
    expect(img).toBeGreaterThan(0);
    expect(screen.getByText(`#${id} - ${pokeName}`)).toBeTruthy();
    expect(nextButton.disabled).toBeFalsy();
    expect(previousButton.disabled).toBeFalsy();
    expect(resetButton.disabled).toBeFalsy()


  })

  test('should call increment funtion', () => {




    useFetch.mockReturnValue({
      data: {
        id,
        name: pokeName,
        sprites: {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
          front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png',
          back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png',
          back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png'
        }
      },
      isLoading: false,
      hasError: null
    });
    render(<MultipleCustomHook />)
    const nextButton = screen.getByRole('button', { name: 'Siguiente' });
    fireEvent.click(nextButton);
    expect(mockIncrement).toHaveBeenCalledTimes(1)


  })
})