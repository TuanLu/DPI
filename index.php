<html>
	<head>
		<title>DPI - Pixel Converter: Calculation of Print Resolution</title>
        <link href="css/bootstrap.min.css" rel="stylesheet"/>
        <script type="application/javascript" src="js/angular.js"></script>
        <script type="application/javascript" src="js/app.js"></script>
	</head>
	<body ng-app="dpicalApp">
		<div class="container-fluid"> 
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title" style="text-align: center;">Calculation of Print Resolution.</h3>
                </div>
                <div class="panel-body">
                    <div class="row">
                        <div class="col-md-6" ng-controller="mainController">
                            <div class="panel panel-info">
                                <div class="panel-heading">
                                    <h3 class="panel-title">Calculation of Pixels Required </h3>
                                </div>
                                <div class="panel-body">
                                    <table class="table">
                                        <tr>
                                            <td>Size Unit</td>
                                            <td>
                                                <select ng-model="selectedSizeUnit" ng-options="size.title for size in sizeUnit"></select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Requested output size: (in <b>{{selectedSizeUnit.title}}</b>)</td>
                                            <td>
                                                <input size="5" ng-disabled="selectedSize.type != 'manual'" name="request_x" ng-model="selectedSize.x" type="text"/> x <input size="5" ng-disabled="selectedSize.type != 'manual'" name="request_y" ng-model="selectedSize.y" type="text"/>
                                                <!--
                                                Resp
                                                <select ng-model="selectedSize" ng-options="size.title for size in commonSizes"></select>-->
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Requested print resolution:</td>
                                            <td>
                                                <input size="5" name="request_dpi" ng-model="defaultDPI" type="text"/> DPI
                                            </td>
                                        </tr>
                                         <tr>
                                            <td>Required pixels for the chosen settings:</td>
                                            <td>
                                                <input size="5" name="result_x" value="{{resultSizeX()}}" type="text" disabled/> x <input size="5" name="result_y" value="{{resultSizeY()}}" type="text" disabled/> (in <b>pixel</b>)
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                            <div class="row" style="display: none;">
                                <div class="col-md-12">
                                    <div class="panel panel-default" ng-if="resultSizeX()">
                                        <div style="border: 1px solid red; width: {{resultSizeX() || 0}}px; height: {{resultSizeY() || 0}}px; margin: 10px auto; text-align: center;">
                                            <span>Preview Size</span>
                                        </div>
                                    </div>  
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6" ng-controller="outputSizeController">
                            <div class="panel panel-info">
                                <div class="panel-heading">
                                    <h3 class="panel-title">Calculation of Output Size</h3>
                                </div>
                                <div class="panel-body">
                                    <table class="table">
                                        <tr>
                                            <td>Pixel dimensions of image</td>
                                            <td>
                                                <input size="5" name="image_w" ng-model="imageWidth" type="text"/> x <input size="5" name="image_h" ng-model="imageHeight" type="text"/>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Requested print resolution:</td>
                                            <td>
                                                <input size="5" name="request_dpi" ng-model="defaultDPI" type="text"/> DPI
                                            </td>
                                        </tr>
                                         <tr>
                                            <td>Output size when printed with the chosen dpi settings</td>
                                            <td>
                                                <p>
                                                    <input size="5" name="output_w" value="{{outputWidth().inch}}" type="text" disabled/> x <input size="5" name="output_y" value="{{outputHeight().inch}}" type="text" disabled/> <b>inch</b>
                                                </p>
                                                <p>
                                                    <input size="5" name="output_w" value="{{outputWidth().cm}}" type="text" disabled/> x <input size="5" name="output_y" value="{{outputHeight().cm}}" type="text" disabled/> <b>cm</b>
                                                </p>
                                                <p>
                                                    <input size="5" name="output_w" value="{{outputWidth().mm}}" type="text" disabled/> x <input size="5" name="output_y" value="{{outputHeight().mm}}" type="text" disabled/> <b>mm</b>
                                                </p>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12" style="text-align: center;">
                            <a target="_blank" href="http://productsdesignercanvas.com">Product Designer Canvas</a>
                            <p><span>© Magebay 2015. All right reserved. </span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
	</body>
</html>