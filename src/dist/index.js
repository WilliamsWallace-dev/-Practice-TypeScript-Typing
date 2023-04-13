"use strict";
const planets = [];
function addPlanet(name, coordinates, situation) {
    planets.push({
        name,
        coordinates,
        situation,
        satellites: []
    });
    alert(`O seguinte planeta ${name} foi adicionado`);
}
function findPlanet(name) {
    let planet = planets.find(planet => planet.name === name);
    return planet !== null && planet !== void 0 ? planet : false;
}
function updateSituation(planet, situation) {
    planet.situation = situation;
    alert(`A situação do planeta ${planet.name} foi alterada para ${situation}`);
}
function addSatellite(planet, satellite) {
    planet.satellites.push(satellite);
    alert(`O salélite ${satellite} foi adicionado como satélite do planeta ${planet.name}`);
}
function removeSatellite(planet, satelliteToRemove) {
    planet.satellites = planet.satellites.filter((satellite) => satellite !== satelliteToRemove);
    alert(`O satélite ${satelliteToRemove} foi removido como satélite do planeta ${planet.name}`);
}
function ValidSituation() {
    let situation = "Habitado";
    let verify = false;
    while (!verify) {
        const situationInput = prompt('Informe a situação do planeta?\n1 - Habitado\n2 - Habitável\n3 - Inabitável\n4 - Inexplorável');
        switch (situationInput) {
            case "Habitado":
                situation = "Habitado";
                verify = true;
                break;
            case "Habitável":
                situation = "Habitável";
                verify = true;
                break;
            case "Inabitável":
                situation = "Inabitável";
                verify = true;
                break;
            case "Inexplorável":
                situation = "Inexplorável";
                verify = true;
                break;
            default:
                alert(`Valor de situação inválido. Insitira : "Habitado", "Habitável", "Inabitável" ou "Inexplorável"`);
                break;
        }
    }
    return situation;
}
function ValidNamePlanet(callback) {
    let namePlanet = prompt("Insira o nome do Planeta :");
    let planet = findPlanet(namePlanet);
    if (planet)
        callback(planet);
    else
        alert("Planeta não encontrado!");
}
function FirstOption() {
    let name = String(prompt("Informe o nome do planeta :"));
    let coordenateA = Number(prompt("Informe a primeira coordenada :"));
    let coordenateB = Number(prompt("Informe a segunda coordenada :"));
    let coordenateC = Number(prompt("Informe a terceira coordenada :"));
    let coordenateD = Number(prompt("Informe a quarta coordenada :"));
    let situation = ValidSituation();
    addPlanet(name, [coordenateA, coordenateB, coordenateC, coordenateD], situation);
}
function SecondOption() {
    ValidNamePlanet((planet) => {
        let situation = ValidSituation();
        updateSituation(planet, situation);
    });
}
function ThirdOption() {
    ValidNamePlanet((planet) => {
        let satellite = String(prompt("Informe o Satelite a ser adicionado : "));
        addSatellite(planet, satellite);
    });
}
function FourthOption() {
    ValidNamePlanet((planet) => {
        let satellite = String(prompt("Informe o Satelite a ser adicionado : "));
        removeSatellite(planet, satellite);
    });
}
function FifthOption() {
    let list = '';
    planets.forEach((planet) => {
        list += `Nome do Planeta : ${planet.name}\n`;
        list += `Coordenadas : [ ${planet.coordinates[0]},${planet.coordinates[1]},${planet.coordinates[2]},${planet.coordinates[3]} ]\n`;
        list += `Situação : ${planet.situation}\n`;
        list += `Satélites\n`;
        planet.satellites.forEach((satellite, i) => {
            list += `${i + 1} - ${satellite}\n`;
        });
        list += "-----------------\n";
    });
    alert(list);
}
let validOption = 1;
while (validOption !== 0) {
    validOption = Number(prompt("Menu de Opções :\n1 - Adicionar Planeta\n2 - Atualizar situação de um Planeta\n3 - Adicionar Satélite\n4 - Remover Satélite\n5 - Listar Planetas\n 0 - Encerrar Programa"));
    switch (validOption) {
        case 0:
            alert("Encerrando programa...");
            setTimeout(() => {
            }, 1000);
            break;
        case 1:
            FirstOption();
            break;
        case 2:
            SecondOption();
            break;
        case 3:
            ThirdOption();
            break;
        case 4:
            FourthOption();
            break;
        case 5:
            FifthOption();
            break;
        default:
            alert("Opção Inválida! Insira uma das opções informadas.");
    }
}
