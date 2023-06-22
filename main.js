var images =
    ["https://i.postimg.cc/MKdhy06Z/family.jpg", "https://i.postimg.cc/L6HcYQM0/grand-father.png",
        "https://i.postimg.cc/wjMnFtMx/father.jpg",
        "https://i.postimg.cc/5ymDKL83/bro.jpg",
        "https://i.postimg.cc/JnL6wtrd/sister.jpg",
        "httpa://i.postimg.cc/bw5W5zSK/mother.jpg"];
var names = ["Álbum de Família", "Rodigo Silva", "Diego Silva", "Roberto Silva", "Aline Silva", "Sonia Silva"];

var i = 0;
function update() {
    i++;
    var numbersOfFamilyMemberInArray = 5
    if (i > numbersOfFamilyMemberInArray) {
        i = 0;
    }
    var updatedIMage = images[i];
    var updateName = names[i];
    document.getElementById("familyMember").src = updatedImage;
    document.getElementById("familyMemberName").innerHTML = updatedName;
}