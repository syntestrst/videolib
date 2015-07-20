/**
 * Created by test on 24/04/2015.
 */
angular.module('ytbe.directives',[]).directive('drragnddrop',function(){

    return {
        restrict: 'A',
        scope: {
            dragOptions: '=drragnddrop',

        },
        /*
        Directives that want to modify the DOM typically use the link option.
        link takes a function with the following signature, function link(scope, element, attrs) { ... } where:
        scope is an Angular scope object.
        element is the jqLite-wrapped element that this directive matches.
        attrs is a hash object with key-value pairs of normalized attribute names and their corresponding attribute values.*/

        link: function(scope, elem, attr) {
           /* $(elem).draggable(scope.dragOptions)*/

           /*--------------------- JQEURY --------------------------*/
            $(elem).draggable({revert: true})
        }
    }


})