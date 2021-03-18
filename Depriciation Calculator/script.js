var app = angular.module("myApp", []);

app.controller("myController", function($scope) {
    $scope.value;
    $scope.scrap;
    $scope.useLife;
    $scope.workLife;
    $scope.newValues = [{

    }];

    $scope.submit = function() {
        let count = 0;
        let depPrecent = 0;
        let currentVal = $scope.value;
        console.log("working");
        if ($scope.useLife < 0) {
            console.log("Invalid Number");
            return 0;
        } else {
            depPrecent = 1 - Math.pow(($scope.scrap / $scope.value), 1 / $scope.useLife);
            console.log("working2");
            while (count < $scope.workLife) {
                currentVal = currentVal - (currentVal * depPrecent);
                console.log("Value for year " + (count + 1) + " = " + currentVal.toFixed(2));

                if (currentVal < $scope.scrap) {
                    break;
                }

                $scope.newValues.push({ "year": (count + 1), "value": currentVal.toFixed(2) });

                count++;
            }
        }
    }
});