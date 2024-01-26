import React,{useRef} from 'react'


function InterMarkSheet() {
    
    let passMarks=35;

    let passColor="green";
    let failColor="red";

    let emailInputRef = useRef();
    let phInputRef = useRef();
    let hindiLkInputRef = useRef();
    let engLkInputRef = useRef();
    let spainLkInputRef = useRef();
    let dobInputRef = useRef();
    let marriedInputRef = useRef();
    let singleInputRef = useRef();

    let studentNameRef=useRef();
    let engInputRef=useRef();
    let hindiInputRef=useRef();
    let phyInputRef=useRef();
    let chemInputRef=useRef();
    let mathsInputRef=useRef();
    let bioInputRef=useRef();
    let compInputRef=useRef();

    let engResultRef=useRef();
    let hindiResultRef=useRef();
    let phyResultRef=useRef();
    let chemResultRef=useRef();
    let mathsResultRef=useRef();
    let bioResultRef=useRef();
    let compResultRef=useRef();

    let reportCardRef = useRef();
    let stnRepRef=useRef();
    let emailRepRef = useRef();
    let phRepRef = useRef();
    let hindiLkRepRef = useRef();
    let engLkRepRef = useRef();
    let spainLkRepRef = useRef();
    let dobRepRef = useRef();
    let marriedRepRef = useRef();
    let singleRepRef = useRef();
    let engMRepRef = useRef();
    let hinMRepRef = useRef();
    let phyMRepRef = useRef();
    let cheMRepRef = useRef();
    let bioMRepRef = useRef();
    let mathMRepRef = useRef();
    let compMRepRef = useRef();

    let totMRepRef = useRef();
    let percRepRef = useRef();
    let gradeRepRef = useRef();
    let resultRepRef = useRef();
                
     

  return (
    <div id='parentDiv'>
        <form>
            <h1>InterMarkSheet</h1>
            <fieldset>
                <legend>Personal Details</legend>
            <div>
            <label htmlFor='stNameInput'>Student Name:</label>
            <input ref={studentNameRef} id='stNameInput' type="text" ></input>
            </div>
            <div>
            <label htmlFor='emailInput'>Email:</label>
            <input id='emailInput'type="email" ref={emailInputRef}></input>
            </div>
            <div>
            <label htmlFor='phInput'>Phone No:</label>
            <input id='phInput'type="number" ref={phInputRef}></input>
            </div>
            <div>
            <label>Language Known:</label>
            <input id='lkInput1' type='checkbox' ref={hindiLkInputRef}></input>
            <label className='lkLable' htmlFor='lkInput1'>Hindi</label>
            <input id='lkInput2' type='checkbox' ref={engLkInputRef}></input>
            <label className='lkLable' htmlFor='lkInput2'>English</label>
            <input id='lkInput3' type='checkbox' ref={spainLkInputRef}></input>
            <label  className='lkLable' htmlFor='lkInput3' >Spanish</label>
            </div>
            <div>
            <label htmlFor='dobInput'>D.O.B:</label>
            <input id='dobInput'type="datetime-local" ref={dobInputRef}></input>
            </div>
            <div>
            <label>Marrital Status:</label>
            <input id='mInput' type='radio' name="mstatus" ref={marriedInputRef}></input>
            <label className='lkLable' htmlFor='mInput' >Married</label>
            <input id='sInput' type='radio' name="mstatus" ref={singleInputRef}></input>
            <label className='lkLable' htmlFor='sInput'>Single</label>
            </div>
            <div>
            <label htmlFor='adInput'>Address:</label>
            <textarea id='adInput'></textarea>
            </div>
            <div>
            <label htmlFor='stateInput'>State:</label>
            <select id='stateInput'>
                <optgroup label='East' color='Black'>
                    <option>Chhattisgarh</option>
                    <option>Odisha</option>
                    <option>Sikkim</option>
                    <option>West Bengal</option>
                </optgroup>
                <optgroup label='West' color='black'>         
                    <option>Chhattisgarh</option>
                    <option>Odisha</option>
                    <option>Sikkim</option>
                    <option>West Bengal</option>
                </optgroup>
                <optgroup label='North' color='black'>         
                    <option>Chhattisgarh</option>
                    <option>Odisha</option>
                    <option>Sikkim</option>
                    <option>West Bengal</option>
                </optgroup>
                <optgroup label='South' color='black'>         
                    <option>Chhattisgarh</option>
                    <option>Odisha</option>
                    <option>Sikkim</option>
                    <option>West Bengal</option>
                </optgroup>
            </select>
            </div>
            <div>
            <label htmlFor='idInput'>ID Proof:</label>
            <input id='idInput'type="file" multiple></input>
            </div>
            </fieldset>
            <fieldset>
                <legend>Subject Marks</legend>
            <div>
            <label htmlFor='engInput'>English:</label>
            <input ref={engInputRef} id='engInput'type="number" onFocus={()=>{

        
                    
                    engInputRef.current.style.backgroundColor= "grey";
                    engInputRef.current.style.Color= "black";
                    engResultRef.current.innerHTML="Please enter b/w 0-100";

                                    
            }} 
            
            onBlur={()=>{

        
                    
                engInputRef.current.style.backgroundColor= "";
                engInputRef.current.style.Color= "";
                engResultRef.current.innerHTML="";
                                
            }}

            onChange={()=>{

             let engMarks=Number(engInputRef.current.value);

             if(engMarks>=passMarks){

                engResultRef.current.innerHTML="Pass";
                engResultRef.current.style.backgroundColor=passColor;
              
             }else{

                engResultRef.current.innerHTML="Fail";
                engResultRef.current.style.backgroundColor=failColor;
             }
                    
              
                                
            }}
            ></input>
            <span ref={engResultRef}></span>
            </div>
            <div>
            <label htmlFor='hindiInput'>Hindi:</label>
            <input ref={hindiInputRef} id='hindiInput'type="number"></input>
            <span ref={hindiResultRef}></span>
            </div>
            <div>
            <label htmlFor='phyInput'>Physics:</label>
            <input ref={phyInputRef} id='phyInput'type="number"></input>
            <span ref={phyResultRef}></span>
            </div>
            <div>
            <label htmlFor='chemInput'>Chemistry:</label>
            <input ref={chemInputRef} id='chemInput'type="number"></input>
            <span ref={chemResultRef}></span>
            </div>
            <div>
            <label htmlFor='mathsInput'>Maths:</label>
            <input ref={mathsInputRef} id='mathsInput'type="number"></input>
            <span ref={mathsResultRef}></span>
            </div>
            <div>
            <label htmlFor='bioInput'>Biology:</label>
            <input ref={bioInputRef} id='bioInput'type="number"></input>
            <span ref={bioResultRef}></span>
            </div>
            <div>
            <label htmlFor='compInput'>Computer:</label>
            <input ref={compInputRef} id='compInput'type="number"></input>
            <span ref={compResultRef}></span>
            </div>
            </fieldset>
            <div>
                <button type="button" 

                onClick={()=>{
                    reportCardRef.current.style.display = "block";

                    stnRepRef.current.innerHTML=`${studentNameRef.current.value}`;
                    emailRepRef.current.innerHTML = `${emailInputRef.current.value}`;
                    phRepRef.current.innerHTML = `${phInputRef.current.value}`;

                    let userKnowsEng = "";
                    let userKnowsHindi = "";
                    let userKnowsSpainish = "";

                    if(engLkInputRef.current.checked == true){
                        
                        userKnowsEng = "Eng";
                        engLkRepRef.current.innerHTML = `${userKnowsEng}`;

                    }
                    
                    if(hindiLkInputRef.current.checked == true){
                        
                        userKnowsHindi = "Hindi";
                        hindiLkRepRef.current.innerHTML = `${userKnowsHindi}`;
                        
                    }
                    
                    if(spainLkInputRef.current.checked == true){
                        
                        userKnowsSpainish = "Spainish";
                        spainLkRepRef.current.innerHTML = `${userKnowsSpainish}`;
                    }

                    dobRepRef.current.innerHTML = `${dobInputRef.current.value}`;

                    let userIsMarried = "";
                    let userIsSingle = "";

                    if(marriedInputRef.current.checked == true){
                        
                        userIsMarried = "Married";
                        marriedRepRef.current.innerHTML = `${userIsMarried}`;

                    }
                    
                    if(singleInputRef.current.checked == true){
                        
                        userIsSingle = "Single";
                        singleRepRef.current.innerHTML = `${userIsSingle }`;
                        
                    }

                    engMRepRef.current.innerHTML = `${engInputRef.current.value}`;
                    hinMRepRef.current.innerHTML = `${hindiInputRef.current.value}`;
                    phyMRepRef.current.innerHTML = `${phyInputRef.current.value}`;
                    cheMRepRef.current.innerHTML = `${chemInputRef.current.value}`;
                    bioMRepRef.current.innerHTML = `${bioInputRef.current.value}`;
                    mathMRepRef.current.innerHTML = `${mathsInputRef.current.value}`;
                    compMRepRef.current.innerHTML = `${compInputRef.current.value}`;

                    let totalMarks = Number(engInputRef.current.value) + Number(hindiInputRef.current.value) + Number(phyInputRef.current.value) + Number(chemInputRef.current.value) + Number(bioInputRef.current.value) + Number(mathsInputRef.current.value) + Number(compInputRef.current.value)
                    
                    totMRepRef.current.innerHTML=`${totalMarks} / 700`;

                    let Percentage = (totalMarks/700)*100;
                    Percentage =Percentage.toFixed(2);

                    percRepRef.current.innerHTML= `${Percentage}%`;


                    let Grade ="";

                    if(Percentage>=75){

                        Grade ="Dictintion";
                        gradeRepRef.current.innerHTML=`${Grade}`;

                    }else if(Percentage<75 && Percentage>=65 ){

                        Grade ="First Division";
                        gradeRepRef.current.innerHTML=`${Grade}`;

                    }else if(Percentage<65 && Percentage>=55 ){

                        Grade ="Second Division";
                        gradeRepRef.current.innerHTML=`${Grade}`;

                    }else if(Percentage<55 && Percentage>=45 ){

                        Grade ="Third Division";
                        gradeRepRef.current.innerHTML=`${Grade}`;

                    }else if(Percentage<45 && Percentage>=35 ){

                        Grade ="Just Passed";
                        gradeRepRef.current.innerHTML=`${Grade}`;

                    }else if(Percentage<35){

                        Grade ="Fail";
                        gradeRepRef.current.innerHTML=`${Grade}`;

                    }

                    let Result ="";

                    if(Percentage>=35){

                        Result ="Pass";
                        resultRepRef.current.innerHTML=`${Result}`;

                    }else{

                        Result ="Fail";
                        resultRepRef.current.innerHTML=`${Result}`;

                    }


                

                }}
                >Calculate Marks</button>
            </div>

        </form>
        <div className='reportCard' ref={reportCardRef}>
            <fieldset>
                <legend>Report Card</legend>
                <label className='repLable'>Student Name: <p className='repPara' ref={stnRepRef}></p></label>
                <label  className='repLable'>Email: <p ref={emailRepRef}></p></label>
                <label  className='repLable'>Phone No.: <p ref={phRepRef}></p></label>
                <label  className='repLable'>Language Known: <p ref={hindiLkRepRef}></p><p ref={engLkRepRef}></p><p ref={spainLkRepRef}></p></label>
                <label  className='repLable'>DOB: <p ref={dobRepRef}></p></label>
                <label  className='repLable'>Marrital Status: <p ref={marriedRepRef}></p><p ref={singleRepRef}></p></label>
                <label  className='repLable'>English Marks: <p ref={engMRepRef}></p></label>
                <label className='repLable' >Hindi Marks: <p ref={hinMRepRef}></p></label>
                <label  className='repLable'>Physics Marks: <p ref={phyMRepRef}></p></label>
                <label  className='repLable'>Chemistry Marks: <p ref={cheMRepRef}></p></label>
                <label  className='repLable'>Biology Marks: <p ref={bioMRepRef}></p></label>
                <label  className='repLable'>Maths Marks: <p ref={mathMRepRef}></p></label>
                <label  className='repLable'>Computer Marks: <p ref={compMRepRef}></p></label>
                <label className='repLable'> Total Marks: <p ref={totMRepRef}></p></label>
                <label className='repLable'> Percentage: <p ref={percRepRef}></p></label>
                <label className='repLable'> Grade: <p ref={gradeRepRef}></p></label>
                <label className='repLable'> Result: <p ref={resultRepRef}></p></label>

                
            </fieldset>
        </div>
    </div>
  )
}

export default InterMarkSheet;