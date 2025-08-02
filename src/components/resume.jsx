import { useState } from "react";

export default function Resume({passGeneral, passEducation, passProfession}){

    return <>
        <div id="resume-area" style={{display: 'none'}}>
            <div id="resume">
                <div id="nameText">{passGeneral[0]}</div>
                <div class="resume-section" id="contacts">
                    <p id="emailText">{passGeneral[1]}</p>
                    <p id="phoneText">+91-{passGeneral[2]}</p>
                </div>
                
                <div>
                    <div className="title">EDUCATION</div>
                    <hr></hr>
                    <ResumeSection dataPassing = {passEducation}/>
                </div>
                <div>
                    <div className="title">PRACTICAL EXPERIENCE</div>
                    <hr></hr>
                    <ResumeSection dataPassing={passProfession}/>
                </div>
            </div>
            <button id="edit-button">Edit</button>
        </div>
        
    </>
}

function ResumeSection({dataPassing}){
    return<>
        <div>
            {dataPassing.map((item) => (
                <div>{item}</div>
            ))}
        </div>
    </>
    
}