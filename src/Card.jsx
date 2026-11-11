
function Card() {
    return (
        <div className="card">
            <img
                className="card-img"
                src="https://opis-cdn.tinkoffjournal.ru/mercury/z99km5RCsG.in-out-shrek-5-preview.jpg?preset=image_1280w_2x"
                alt="Profile"
            />

            <h1 className="card-name">
                Shyryn Seisenkanova
            </h1>

            <h2 className="card-job">
                Programmer
            </h2>

            <p className="card-text">
                I am a 4th-year student interested
                in programming and web development.
            </p>

            <h3>Education</h3>
            <p>4th-year student</p>

            <h3>Skills</h3>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>C#</li>
            </ul>

            <h3>Contact</h3>
            <p>Phone: +7 707 578 2565</p>
        </div>
    );
}

export default Card;
