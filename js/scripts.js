'use strict';
var app = angular.module('sobApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'pascalprecht.translate'
  ]);
app.config([
  '$routeProvider',
  function ($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    }).when('/organizations/', { templateUrl: 'views/organizations.html' }).when('/organizations/:id', {
      templateUrl: 'views/organization.html',
      controller: 'OrgCtrl'
    }).when('/charts', { templateUrl: 'views/charts.html' }).when('/dictionary', { templateUrl: 'views/dictionary.html' }).otherwise({ redirectTo: '/' });
  }
]);
app.config([
  '$translateProvider',
  function ($translateProvider) {
    $translateProvider.translations('en', {
      WELCOME: 'Welcome to ',
      INFO_CAMPITO: 'Campito is a new building in the historic center, just four minutes walk from the beach. With a modern and functional design, we offer our customers a good location.',
      STANDARD_ROOM: 'Standard room',
      COMFORT_ROOM: 'Comfort room',
      QUADRUPLE_ROOM: 'Quadruple room',
      SINGLE_ROOM: 'Single room',
      SUPERIOR_ROOM: 'Superior room',
      TRIPLE_ROOM: 'Triple room',
      NIGHT: 'night',
      BOOK: 'Book',
      ADDITIONAL_SERVICES: 'Additional services',
      RESTAURANT: 'Restaurant',
      PARKING: 'Parking',
      RESTAURANT_INFO: 'The Campito Restaurant is located on the ground floor of the establishment, has indoor and outdoor terrace tables, all products are cooked in a coal oven Josper.',
      PARKING_INFO: 'Hostal Campito has parking spaces 3 minutes walk from the accommodation price is 10 € per day, booking must first request.',
      SERVICE_HOURS: 'Service hours',
      SERVICE_CHARGE: 'Service charge',
      INFO_ATLANTICO: 'A unique space near the fishing port and the pine forests of Roche. The ideal to know the area in family. Each space is independent and ensures relaxation and privacy. The style of the houses evokes the old Andalusian farmhouses, with tiled roofs gabled houses on one level with high ceilings and a porch that connects home and garden. ',
      RURAL_HOUSING_6: 'Rural housing 6 people',
      RURAL_HOUSING_2: 'Rural housing 2 people',
      RURAL_HOUSING_4: 'Rural housing 4 people',
      RURAL_HOUSING_8: 'Rural housing 8 people',
      PHONE: 'Phone',
      EMAIL: 'Email'
    });
    $translateProvider.translations('es', {
      WELCOME: 'Bienvenidos a ',
      INFO_CAMPITO: 'Campito es un edificio de nueva construcción en el centro histórico, a sólo cuatro minutos a pie de la playa. Con un diseño moderno y funcional, ofrecemos a nuestros clientes una buena localización.',
      STANDARD_ROOM: 'Habitación standar',
      COMFORT_ROOM: 'Habitación confort',
      QUADRUPLE_ROOM: 'Habitación cuádruple',
      SINGLE_ROOM: 'Habitación individual',
      SUPERIOR_ROOM: 'Habitación superior',
      TRIPLE_ROOM: 'Habitación triple',
      NIGHT: 'noche',
      BOOK: 'Reservar',
      ADDITIONAL_SERVICES: 'Servicios adicionales',
      RESTAURANT: 'Restaurante',
      PARKING: 'Parking',
      RESTAURANT_INFO: 'El Restaurante Campito se localiza en la planta baja del establecimiento, tiene mesas interiores y exteriores en terraza, todos los productos se cocinan en un horno Josper de carbón.',
      PARKING_INFO: 'El Hostal Campito dispone de plazas de garaje a 3 minutos andando del establecimiento, el precio es de 10€ al dia, para reservar hay que solicitarlo previamente.',
      SERVICE_HOURS: 'Horario de servicio',
      SERVICE_CHARGE: 'Recargo de servicio',
      INFO_ATLANTICO: 'Un espacio singular cerca del puerto pesquero y de los pinares de Roche. El lugar idóneo para conocer la zona en familia. Cada espacio es independiente y garantiza su relajación y privacidad. El estilo de las viviendas evoca a los cortijos antiguos andaluces, con techos de tejas a dos aguas, casas de una sola planta con techos altos y un porche que enlaza casa y jardín.',
      RURAL_HOUSING_6: 'Vivienda rural 6 personas',
      RURAL_HOUSING_2: 'Vivienda rural 2 personas',
      RURAL_HOUSING_4: 'Vivienda rural 4 personas',
      RURAL_HOUSING_8: 'Vivienda rural 8 personas',
      PHONE: 'Teléfono',
      EMAIL: 'Correo electrónico'
      });
    $translateProvider.preferredLanguage('en');
  }
]);
'use strict';
angular.module('sobApp').controller('MainCtrl', [
  '$scope',
  '$translate',
  function ($scope, $translate) {
    $scope.changeLanguage = function (key) {
      $translate.use(key);
    };
  }
]);
'use strict';
angular.module('sobApp').controller('OrgCtrl', [
  '$scope',
  '$routeParams',
  function ($scope, $routeParams) {
    $scope.id = $routeParams.id;
  }
]);