import { series } from './data.js';
var seriesTable = document.getElementById("series");
mostrarSeries(series);
function mostrarSeries(series) {
    var tbodySeries = document.createElement("tbody");
    var totalTemp = 0;
    for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
        var serie = series_1[_i];
        var trFila = document.createElement("tr");
        trFila.innerHTML = "<td>".concat(serie.id, "</td>\n                            <td>").concat(serie.nombre, "</td>\n                            <td>").concat(serie.plataforma, "</td>\n                            <td>").concat(serie.temporadas, "</td>");
        tbodySeries.appendChild(trFila);
        totalTemp += serie.temporadas;
    }
    var promedioTemp = totalTemp / series.length;
    var filaPromedio = document.createElement("tr");
    filaPromedio.innerHTML = "<td>-</td>\n                            <td><b>Promedio Temporadas:</b></td>\n                            <td>".concat(promedioTemp, "</td>\n                            <td>-</td>");
    tbodySeries.appendChild(filaPromedio);
    seriesTable.appendChild(tbodySeries);
}
