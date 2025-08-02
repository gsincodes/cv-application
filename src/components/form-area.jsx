export default function FormArea({getGeneral, getEducation, getProfession}){

    function generateCV(e){
        e.preventDefault();
        let nameVal = document.querySelector("#name").value;
        let emailVal = document.querySelector("#email").value;
        let phoneVal = document.querySelector("#phone").value;
        getGeneral([nameVal, emailVal, phoneVal]);

        let schoolVal = document.querySelector("#school-name").value;
        let courseVal = document.querySelector("#course").value;
        let gradVal = document.querySelector("#grad-date").value;
        getEducation([schoolVal, courseVal, gradVal]);
        
        let companyVal = document.querySelector("#company-name").value;
        let positionVal = document.querySelector("#position").value;
        let jobVal = document.querySelector("#job-desc").value;
        let joinVal = document.querySelector("#joining-date").value;
        let leaveVal = document.querySelector("#leaving-date").value;
        getProfession([companyVal, positionVal, jobVal, joinVal, leaveVal]);
        document.querySelector("#resume-area").style.display = 'block';
    }

    return <>
        <form>
            <fieldset>
                <legend>General Information</legend>
                <InputComp labelText='Name: ' forText = 'name' idText = 'name' typeText = 'text'/>
                <InputComp labelText='Email: ' forText = 'email' idText = 'email' typeText = 'email'/>
                <InputComp labelText='Phone: ' forText = 'phone' idText = 'phone' typeText = 'number'/>
            </fieldset>
            

            <fieldset>
                <legend>Educational Experience</legend>
                <InputComp labelText='School Name: ' forText='school-name' idText='school-name' typeText='text'/>

                <InputComp labelText='Course: ' forText='course' idText='course' typeText='text'/>
                
                <InputComp labelText='Graduated in: ' forText='grad-date' idText='grad-date' typeText='number'/>

            </fieldset>

            <fieldset>
                <legend>Practical Experience</legend>

                <InputComp labelText='Company Name: ' forText='company-name' idText='company-name' typeText='text'/>
                
                <InputComp labelText='Position: ' forText='position' idText='position' typeText='text'/>

                <InputComp labelText='Job Description: ' forText='job-desc' idText='job-desc' typeText='text'/>

                <InputComp labelText='Joining Date: ' forText='joining-date' idText='joining-date' typeText='number'/>

                <InputComp labelText='Leaving Date: ' forText='leaving-date' idText='leaving-date' typeText='number'/>

            </fieldset>
            <button id="generate-button" onClick={(e) => generateCV(e)}>Generate</button>
        </form>
    </>
}

function InputComp({labelText, forText, idText, typeText}){
    return <>
        <p>
            <label for={forText}>{labelText}</label>
            <input id={idText} type={typeText}></input>
        </p>
    </>
}