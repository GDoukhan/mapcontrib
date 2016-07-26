
import Marionette from 'backbone.marionette';
import listItemTemplate from './listItem.ejs';


export default Marionette.ItemView.extend({
    template: listItemTemplate,

    ui: {
        'key': '.key',
        'value': '.value',
        'infoBtn': '.info_btn',
        'nonOsmWarning': '.non_osm_warning',
        'removeBtn': '.remove_btn',
    },

    events: {
        'blur @ui.key': 'updateKey',
        'blur @ui.value': 'updateValue',
        'keyup @ui.key': 'updateKey',
        'keyup @ui.value': 'updateValue',
        'click @ui.removeBtn': 'onClickRemoveBtn',
    },

    initialize: function () {
        this.listenTo(this.model.collection, 'sync', this.onCollectionUpdate);
        this.listenTo(this.model.collection, 'reset', this.onCollectionUpdate);
        this.listenTo(this.model.collection, 'update', this.onCollectionUpdate);
    },

    templateHelpers: function () {
        return {
            'cid': this.model.cid
        };
    },

    onRender: function () {
        document.l10n.localizeNode( this.el );

        if (this.model.get('keyReadOnly')) {
            this.ui.key.prop('disabled', 'disabled');
        }

        if (this.model.get('valueReadOnly')) {
            this.ui.value.prop('disabled', 'disabled');
        }

        if (this.model.get('keyReadOnly') || this.model.get('valueReadOnly')) {
            this.ui.removeBtn.prop('disabled', true);
        }

        if (this.model.get('nonOsmData')) {
            this.ui.nonOsmWarning.removeClass('hide');
        }

        this.renderTagInfo();

        this.onCollectionUpdate();
    },

    renderTagInfo: function () {
        const key = this.ui.key.val().trim();
        const taginfoServiceHost = MAPCONTRIB.config.taginfoServiceHost;

        this.ui.infoBtn.attr('href', `${taginfoServiceHost}/keys/${key}`);
    },

    updateKey: function (e) {
        const key = this.ui.key.val().trim();

        this.model.set( 'key', key );

        this.renderTagInfo();
    },

    updateValue: function (e) {
        this.model.set(
            'value',
            this.ui.value.val().trim()
        );
    },

    onClickRemoveBtn: function (e) {
        this.model.destroy();
    },

    onCollectionUpdate: function () {
        const osmTags = this.model.collection.where({
            'nonOsmData': false
        });

        if (osmTags.length === 1) {
            this.ui.removeBtn.prop('disabled', true);
        }
        else {
            if ( !this.model.get('nonOsmData') ) {
                this.ui.removeBtn.prop('disabled', false);
            }
        }
    },
});
