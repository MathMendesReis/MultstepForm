import '@testing-library/jest-dom';
import { render } from "@testing-library/react";
import App from "../src/App";


describe("App", () => {
    it("should work as expected", () => {
        render(<App />);
    });

    it("should have a h1 element", () => {
        const { container } = render(<App />);
        expect(container.querySelector("h1")).toBeInTheDocument();
    });
});
