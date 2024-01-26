import React,{useRef} from 'react'

function TenthMarkSheet() { 

  let userKnowsEng="";
  let userKnowsHindi="";
  let userKnowsFrench="";

  let userStateName="";
  let gender="";
  let marritalStatus="";
  let salutation="";
  if(gender=="male"){
    salutation="Mr.";
  }else{
    if(marritalStatus== "single"){
      salutation="Miss.";
    }else{
      salutation="Mrs.";
    }
  };


  let passMarks=35;
  let passColor="green";
  let failColor="blue";

  let maleRBRef=useRef();
  let femaleRBRef=useRef();

  let examSummaryRefHindi=useRef();
  let examSummaryRef=useRef();
  let examSummaryRefFrench=useRef();

  let studentNameRef=useRef();
  let emailInputRef = useRef();
  
  let  engInputRef=useRef();
  let  hindiInputRef=useRef();
  let  scinceInputRef=useRef();
  let  socialInputRef=useRef();
  let  mathsInputRef=useRef();

  // resultRef

  let studentResultRef= useRef();
  let emailResultRef = useRef();
  let engResultRef=useRef();
  let hindiResultRef=useRef();
  let scinceResultRef=useRef();
  let socialResultRef=useRef();
  let mathsResultRef=useRef();

  let totalMarksRef=useRef();
  let percentRef=useRef();
  
  let marriedRef=useRef();
  let singleRef=useRef();

  let stateSelectRef=useRef();

  let engLkRef=useRef();
  let hindiLkRef=useRef();
  let frenchLkRef=useRef();


  
  let inputOnFocus= (inputRef,resultRef)=>{
    inputRef.current.style.backgroundColor='powderblue';
    resultRef.current.innerHTML="Please enter b/w 0-100"
    
  }

  


   let inputOnChange =
            (inputRef,resultRef)=>{
             
             let Marks=Number(inputRef.current.value);
                         
              if(Marks>=passMarks)
              {console.log("Pass");
              resultRef.current.innerHTML="Pass";
              resultRef.current.style.backgroundColor=passColor;
              }
              else{console.log("Fail");
              resultRef.current.innerHTML="Fail";
              resultRef.current.style.backgroundColor=failColor;
              }

              
              if(Marks<0 || Marks>100){

                console.log("Invalid Value");
                resultRef.current.innerHTML="Invalid Value";
                resultRef.current.style.backgroundColor="Purple";
                resultRef.current.style.Color="white";
      
              }
           };


            let inputOnBlur= (inputRef,resultRef)=>{
              inputRef.current.style.backgroundColor="";
              resultRef.current.innerHTML="";
              
            }

        // let validateStudentResult=
        
        // ( engMarks,
        //   hindiMarks,
        //   scinceMarks,
        //   socialMarks,
        //   mathsMarks,
        //   studentName ) =>

        //  {
          
        //   let totalMarks = engMarks+hindiMarks+scinceMarks+socialMarks+mathsMarks;

        //   let percent = (totalMarks/500)*100;

        //   return {

        //     studentName,
        //     TotalMarks: totalMarks,
        //     Percent: percent
        //   }
        // }

        let validateStudentName =()=>{

          let regName = /^[a-zA-Z]+ [a-zA-Z]+$/;

           let result= regName.test(studentNameRef.current.value);

           if(result==true){
            console.log("Valid Name");
          }else{console.log("Invalid Name");}

          return result ;

           };

        let validateEmail =()=>{
          
          let regEmail= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

          let result= regEmail.test(emailInputRef.current.value);

          if(result==true){
            console.log("Vaild Email")
          }else{ 
            console.log("Invaild Email")
          }

          return result;
        }



                  

       let calcualteTenthResult=
       ()=>{

        let engMarks= Number(engInputRef.current.value);
        let hindiMarks= Number(hindiInputRef.current.value);
        let scinceMarks= Number(scinceInputRef.current.value);
        let socialMarks= Number(socialInputRef.current.value);
        let mathsMarks= Number(mathsInputRef.current.value);

        let totalMarks=(engMarks+hindiMarks+scinceMarks+socialMarks+mathsMarks);

        alert(totalMarks);

        let percent = (totalMarks/500)*100
         percent =percent.toFixed(2);

        alert(percent);

        let grade="";       
        if (percent >=75)
        {console.log(`${studentNameRef.current.value} passed with Distinction`)
         grade="Distinction"
        }        
        else if (percent >=60 && percent <75 )
        {console.log(`${studentNameRef.current.value} passed with First Division`)
        grade="First Division"
        }
        else if (percent >=50 && percent <60 )
        {console.log(`${studentNameRef.current.value} passed with Second Division`)
        grade="Second Division"
        }
        else if (percent >=40 && percent <50 )
        {console.log(`${studentNameRef.current.value} passed with Third Division`)
        grade="Third Division"
        }
        else if (percent >=35 && percent <40 )
        {console.log(`${studentNameRef.current.value} just passed `)
        grade="just passed"
        };

        
        totalMarksRef.current.innerHTML=`Total Marks Obt:${totalMarks}/500`;
        percentRef.current.innerHTML=`Percent:${percent}%`;

          if(userKnowsHindi==true){

          examSummaryRefHindi.current.innerHTML=`परीक्षा सारांश:${salutation}${studentNameRef.current.value} ${userStateName} से ${grade} के साथ उत्तीर्ण`;
          }else{examSummaryRef.current.innerHTML=`Exam Summary:${salutation}${studentNameRef.current.value} from ${userStateName} passed with ${grade}`;
           }

           if(userKnowsEng==true){
            
            examSummaryRef.current.innerHTML=`Exam Summary:${salutation}${studentNameRef.current.value} from ${userStateName} passed with ${grade}`;
             }else{examSummaryRef.current.innerHTML=`Exam Summary:${salutation}${studentNameRef.current.value} from ${userStateName} passed with ${grade}`;
             }

           
             if(userKnowsFrench==true){examSummaryRefFrench.current.innerHTML=`Résumé de l'examen:${salutation}${studentNameRef.current.value} depuis ${userStateName} passé avec ${grade}`;
            }else{examSummaryRef.current.innerHTML=`Exam Summary:${salutation}${studentNameRef.current.value} from ${userStateName} passed with ${grade}`;
               }
       
        } 

               

      
  return (
    <div>

        
        <form>   
          <h1>TenthMarkSheet</h1>  
          <fieldset>  
          <legend>Personal Details</legend>    
          <div>
          <label htmlFor='stNameInput'>Student Name:</label>
          <input ref={studentNameRef} id="stNameInput" type="text" 
          
          onChange={()=>{

            let result= validateStudentName (studentNameRef.current.value);
        

            if(result==true){

            studentResultRef.current.innerHTML="Valid Name"
            studentResultRef.current.style.color="White"
            studentResultRef.current.style.backgroundColor="green"

            }else{

              studentResultRef.current.innerHTML="Invalid Name"
              studentResultRef.current.style.color="White"
              studentResultRef.current.style.backgroundColor="red"

            };
      
            }
            }  

          ></input>
          <span ref={studentResultRef}></span>
          </div>
          <div>
          <label>Gender</label>
          <input ref={maleRBRef} type="radio" name="gender" onChange={
            ()=>{
              console.log(maleRBRef.current.checked);
              if(maleRBRef.current.checked == true){
                gender="male";
              }
            }
          }></input>
          <label className='lkLable'>Male</label>          
          <input ref={femaleRBRef} type="radio" name="gender" onChange={
            ()=>{
              console.log(femaleRBRef.current.checked);
              if(femaleRBRef.current.checked == true){
                gender="female";
              }

              
            }
          }></input>
          <label className='lkLable'>Female</label>
          </div>

          <div>
          <label htmlFor='emailInput'>Email:</label>
          <input ref={emailInputRef} id="emailInput" type="email" 

          onChange={()=>{

            let result=validateEmail(emailInputRef.current.value);

            if(result==true){

              emailResultRef.current.innerHTML="Valid Email"
              emailResultRef.current.style.color="White"
              emailResultRef.current.style.backgroundColor="green"
  
              }else{
  
                emailResultRef.current.innerHTML="Invalid Email"
                emailResultRef.current.style.color="White"
                emailResultRef.current.style.backgroundColor="red"
  
              };
        

          }

          }
          
          ></input>
          <span ref={emailResultRef}></span>
          </div>
          <div>
          <label htmlFor='phNumInput'>Phone No:</label>
          <input id="phNumInput" type="number"></input>
          </div>
          <div>
          <label>Language Known:</label>
          <input ref={hindiLkRef} id="hindilkInput" type="checkbox" onChange={
            ()=>{
              if(hindiLkRef.current.checked){
                userKnowsHindi=true;
              }else{
                userKnowsHindi=false;
              }
            }
          }></input>
          <label className='lkLable'>Hindi</label>
          <input ref={engLkRef} id="englkInput" type="checkbox" onChange={
            ()=>{
              if(engLkRef.current.checked){
                userKnowsEng=true;
              }else{
                userKnowsEng=false;
              }
            }
          }
          ></input>
          <label className='lkLable'>English</label>
          <input ref={frenchLkRef} id="frenchlkInput" type="checkbox" onChange={
            ()=>{
              if(frenchLkRef.current.checked){
                userKnowsFrench=true;
              }else{
                userKnowsFrench=false;
              }
            }
          }
          ></input>
          <label className='lkLable'>French</label>

          </div>
          <div>
          <label htmlFor='dobInput'>DOB:</label>
          <input id="dobInput" type="datetime-local"></input>
          </div>
          <div>
          <label>Marrital Status:</label>
          <input ref={marriedRef} id="marridInput" type="radio" name="marritalstatus" onChange={
            ()=>{
              if(marriedRef.current.checked==true){
                marritalStatus="Married";
              }
            }
          }></input>
          <label className='lkInput'>Married</label>
          <input ref={singleRef}id="unMInput" type="radio" name="marritalstatus" onChange={
            ()=>{
              if(singleRef.current.checked==true){
                marritalStatus="Single";
              }
            }
          }></input>
          <label className='lkInput'>Single</label> 
          </div>
          <div>
          <label htmlFor='adInput'>Address:</label>
          <textarea id="adInput" ></textarea>
          </div>
          <div>
          <label htmlFor='stateInput'>State:</label>
          <select ref={stateSelectRef} id="stateInput" onChange={
            ()=>{
              userStateName= stateSelectRef.current.value
            }
          }>
          <optgroup label='East' color='black'>         
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
          <label htmlFor='idproofInput'>ID Proof:</label>
          <input id="idproofInput" type="file" multiple></input>
          </div>        
          </fieldset>
          <fieldset> 
          <legend>Subject Marks</legend>
          <div>
          <label htmlFor='engInput'>English</label>
          <input ref={engInputRef} id="engInput" type="number" onChange={
            ()=>{inputOnChange(engInputRef,engResultRef);
            }
            }
            
            onFocus={
            ()=>{inputOnFocus(engInputRef,engResultRef);}
            }

            onBlur={
            ()=>{inputOnBlur(engInputRef,engResultRef);}
            }

            ></input>
          <span ref={engResultRef}></span>
          </div>
          <div>
          <label htmlFor='hindiInput'>Hindi</label>
          <input ref={hindiInputRef} id="hindiInput" type="number" onChange={
            ()=>{inputOnChange(hindiInputRef,hindiResultRef)}
            }
            
            onFocus={
              ()=>{inputOnFocus(hindiInputRef,hindiResultRef);}
              }

            onBlur={
              ()=>{inputOnBlur(hindiInputRef,hindiResultRef)}
            }
            
            ></input>
          <span ref={hindiResultRef}></span>
          </div>
          <div>
          <label htmlFor='scinceInput'>Scince</label>
          <input ref={scinceInputRef} id="scinceInput" type="number" onChange={
            ()=>{inputOnChange(scinceInputRef,scinceResultRef)}
            }
            
            onFocus={
              ()=>{inputOnFocus(scinceInputRef,scinceResultRef);}
              }

            onBlur={
              ()=>{inputOnBlur(scinceInputRef,scinceResultRef)}
            }
            ></input>
          <span ref={scinceResultRef}></span>
          </div>
          <div>
          <label htmlFor='socialInput'>Social</label>
          <input ref={socialInputRef}  id="socialInput" type="number" onChange={
            ()=>{inputOnChange(socialInputRef,socialResultRef)}
          }
          
          onFocus={
            ()=>{inputOnFocus(socialInputRef,socialResultRef);}
            }

          onBlur={
            ()=>{inputOnBlur(socialInputRef,socialResultRef)}
          }
          ></input>
          <span ref={socialResultRef}></span>
          </div>
          <div>
          <label htmlFor='mathsInput'>Maths</label>
          <input ref={mathsInputRef}  id="mathsInput" type="number" onChange={
            ()=>{inputOnChange(mathsInputRef,mathsResultRef)}
            }
            
            onFocus={
              ()=>{inputOnFocus(mathsInputRef,mathsResultRef);}
              }

            onBlur={
              ()=>{inputOnBlur(mathsInputRef,mathsResultRef)}
            }

            ></input>
          <span ref={mathsResultRef}></span>
          </div>
          </fieldset>
          <div>
          <button type="button" onClick={
            ()=>{

              calcualteTenthResult();

            //  let vsr=validateStudentResult (45,56,67,78,78,"Asmita Rai");

            //  console.log(vsr);
                

            }}>Calculate Marks</button>
          <p ref={examSummaryRefHindi}>Exam Summary:</p>
          <p ref={examSummaryRef}>Exam Summary:</p>
          <p ref={examSummaryRefFrench}>Exam Summary:</p>
          <p ref={totalMarksRef}>Total Marks Obt. :</p>
          <p ref={percentRef}>Percent :</p>
          </div>
        </form>
    </div>
  )

  }
export default TenthMarkSheet