const {safe} = require('../src/app');
const assert = require('chai').assert;


describe('Probar contraseña', function () {
    it('Contraseña correcta', function () {
        assert.equal(safe(5896), 'Código correcto');
    });
    it('Contraseña incorrecta', function () {
        assert.equal(safe(5899), 'Código incorrecto');
    });
    it('Contraseña invalida tipo', function () {
        assert.equal(safe("5896"), 'Código invalido');
    });
    it('Contraseña invalida longitud', function () {
        assert.equal(safe(989), 'Código invalido');
    });
    it('Contraseña invalida longitud 2', function () {
        assert.equal(safe(10000), 'Código invalido');
    });
});