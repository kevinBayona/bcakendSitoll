"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_DEPARTAMENTO_RUTA = void 0;
exports.SQL_DEPARTAMENTO_RUTA = {
    DATOS_DEPARTAMENTO_RUTA: "SELECT dr.cod_departamento_ruta, dr.cod_departamento, dr.cod_ruta,\
    d.nombre_departamento, r.nombre_ruta, dr.fecha_creacion_departamento_ruta \
     FROM departamentos_rutas dr \
     INNER JOIN departamentos d ON dr.cod_departamento = d.cod_departamento \
     INNER JOIN rutas r ON dr.cod_ruta = r.cod_ruta ORDER BY dr.cod_departamento_ruta ",
};
