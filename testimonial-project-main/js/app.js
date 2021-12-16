    var customers = [];
 function Customer(img, name, txt) {
     this.image = img;
     this.fullName = name;
     this.text = txt;
 }
    function createCustomer(imgNumber, name, txt) {
        img = "./img/customer-" + imgNumber + ".jpg";
        var customer = new Customer(img, name, txt);
        customers.push(customer);
    }
    
    createCustomer(0, 'John', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis neque reprehenderit laborum, corporis explicabo assumenda. Porro impedit consectetur animi, reprehenderit recusandae sapiente at aliquam reiciendis modi ipsam rerum suscipit distinctio?')
    createCustomer(1, 'Sandy', 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock')
    createCustomer(2, 'Amy', 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.')
    createCustomer(3, 'Tyrell', 'If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.')
    createCustomer(4, 'Wanda', 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.')
    
    var leftBtn = document.getElementsByClassName("prevBtn")[0];
    var rightBtn = document.getElementsByClassName("nextBtn")[0];
    var customerName = document.getElementById("customer-name");
    var customerImage = document.getElementById("customer-img");
    var customerText = document.getElementById("customer-text");
    var index = 0;
        leftBtn.addEventListener("click", function(){
            index--;
            if(index < 0){index = 4;};
            customerName.innerHTML = customers[index].fullName;
            customerImage.src = customers[index].image;
            customerText.innerHTML = customers[index].text;
        })
        rightBtn.addEventListener("click", function(){
            index++;
            if(index > 4){index = 0;};
            customerName.innerHTML = customers[index].fullName;
            customerImage.src = customers[index].image;
            customerText.innerHTML = customers[index].text;
        })