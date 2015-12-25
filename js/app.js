var dpicalApp = angular.module('dpicalApp', []);
dpicalApp.service("dpiServices", [function($http, $q, $rootScope) {
    return {
        commonSizes: [
            {
                type: 'manual',
                title: 'Manual Input',
                x: 0,
                y: 0
            },
            {
                type: 'a6',
                title: 'DIN A6',
                x: 105,
                y: 148
            },
            {
                type: 'a5',
                title: 'DIN A5',
                x: 148,
                y: 210
            },
            {
                type: 'a4',
                title: 'DIN A4',
                x: 210,
                y: 297
            },
            {
                type: 'a3',
                title: 'DIN A3',
                x: 297,
                y: 420
            },
            {
                type: 'a2',
                title: 'DIN A2',
                x: 420,
                y: 594
            },
            {
                type: 'us_letter',
                title: 'US - Letter',
                x: 216,
                y: 279
            }
        ],
        sizeUnit: [
            {
                type: 'inch',
                title: 'Inch',
                value: 24.5
            },
            {
                type: 'cm',
                title: 'cm',
                value: 10
            },
            {
                type: 'mm',
                title: 'mm',
                value: 1
            }
        ]
    }
}]);
dpicalApp.controller("mainController", ["$scope", "dpiServices", function($scope, dpiServices) {
    $scope.defaultDPI = 96;
    //Some common sizes
    $scope.commonSizes = dpiServices.commonSizes;
    $scope.sizeUnit = dpiServices.sizeUnit;
    $scope.selectedSize = $scope.commonSizes[0];
    $scope.selectedSizeUnit = $scope.sizeUnit[0];
    $scope.resultSizeX = function() {
        //mm = (pixels * 25.4) / dpi
        //pixels = (mm * dpi) / 25.4
        var xPixel;
        switch($scope.selectedSizeUnit.type) {
            case 'inch':
                xPixel = parseFloat($scope.selectedSize.x * $scope.defaultDPI);
                break;
            case 'cm':
                xPixel = parseFloat($scope.selectedSize.x * $scope.defaultDPI / 25.4) * 10;
                break;
            case 'mm':
                xPixel = parseFloat($scope.selectedSize.x * $scope.defaultDPI / 25.4);
                break;
        }
        if(xPixel) {
            return Math.round(xPixel);
        }
        return '';
    }
    $scope.resultSizeY = function() {
        var yPixel;
        switch($scope.selectedSizeUnit.type) {
            case 'inch':
                yPixel = parseFloat($scope.selectedSize.y * $scope.defaultDPI);
                break;
            case 'cm':
                yPixel = parseFloat($scope.selectedSize.y * $scope.defaultDPI / 25.4) * 10;
                break;
            case 'mm':
                yPixel = parseFloat($scope.selectedSize.y * $scope.defaultDPI / 25.4);
                break;
        }
        if(yPixel) {
            return Math.round(yPixel);
        }
        return '';
    }
}]);
dpicalApp.controller("outputSizeController", ["$scope", "dpiServices", function($scope, dpiServices) {
    $scope.defaultDPI = 96;
    //Some common sizes
    $scope.commonSizes = dpiServices.commonSizes;
    $scope.imageWidth = 0;
    $scope.imageHeight = 0;
    $scope.outputWidth = function() {
        //mm = (pixels * 25.4) / dpi
        //pixels = (mm * dpi) / 25.4
        var sizeInCM = parseFloat($scope.imageWidth * 2.54 / $scope.defaultDPI),
            sizeInMM = sizeInCM * 10,
            sizeInInch = $scope.imageWidth / $scope.defaultDPI;
        if(sizeInCM) {
            return {
                mm: sizeInMM.toFixed(2),
                cm: sizeInCM.toFixed(2),
                inch: sizeInInch.toFixed(2)
            }
            //return size.toFixed(1);
        }
        return '';
    }
    $scope.outputHeight = function() {
         var sizeInCM = parseFloat($scope.imageHeight * 2.54 / $scope.defaultDPI),
            sizeInMM = sizeInCM * 10,
            sizeInInch = $scope.imageHeight / $scope.defaultDPI;
        if(sizeInCM) {
            return {
                mm: sizeInMM.toFixed(2),
                cm: sizeInCM.toFixed(2),
                inch: sizeInInch.toFixed(2)
            }
            //return size.toFixed(1);
        }
        return '';
    }
}]);