// var peliculas = require('../../../../controllers/peliculas');
// let chaiHttp = require('chai-http');
// let chai = require('chai');
// var expect = chai.expect;
// var should = chai.should();
// var express = require('express');
// let server = require('../../../../server');
// var app = express();
// chai.use(chaiHttp);

const controller = require('../../../../controllers/personajes');
const Personaje = require('../../../../models/Personaje');
let server = require('../../../../server');
let chai = require('chai');
let sinon = require('sinon');
const expect = chai.expect;
let chaiHttp = require('chai-http');
chai.use(chaiHttp);
const should = chai.should();


describe('controllers.personajes', function() {
    it('exists', function() {
        expect(controller).to.exist;
    });
    describe('/GET personajes', () => {
        it('debería enviar todas los personajes', (done) => {
            var personaje1 = {
                nombre: 'test1',
                descripcion: 'test1',
                franquicia: 'test1',
                aspecto: 123
            };
            var personaje2 = {
                nombre: 'test2',
                descripcion: 'test2',
                franquicia: 'test2',
                aspecto: 1234
            };
            var expectedPersonajes = [personaje1, personaje2];
            sinon.mock(Personaje)
            .expects('find')
            .yields('', expectedPersonajes);
            chai.request(server)
            .get('/personajes')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.an('object');
                expect(res.body).to.eql({
                    expectedPersonajes,
                });
                done();
            });
        })
    })
});

// describe('/GET prueba_tonta', () => {
//     it('debería responder con un nombre de objeto', (done) => {
//         chai.request(server)
//         .get('/prueba_tonta')
//         .end((err, res) => {
//                 res.should.have.status(200);
//                 res.body.should.be.an('object');
//             done();
//         });
//     })
// });