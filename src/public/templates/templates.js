this["JST"] = this["JST"] || {};

this["JST"]["main.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '\n<header id="title">\n\t<h1>Titre de la carte</h1>\n</header>\n\n\n<div id="main_map"></div>\n\n\n<section id="control_toolbar" class="toolbar">\n\t<button type="button" class="btn toolbar_btn zoom_in_btn" title="Vue rapprochée" data-toggle="tooltip" data-placement="right">\n\t\t<i class="fa fa-fw fa-plus"></i>\n\t</button>\n\n\t<button type="button" class="btn toolbar_btn zoom_out_btn append-xs-tiny" title="Vue éloignée" data-toggle="tooltip" data-placement="right">\n\t\t<i class="fa fa-fw fa-minus"></i>\n\t</button>\n\n\t<button type="button" class="btn toolbar_btn locate_btn append-xs-tiny" title="Afficher mon emplacement" data-toggle="tooltip" data-placement="right">\n\t\t<i class="fa fa-fw fa-location-arrow"></i>\n\t</button>\n\n\t<button type="button" class="btn toolbar_btn poi_btn" title="Centres d\'intérêt" data-toggle="tooltip" data-placement="right">\n\t\t<i class="fa fa-fw fa-map-marker"></i>\n\t</button>\n\n\t<button type="button" class="btn toolbar_btn tile_btn" title="Fonds de carte" data-toggle="tooltip" data-placement="right">\n\t\t<i class="fa fa-fw fa-th-large"></i>\n\t</button>\n</section>\n\n\n<section id="help_toolbar" class="toolbar">\n\t<button type="button" class="btn toolbar_btn help_btn" title="Aide" data-toggle="tooltip" data-placement="right">\n\t\t<i class="fa fa-fw fa-question-circle"></i>\n\t</button>\n</section>\n\n\n<section id="user_toolbar" class="toolbar">\n\t<button type="button" class="btn toolbar_btn user_btn" title="Se connecter" data-toggle="tooltip" data-placement="left">\n\t\t<i class="fa fa-fw fa-user"></i>\n\t</button>\n\n\t<button type="button" class="btn toolbar_btn share_btn" title="Partager" data-toggle="tooltip" data-placement="left">\n\t\t<i class="fa fa-fw fa-share-alt"></i>\n\t</button>\n\n\t<button type="button" class="btn toolbar_btn contrib_btn" title="Ajouter un point d\'intérêt manquant" data-toggle="tooltip" data-placement="left">\n\t\t<i class="fa fa-fw fa-thumb-tack"></i>\n\t</button>\n\n\t<button type="button" class="btn toolbar_btn edit_btn" title="Modifier la carte" data-toggle="tooltip" data-placement="left">\n\t\t<i class="fa fa-fw fa-pencil"></i>\n\t</button>\n</section>\n\n\n<section id="edit_toolbar" class="toolbar">\n\t<button type="button" class="btn toolbar_btn settings_btn" title="Configuration de la carte" data-toggle="tooltip" data-placement="left">\n\t\t<i class="fa fa-fw fa-cog"></i>\n\t</button>\n\n\t<button type="button" class="btn toolbar_btn poi_btn" title="Modifier les centres d\'intérêt" data-toggle="tooltip" data-placement="left">\n\t\t<i class="fa fa-fw fa-map-marker"></i>\n\t</button>\n\n\t<button type="button" class="btn toolbar_btn tile_btn" title="Modifier les fonds de carte" data-toggle="tooltip" data-placement="left">\n\t\t<i class="fa fa-fw fa-th-large"></i>\n\t</button>\n</section>\n\n\n<section id="user_column" class="column">\n\t<header>\n\t\t<button type="button" class="btn toolbar_btn btn-link pull-right close_btn">\n\t\t\t<i class="fa fa-close"></i>\n\t\t</button>\n\n\t\t<h2>Connexion</h2>\n\t</header>\n\n\t<div class="container-fluid">\n\t\t<div class="row">\n\t\t\t<div class="col-xs-12 content">\n\t\t\t\t<form>\n\t\t\t\t\t<div class="form-group">\n\t\t\t\t\t\t<input type="text" placeholder="Adresse e-mail ou nom d\'utilisateur" class="form-control">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="form-group">\n\t\t\t\t\t\t<input type="password" class="form-control">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="form-group">\n\t\t\t\t\t\t<button type="submit" class="btn">Se connecter</button>\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n\n<section id="edit_column" class="column">\n\t<header>\n\t\t<button type="button" class="btn toolbar_btn btn-link pull-right close_btn">\n\t\t\t<i class="fa fa-close"></i>\n\t\t</button>\n\n\t\t<h2>Modifier la carte</h2>\n\t</header>\n\n\t<div class="container-fluid">\n\t\t<div class="row">\n\t\t\t<div class="col-xs-12 content">\n\t\t\t\t<nav class="nav nav-pills nav-stacked">\n\t\t\t\t\t<li role="navigation">\n\t\t\t\t\t\t<a href="#">\n\t\t\t\t\t\t\t<i class="fa fa-fw fa-map-marker"></i> Ajouter des points d\'intérêt\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t</nav>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n\n\n<section id="rg_tip_of_the_day"></section>\n';

}
return __p
};

this["JST"]["tipOfTheDay.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '\n<section id="tip_of_the_day" class="open">\n\t<div class="container-fluid">\n\t\t<div class="row">\n\t\t\t<div class="col-xs-12">\n\t\t\t\t<h3>Le saviez-vous ?</h3>\n\t\t\t\t<p>\n\t\t\t\t\tIl est possible de modifier cette carte est d\'en enregistrer une copie dans votre profil !\n\t\t\t\t</p>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="row prepend-xs-tiny append-xs-tiny">\n\t\t\t<div class="col-xs-12">\n\t\t\t\t<button type="button"class="btn ok_btn">Oui, je le savais déjà</button>\n\t\t\t\t<button type="button"class="btn close_btn pull-right">Fermer</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n';

}
return __p
};