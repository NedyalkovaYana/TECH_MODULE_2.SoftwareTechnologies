function setObject(args){
    let object = {};
    for (let i = 0; i < args.length; i++){
        let tokens = args[i].split(' -> ');
        let key = tokens[0];
        let value = tokens[1];
        if (key === 'grade'){
            object[key] = Math.round(parseInt(value));
        }
        else if (key === 'age') {
            object[key] = Math.round(parseInt(value));
        }
        else {
            object[key] = value;
        }
    }
     console.log(JSON.stringify(object));
}
setObject(['name -> Angel',
          'surname -> Georgiev',
          'age -> 20',
          'grade -> 6.00',
          'date -> 23/05/1995',
          'town -> Sofia']);






