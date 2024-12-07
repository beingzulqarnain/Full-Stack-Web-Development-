
//  to select the class 
 const box1 = document.querySelector(".box1");
 const box2 = document.querySelector(".box1");
 const items = document.getElementsByClassName("item");

// AddEventListner added

  for(let item of items){
    item.addEventListener('dragstart',(e) => {
        // console.log(e.target);
        let data = e.target;
        box2.addEventListener('dragover',(e) => {
             e.preventDefault();
             e.stopPropagation();
        })

        box2.addEventListener("drop",(e) => {
            e.preventDefault();
           box2.append(data)
           data = '';
       })
       box1.addEventListener('dragover',(e) => {
        e.preventDefault();
        e.stopPropagation();
        
    })

        box1.addEventListener("drop",(e) => {
            e.preventDefault();
            box1.append(data)
           data = '';
        })
    })
  }

