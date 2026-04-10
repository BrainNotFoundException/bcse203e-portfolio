import ThemeSwitcher from "./Theme";

export default function Navbar() {
  return (
    <nav className="nav">
      <span><b>Lavnish Jhunjhunwala</b></span>
      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#work">Work</a>
        <a href="#contacts">Contact</a>
        <ThemeSwitcher />
      </div>
    </nav>
  );
}