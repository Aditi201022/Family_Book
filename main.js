var images = ["","Aditi_smiling.jpg", "Picture 044.jpg", "Picture 060.jpg", "DSC_3010.JPG", "DSC_3088.JPG"];
var names = ["Family Book", "Aditi Srinivas", "Rashmi MK", "Srinivasa Ragavachar", "Pushpavalli", "Raghavachar"];
var i = 0;
function update1(){
    i++;
    var number_of_family_member_in_array = 5
    if (i > number_of_family_member_in_array) {
        i = 0;
    }
    var updatedImage = images[i];
    var updatedName = names[i];
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
