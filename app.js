angular.module("app", [])

.controller("appCtrl", function($scope){
  $scope.color = "#FABADA";
  $scope.reverseNombre = function(){
    $scope.nombre = $scope.nombre.split("").reverse().join("");
  }
})

.directive("user", function()
{
  return{
    restrict: "E",
    template: "<div><p>Nombre: {{nombre}}<br> Edad: {{edad}}</p></div>",
    link: function(scope, element, attrs)
    {
      scope.nombre = "Juan";
      scope.edad = "20";
    }
  }
})

.directive("template", function() {
  return {
    restrict: "A",
    scope: {
      nombre: "@",
      color: "=",
      reverse: "& "
    },
    template: "<div class='well' ng-click='reverse()'>{{ nombre }}</div>",
    link: function(scope, element, attrs){

    }
  }
})
