function addAddressField() {

        //create Date object
        var date = new Date();

        //get number of milliseconds since midnight Jan 1, 1970 and use it for id
        var mSec = date.getTime(); 

        // Replace 0 with milliseconds
        idAttributKind =  "person_addresses_attributes_0_kind".replace("0", mSec);
        nameAttributKind =  "person[addresses_attributes][0][kind]".replace("0", mSec);

        idAttributStreet =  "person_addresses_attributes_0_street".replace("0", mSec);
        nameAttributStreet =  "person[addresses_attributes][0][street]".replace("0", mSec);
       
        // <li> tag
        var li = document.createElement("li");

        //label for Kind
        var labelKind = document.createElement("label");
        labelKind.setAttribute("for", idAttributKind);
        var kindLabelText = document.createTextNode("Kind");
        labelKind.appendChild(kindLabelText);
        li.appendChild(labelKind);

        //input for Kind
        var inputKind = document.createElement("INPUT");
        inputKind.setAttribute("type", "text");
        inputKind.setAttribute("id", idAttributKind);
        inputKind.setAttribute("name", nameAttributKind);
        li.appendChild(inputKind);

        //label for Street
        var labelStreet = document.createElement("label");
        labelStreet.setAttribute("for", idAttributStreet);
        var streetLabelText = document.createTextNode("Street");
        labelStreet.appendChild(streetLabelText);
        li.appendChild(labelStreet);

        //input for Street
        var inputStreet = document.createElement("INPUT");
        inputStreet.setAttribute("type", "text");
        inputStreet.setAttribute("id", idAttributStreet);
        inputStreet.setAttribute("name", nameAttributStreet);
        li.appendChild(inputStreet);

        //add created elements to myList
        document.getElementById("myList").appendChild(li);

        //show address header
        $("#addressHeader").show(); 
}