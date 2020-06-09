import '../../components/dropdown/dropdown.js';

import 'jquery.maskedinput/src/jquery.maskedinput';

$(document).ready(function(){
    $('input[name=dateField]').mask("99.99.9999");

});