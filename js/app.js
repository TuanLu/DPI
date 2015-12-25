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
        ]
    }
}]);
dpicalApp.controller("mainController", ["$scope", "dpiServices", function($scope, dpiServices) {
    $scope.defaultDPI = 96;
    //Some common sizes
    $scope.commonSizes = dpiServices.commonSizes;
    $scope.selectedSize = $scope.commonSizes[0];
    $scope.resultSizeX = function() {
        //mm = (pixels * 25.4) / dpi
        //pixels = (mm * dpi) / 25.4
        var xPixel = parseFloat($scope.selectedSize.x * $scope.defaultDPI) / 25.4;
        if(xPixel) {
            return Math.round(xPixel);
        }
        return '';
    }
    $scope.resultSizeY = function() {
        var yPixel = parseFloat($scope.selectedSize.y * $scope.defaultDPI) / 25.4;
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
        var size = parseFloat($scope.imageWidth * 25.4) / parseFloat($scope.defaultDPI);
        if(size) {
            return size.toFixed(1);
        }
        return '';
    }
    $scope.outputHeight = function() {
        var size = parseFloat($scope.imageHeight * 25.4) / parseFloat($scope.defaultDPI);
        if(size) {
            return size.toFixed(1);
        }
        return '';
    }
}]);