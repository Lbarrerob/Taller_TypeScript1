import { Serie } from "./serie.js";
import { series } from './data.js';

let seriesTable: HTMLElement = document.getElementById("series")!;
mostrarSeries(series);

function mostrarSeries(series : Serie[]): void {
    let tbodySeries = document.createElement("tbody");
    let totalTemp = 0;

    for (let serie of series){
        let trFila: HTMLElement = document.createElement("tr");

        trFila.innerHTML = `<td>${serie.id}</td>
                            <td>${serie.nombre}</td>
                            <td>${serie.plataforma}</td>
                            <td>${serie.temporadas}</td>`;
                tbodySeries.appendChild(trFila);
        
        totalTemp += serie.temporadas;
    }

    let promedioTemp = totalTemp/series.length;
    let filaPromedio : HTMLElement = document.createElement("tr");
    filaPromedio.innerHTML = `<td>-</td>
                            <td>Promedio Temporadas:</td>
                            <td>${promedioTemp}</td>`;
    
    tbodySeries.appendChild(filaPromedio);
    seriesTable.appendChild(tbodySeries);

}