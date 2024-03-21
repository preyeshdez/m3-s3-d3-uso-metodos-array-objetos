let array = [
    {nombre: "juan", hora: "12:00"},
    {nombre: "diego", hora: "09:30"},
    {nombre: "pablo", hora: "11:30"},
    {nombre: "roberto", hora: "10:00"}
];

array.sort((a, b) => a.hora.localeCompare(b.hora));

console.log(array);