
import _ from 'underscore';
import Backbone from 'backbone';
import BackboneRelational from 'backbone-relational';
import CONST from '../const';
import { uuid } from '../core/utils';


export default Backbone.RelationalModel.extend({
    defaults: {
        'uniqid': undefined,
        'type': CONST.layerType.overpass,
        'name': undefined,
        'description': undefined,
        'visible': true,
        'dataEditable': true,
        'minZoom': 14,
        'popupContent': undefined,
        'order': undefined,

        // Point based layer specific
        'markerShape': 'marker1',
        'markerColor': 'orange',
        'markerIconType': CONST.map.markerIconType.library,
        'markerIcon': undefined,
        'markerIconUrl': undefined,

        // Shape files based layer specific
        'color': 'turquoise',
        'fileUri': undefined,

        // Overpass type specific
        'overpassRequest': undefined,
        'cache': false,
        'cacheUpdateSuccess': undefined,
        'cacheUpdateTimestamp': undefined,
        'cacheUpdateError': undefined,
    },

    initialize: function () {
        if (!this.get('uniqid')) {
            this.set('uniqid', uuid());
        }
    },

    /**
     * Tells if the layer is visible.
     *
     * @author Guillaume AMAT
     * @return boolean
     */
     isVisible: function () {
        return this.get('visible');
     }
});
