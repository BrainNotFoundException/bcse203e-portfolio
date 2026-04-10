import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") || "light"
    );

    useEffect(() => {
        document.body.classList.toggle("dark", theme === "dark");
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <button onClick={() =>
            setTheme(theme === "light" ? "dark" : "light")
        }>
            {theme === "light" ? "🌙" : "☀️"}
        </button>
    );
}