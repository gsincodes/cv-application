export default function FormArea(){
    return <>
        <form>
        <fieldset>
            <legend>General Information</legend>
            <p>
                <label for = "name">Name:</label>
                <input id = "name" type="text"></input>
            </p>
            <p>
                <label for = "email">Email:</label>
                <input id = "email" type="text"></input>
            </p>
            <p>
                <label for = "phone">Phone:</label>
                <input id = "phone" type="number"></input>
            </p>
        </fieldset>
        <fieldset>
            <legend>Educational Experience</legend>
            <p>
                <label for = "school-name">School Name:</label>
                <input id = "school-name" type="text"></input>
            </p>
            <p>
                <label for = "course">Course:</label>
                <input id = "course" type="text"></input>
            </p>
            <p>
                <label for = "grad-date">Graduated in:</label>
                <input id = "grad-date" type="number"></input>
            </p>
        </fieldset>
        <fieldset>
            <legend>Practical Experience</legend>
            <p>
                <label for = "company-name">Company Name:</label>
                <input id = "company-name" type="text"></input>
            </p>
            <p>
                <label for = "position">Position:</label>
                <input id = "position" type="text"></input>
            </p>
            <p>
                <label for = "job-desc">Job Description:</label>
                <textarea id = "job-desc" type="text"></textarea>
            </p>
            <p>
                <label for = "joining-date">Joining Date:</label>
                <input id = "joining-date" type="number"></input>
            </p>
            <p>
                <label for = "leaving-date">Leaving Date:</label>
                <input id = "leaving-date" type="number"></input>
            </p>
        </fieldset>
        <button id="generate-button">Generate</button>
        </form>
    </>
}