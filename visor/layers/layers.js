var wms_layers = [];

var format_nicho_tierra_0 = new ol.format.GeoJSON();
var features_nicho_tierra_0 = format_nicho_tierra_0.readFeatures(json_nicho_tierra_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_nicho_tierra_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_nicho_tierra_0.addFeatures(features_nicho_tierra_0);
var lyr_nicho_tierra_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_nicho_tierra_0, 
                style: style_nicho_tierra_0,
                popuplayertitle: "nicho_tierra",
                interactive: true,
                title: '<img src="styles/legend/nicho_tierra_0.png" /> nicho_tierra'
            });
var format_mausoleo_1 = new ol.format.GeoJSON();
var features_mausoleo_1 = format_mausoleo_1.readFeatures(json_mausoleo_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mausoleo_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mausoleo_1.addFeatures(features_mausoleo_1);
var lyr_mausoleo_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_mausoleo_1, 
                style: style_mausoleo_1,
                popuplayertitle: "mausoleo",
                interactive: true,
                title: '<img src="styles/legend/mausoleo_1.png" /> mausoleo'
            });
var format_nicho_cmento_2 = new ol.format.GeoJSON();
var features_nicho_cmento_2 = format_nicho_cmento_2.readFeatures(json_nicho_cmento_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_nicho_cmento_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_nicho_cmento_2.addFeatures(features_nicho_cmento_2);
var lyr_nicho_cmento_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_nicho_cmento_2, 
                style: style_nicho_cmento_2,
                popuplayertitle: "nicho_cmento",
                interactive: true,
                title: '<img src="styles/legend/nicho_cmento_2.png" /> nicho_cmento'
            });
var format_calle_3 = new ol.format.GeoJSON();
var features_calle_3 = format_calle_3.readFeatures(json_calle_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_calle_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_calle_3.addFeatures(features_calle_3);
var lyr_calle_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_calle_3, 
                style: style_calle_3,
                popuplayertitle: "calle",
                interactive: true,
                title: '<img src="styles/legend/calle_3.png" /> calle'
            });
var format_nicho_4 = new ol.format.GeoJSON();
var features_nicho_4 = format_nicho_4.readFeatures(json_nicho_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_nicho_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_nicho_4.addFeatures(features_nicho_4);
var lyr_nicho_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_nicho_4, 
                style: style_nicho_4,
                popuplayertitle: "nicho",
                interactive: true,
                title: '<img src="styles/legend/nicho_4.png" /> nicho'
            });
var format_codigos_5 = new ol.format.GeoJSON();
var features_codigos_5 = format_codigos_5.readFeatures(json_codigos_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_codigos_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_codigos_5.addFeatures(features_codigos_5);
var lyr_codigos_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_codigos_5, 
                style: style_codigos_5,
                popuplayertitle: "codigos",
                interactive: false,
                title: '<img src="styles/legend/codigos_5.png" /> codigos'
            });
var format_vereda_6 = new ol.format.GeoJSON();
var features_vereda_6 = format_vereda_6.readFeatures(json_vereda_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_vereda_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_vereda_6.addFeatures(features_vereda_6);
var lyr_vereda_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_vereda_6, 
                style: style_vereda_6,
                popuplayertitle: "vereda",
                interactive: true,
                title: '<img src="styles/legend/vereda_6.png" /> vereda'
            });

lyr_nicho_tierra_0.setVisible(true);lyr_mausoleo_1.setVisible(true);lyr_nicho_cmento_2.setVisible(true);lyr_calle_3.setVisible(true);lyr_nicho_4.setVisible(true);lyr_codigos_5.setVisible(true);lyr_vereda_6.setVisible(true);
var layersList = [lyr_nicho_tierra_0,lyr_mausoleo_1,lyr_nicho_cmento_2,lyr_calle_3,lyr_nicho_4,lyr_codigos_5,lyr_vereda_6];
lyr_nicho_tierra_0.set('fieldAliases', {});
lyr_mausoleo_1.set('fieldAliases', {});
lyr_nicho_cmento_2.set('fieldAliases', {});
lyr_calle_3.set('fieldAliases', {});
lyr_nicho_4.set('fieldAliases', {});
lyr_codigos_5.set('fieldAliases', {'id': 'id', 'cod': 'cod', });
lyr_vereda_6.set('fieldAliases', {});
lyr_nicho_tierra_0.set('fieldImages', {});
lyr_mausoleo_1.set('fieldImages', {});
lyr_nicho_cmento_2.set('fieldImages', {});
lyr_calle_3.set('fieldImages', {});
lyr_nicho_4.set('fieldImages', {});
lyr_codigos_5.set('fieldImages', {'id': 'TextEdit', 'cod': 'TextEdit', });
lyr_vereda_6.set('fieldImages', {});
lyr_nicho_tierra_0.set('fieldLabels', {});
lyr_mausoleo_1.set('fieldLabels', {});
lyr_nicho_cmento_2.set('fieldLabels', {});
lyr_calle_3.set('fieldLabels', {});
lyr_nicho_4.set('fieldLabels', {});
lyr_codigos_5.set('fieldLabels', {'id': 'no label', 'cod': 'no label', });
lyr_vereda_6.set('fieldLabels', {});
lyr_vereda_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});