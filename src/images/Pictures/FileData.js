/*How to import New images: 
- put an image in the images/Pictures folder
- copy "{"path":require("./FILENAME.jpg"),"year":"YEAR"}"
- Replace FILENAME with the name of the image
- replace YEAR with the year the image came from (so if the photo was taken in 1995, replace YEAR with "1995")
*/
export const data = {
    "Wittehuis_Rotterdam":[
    {"path":require("./WTH_4100_1899.jpg"),"year":"1899"},
    {"path":require("./WTH_4029.jpg"),"year":"1912"},
    {"path":require("./WTH_4100_1940.jpg"),"year":"1940"}
],"Maps":[
    {"path":require("./1903.jpg"),"year":"1903"},
    {"path":require("./1920.jpg"),"year":"1920"},
    {"path":require("./1936.jpg"),"year":"1936"}
],"Dispenser":[
    {"path":require("./GRNdispenser.png"),"year":"you"},
    {"path":require("./Bludispenser.png"),"year":"Me"},
    {"path":require("./dispenser.png"),"year":"them"}
]
}