import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import StepOne from '../src/steps/step-one';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: "/",
        element: <StepOne />,
    },
]);

describe('StepOne', () => {
    it('should work as expected', () => {
        const { debug } = render(
            <RouterProvider router={router} />
        );
        debug();
    });

    it('deve renderizar os campos de entrada', () => {
        const { getByPlaceholderText } = render(
            <RouterProvider router={router} />
        );
        expect(getByPlaceholderText('Qual é o nome da empresa')).toBeInTheDocument();
        expect(getByPlaceholderText('Digite o número de colaboradores')).toBeInTheDocument();
        expect(getByPlaceholderText('Fale um pouco sobre seus produtos ou serviços')).toBeInTheDocument();
    });

    it('deve atualizar o valor dos campos de entrada ao digitar', () => {
        const { getByPlaceholderText } = render(
            <RouterProvider router={router} />
        );
        fireEvent.change(getByPlaceholderText('Qual é o nome da empresa'), { target: { value: 'Teste' } });
        expect(getByPlaceholderText('Qual é o nome da empresa')).toHaveValue('Teste');
    });

    it('deve atualizar o valor dos campos de entrada ao digitar', () => {
        const { getByPlaceholderText } = render(
            <RouterProvider router={router} />
        );

        fireEvent.change(getByPlaceholderText('Qual é o nome da empresa'), { target: { value: 'Teste' } });
        expect(getByPlaceholderText('Qual é o nome da empresa')).toHaveValue('Teste');

        fireEvent.change(getByPlaceholderText('Digite o número de colaboradores'), { target: { value: 100 } });
        expect(getByPlaceholderText('Digite o número de colaboradores')).toHaveValue(100);

        fireEvent.change(getByPlaceholderText('Fale um pouco sobre seus produtos ou serviços'), { target: { value: 'Nós vendemos produtos de alta qualidade.' } });
        expect(getByPlaceholderText('Fale um pouco sobre seus produtos ou serviços')).toHaveValue('Nós vendemos produtos de alta qualidade.');
    });
});