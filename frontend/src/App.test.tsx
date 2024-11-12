import {test, expect} from "vitest";
import App from "./App.tsx";
import {render, screen} from "@testing-library/react";

test("App renders with h1", () => {
    render(<App />);
    expect(screen.getByRole("heading", {name: /App/i})).toBeVisible();
})