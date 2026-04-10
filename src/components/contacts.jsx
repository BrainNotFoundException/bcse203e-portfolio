import { SOCIALS } from "./data";

export default function Contact() {
    return (
        <section id="contacts" className="section">
            <h2>Here are my contact details:</h2>

            <a href="mailto:lavnish.2024@vitstudent.ac.in">
                lavnish.2024@vitstudent.ac.in
            </a>

            <div>
                {SOCIALS.map(s => (
                    <button key={s.name} onClick={() => window.open(s.link, "_blank")}>
                        {s.name}
                    </button>
                ))}
            </div>
        </section>
    );
}