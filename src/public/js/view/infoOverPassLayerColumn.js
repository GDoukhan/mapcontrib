
import Wreqr from 'backbone.wreqr';
import Marionette from 'backbone.marionette';
import template from '../../templates/infoOverPassLayerColumn.ejs';
import LeafletHelper from '../helper/leaflet';


export default Marionette.LayoutView.extend({
    template: template,

    behaviors: {
        'l20n': {},
        'column': {
            'appendToBody': true,
        },
    },

    ui: {
        'description': '.description_container',
        'downloadBtn': '.download_btn',
        'column': '#info_overpass_layer_column',
    },

    events: {
        'click @ui.downloadBtn': 'onClickDownload',
    },

    initialize: function (options) {
        this._radio = Wreqr.radio.channel('global');
    },

    onBeforeOpen: function () {
        this._radio.vent.trigger('column:closeAll');
        this._radio.vent.trigger('widget:closeAll');
    },

    open: function () {
        this.triggerMethod('open');
    },

    close: function () {
        this.triggerMethod('close');
    },

    onRender: function () {
        if ( this.model.get('description') ) {
            this.ui.description.removeClass('hide');
        }
    },

    onClickDownload: function (e) {
        e.preventDefault();

        const markerCluster = this._radio.reqres.request('map:markerCluster', this.model);
        const layerName = this.model.get('name') || document.l10n.getSync('mapcontrib');
        const fileName = `${layerName}.geojson`;

        LeafletHelper.downloadGeoJsonFromLayer(markerCluster, fileName);
    },
});
