(
  function(){
    'use strict';
    angular.module('LunchCheck',[])
           .controller('LunchCheckController',CheckLunchIntems);
    CheckLunchIntems.$inject=['$scope'];
    function CheckLunchIntems($scope){
      $scope.name="";
      $scope.displayText = "";
      $scope.LunchItem="";
      $scope.myStyle={};
      $scope.textboxStyle={};
      function formatInputValues(stringVal){
        var inputString = stringVal.split(',');
        var LunchItemVal="";
        for(var i=0; i<inputString.length;i++){
          //console.log(inputString[i] && inputString[i].trim().length )
           if(inputString[i] && inputString[i].trim().length){
             LunchItemVal=LunchItemVal+" "+inputString[i];
             if(i<inputString.length-1){
               LunchItemVal+=',';
             }
           }
        }
        return LunchItemVal;
      }

      $scope.displayMessage = function(){
        $scope.LunchItem= formatInputValues($scope.name);
        var numberOfItems=getNumberOfItems($scope.LunchItem);
        if (numberOfItems==0){
          $scope.displayText = "Please enter data";
          $scope.myStyle={"color" : "red"};
          $scope.textboxStyle={"border-color" : "red"};
        }else if(numberOfItems<=3 && numberOfItems>0){
          $scope.displayText="Enjoy";
          $scope.myStyle={"color" : "green"};
          $scope.textboxStyle={"border-color" : "green"};
        }else{
            $scope.displayText = "Too Much!";
              $scope.myStyle={"color" : "green"};
              $scope.textboxStyle={"border-color" : "green"};
        }
      };

      function getNumberOfItems(stringVal){
        var itemHolder = stringVal.split(','),
        totalItem=0;
        if(itemHolder.length==1 && itemHolder[0]==""){
          totalItem=0;
        }else{
          totalItem=itemHolder.length;
        }

        return totalItem;
      }
    }
  })();
