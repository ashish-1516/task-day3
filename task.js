var json = {
    one: [11, 12, 13, 14, 15],
    two: [21, 22, 23],
    three: [31, 32]
};

for (var key in json.jsonData) {
    for (var key1 in json.jsonData[key]) {
        console.log(json.jsonData[key][key1])
    }
}



var json = [{
    "id": "1",
    "msg" : "hello",
},
{
    "id" : "2",
    "msg" : "Hii",
}];

for(var i=0; i< json.length; i++) {
    var obj = json[i];

    console.log(obj.id)
    console.log(obj.msg)
}



var json = [{
    "id" : "1", 
    "msg"   : "hi Pratik",
},
{
    "id" : "2", 
    "msg"   : "How are you",
}];

json.forEach((item) => {
    console.log('ID: ' + item.id);
    console.log('MSG: ' + item.msg);
  });





var json = {
    one: [11, 12, 13, 14, 15],
    two: [21, 22, 23],
    three: [31, 32]
 };

 for(var key in json.jsonData) {
    for (var key1 in json.jsonData[key]) {
        console.log(json.jsonData[key][key1])
    }
 }