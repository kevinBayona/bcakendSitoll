"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const var_imagenes_1 = __importDefault(require("../domain/var_imagenes"));
const sharp_1 = __importDefault(require("sharp"));
const deasync_1 = __importDefault(require("deasync"));
class AdministarImagen {
    static crearImagen(nombrePrivado, base64, rutaAlmacenamiento) {
        let decodificacion = base64.replace(/^data:image\/\w+;base64,/, "");
        fs_1.default.readdir(rutaAlmacenamiento, (error) => {
            if (error) {
                fs_1.default.mkdirSync(rutaAlmacenamiento, { recursive: true });
            }
            fs_1.default.writeFile(rutaAlmacenamiento + nombrePrivado, decodificacion, { encoding: "base64" }, function () { });
        });
    }
    static borrarImagen(rutaImagenBorar) {
        fs_1.default.unlink(rutaImagenBorar, function (error) {
            if (error) {
                console.log("Fallo al eliminar la imagen");
            }
        });
    }
    static cargarImagenBase64(fotoPrivada, rutaImagenPrivada, tamano) {
        let base64 = '';
        if (fs_1.default.existsSync(rutaImagenPrivada)) {
            let imagenMiniatura = var_imagenes_1.default.rutaFotoTemporal + fotoPrivada;
            AdministarImagen.crearMiniatura(rutaImagenPrivada, imagenMiniatura, tamano);
            base64 = fs_1.default.readFileSync(imagenMiniatura, 'base64');
            fs_1.default.unlinkSync(imagenMiniatura);
        }
        else {
            let rutaImagenError = var_imagenes_1.default.fotoError;
            base64 = fs_1.default.readFileSync(rutaImagenError, 'base64');
        }
        return base64;
    }
    static crearMiniatura(rutaImagenPrivada, imagenMiniatura, tamano) {
        let esperar = true;
        const dataSharp = (0, sharp_1.default)(rutaImagenPrivada).resize({ width: tamano })
            .toFile(imagenMiniatura, (miError) => {
            if (miError) {
            }
            else {
                esperar = false;
            }
        });
        while (esperar) {
            deasync_1.default.sleep(500);
        }
        return dataSharp;
    }
}
exports.default = AdministarImagen;
