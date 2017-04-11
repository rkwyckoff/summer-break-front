
function LayoutController ($scope, $rootScope, $state, $cookies, $http, SERVER) {
  $rootScope.welcome = '';
  $rootScope.numberOfPending;

  $scope.signOut = () => {
    $rootScope.loggedIn = false;
    $cookies.remove('access-token');
    $cookies.remove('userInfo');
    $http.defaults.headers.common['access-token'] = null;


    $state.go('transparent.home');
  };

  $scope.featured = [];
  $http.get(`${SERVER}/activities/all/feature`).then(resp => {
    console.log(resp.data);
    $scope.featured = resp.data;
  })

  $scope.allEventsStat = [];
  $http.get(`${SERVER}/activities`).then(resp => {
    console.log(resp.data.length);
    $scope.allEventsStat = resp.data.length;
  })

  $scope.allUsersStat = [];
  $http.get(`${SERVER}/users`).then(resp => {
    console.log(resp.data.length);
    $scope.allUsersStat = resp.data.length;
  })

  $scope.allRsvpStat = [];
  $http.get(`${SERVER}/rsvps`).then(resp => {
    console.log(resp.data.length);
    $scope.allRsvpStat = resp.data.length;
  })

}

LayoutController.$inject = ['$scope', '$rootScope', '$state', '$cookies', '$http', 'SERVER'];

export default LayoutController;
