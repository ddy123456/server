app.directive('service', function () {
    return {
        restrict: 'EA',
        templateUrl: './App/View/template/service.html',
        link: function (scope, ele, attr) {
            //¬÷≤•
            setTimeout(function () {
                var banner = new Swiper('.banner',{
                    pagination:".swiper-pagination",
                    autoplay: 1000,
                    loop:true
                });
            },0)
            //º”‘ÿ

        }
    }
});