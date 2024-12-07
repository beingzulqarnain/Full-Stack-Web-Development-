
// console.log("Hello");


  const mainDiv = document.getElementById('mainDiv');
  const div1 = document.getElementById('div1');

  //Event Bubbling When child clicked the parent will also executed.
        // *************Element to Body*********
        //div1
        //mainDiv
        // body

  //   div1.addEventListener('click',function(){
    //     console.log(" Div 1 Clicked");
    //   })
    //   mainDiv.addEventListener('click',function(){
        //     console.log(" mainDiv is Clicked");
        //   })
        
    //Event capturing When child clicked the parent will also executed.
    // body      ******body to Element********
    //mainDiv
    //div1
        
    div1.addEventListener('click',function(){
            console.log(" Div1");
        },true)
        mainDiv.addEventListener('click',function(){
            console.log(" mainDiv ");
        },true)

        document.body.addEventListener('click',function(){
            console.log(' body');
            
        },true)