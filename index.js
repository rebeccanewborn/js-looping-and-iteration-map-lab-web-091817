// Code your solution in this file.

function lowerCaseDrivers(drivers) {
  console.log(drivers);
  return drivers.map(function(elt) {
    return elt.toLowerCase();
  });
}

function nameToAttributes(drivers) {
  function objectify(string) {
    const arr = string.split(" ");
    return { firstName: arr[0], lastName: arr[1] };
  }

  return drivers.map(objectify);
}

function attributesToPhrase(drivers) {
  function phrasify(obj) {
    const str = `${obj.name} is from ${obj.hometown}`;
    return str;
  }
  return drivers.map(phrasify);
}
