let mysql= require("mysql2")
let connection = mysql.createConnection
(
    {
        host : "localhost",
        user: "root",
        password: "12345678",
        database:"CODENOTCH"
    }
);

connection.connect(function(error)
{
    if (error)
        console.log(error);
    else 
        console.log("Conexion correcta")
});
//APELLIDOS DE LOS ESTUDIANTES SEGUN LAS ASIGNATURAS EN LAS QUE ENTRAN APUNTADOS
// let sql = "SELECT estu.apellido1,estu.apellido2,asig.titulo FROM ESTUDIANTES AS estu INNER JOIN ASIGNATURAS AS asig on estu.id_asignatura =asig.id_asignaturas"
// connection.query(sql,function(error, resultado){
//     if (error)
//         console.log(error)
//     else
//         console.log("APELLIDOS DE LOS ESTUDIANTES POR ASIGNATURA")
//         console.log(resultado)
// })

//APELLIDOS DE LOS PROFESORES Y NOMBRE DE LAS ASIGNATURAS QUE IMPARTEN
// let sql = "SELECT apellido1, apellido2,titulo FROM PROFESORES INNER JOIN  ASIGNATURAS ON (PROFESORES.id_asignatura = ASIGNATURAS.id_asignaturas)"
// connection.query(sql,function(error, resultado){
//     if (error)
//         console.log(error)
//     else
//         console.log("APELLIDOS DE LOS PROFESORES POR ASIGNATURA")
//         console.log(resultado)
// })
//RETO 3 
let sql="SELECT COUNT(id_estudiantes), titulo, apellido1, apellido2 FROM NOTAS JOIN ASIGNATURAS ON (NOTAS.id_asignatura = ASIGNATURAS.id_asignaturas) INNER JOIN ASIGNATURA_PROFESORES ON (ASIGNATURAS.id_asignaturas = ASIGNATURA_PROFESORES.id_asignatura) JOIN PROFESORES ON (ASIGNATURA_PROFESORES.id_profesor = PROFESORES.id_profesor) group by titulo;";
connection.query(sql,function(error, resultado){
    if (error)
        console.log(error)
    else
        console.log(resultado)
})
//Si escribimos lo de abajo en sql funciona despues de arreglar el error 1055 que hay que instalar un texto en la consola de sql pero aqui no funciona 
// SELECT COUNT(id_estudiante), titulo, apellido1, apellido2 FROM NOTAS JOIN ASIGNATURAS ON (NOTAS.id_asignatura = ASIGNATURAS.id_asignaturas) 
// INNER JOIN ASIGNATURA_PROFESORES ON (ASIGNATURAS.id_asignaturas = ASIGNATURA_PROFESORES.id_asignatura) 
// JOIN PROFESORES ON (ASIGNATURA_PROFESORES.id_profesor = PROFESORES.id_profesor) group by titulo;

// let connection = mysql.createConnection
// (
//     {
//         host : "localhost",
//         user: "root",
//         password: "12345678",
//         database:"MUSEO"
//     }
// );

// connection.connect(function(error)
// {
//     if (error)
//         console.log(error);
//     else 
//         console.log("Conexion correcta")
// });
// //apartado1
// let sql="select p.id_pieza, p.nombre , p.descripcion, p.id_ubicacion, fecha_fin, pro.nombre,pro.email,pro.direccion from PIEZAS as p inner join PRESTAMO as pre on (p.id_prestamo = pre.id_prestamo) inner join PROPIETARIO as pro on (p.id_propietario =pro.id_propietario)"
// connection.query(sql,function(error, resultado){
//     if (error)
//         console.log(error)
//     else
        
//         console.log(resultado)
// })
//apartado2
// let sql= "select count(id_pieza)  as 'nPieza',id_ubicacion from PIEZAS group by id_ubicacion having 5+5  order by count(id_pieza) desc"
// connection.query(sql,function(error, resultado){
//     if (error)
//         console.log(error)
//     else
//         console.log(resultado)
// })