var app=angular.module('aa',[]);
app.controller('bb',['$scope',function($scope){
	$scope.yanse=[
		'red',
		'yellow',
		'blue',
		'green',
		'orange',
		'zise'
	]
    $scope.shuju=[];
	$scope.renwu="aaa";
	$scope.neirong="";
	$scope.save=function(){
		localStorage.aaa=JSON.stringify($scope.shuju);
	}
	if(localStorage.aaa){
		$scope.shuju=JSON.parse(localStorage.aaa);
	}else {
		$scope.shuju=[];
	}
    $scope.add=function(i){
	var l = $scope.shuju.length;
	var ida;
	if(!$scope.shuju.length){
		ida=1;
	}else {
		ida=$scope.shuju.length+1;
	}
	var lis={id:ida,name:"新列表"+(ida),yanse:$scope.yanse[l%6],wancheng:false,
	tudu:[


	]
	};
	$scope.shuju.push(lis);

}
	$scope.zhuan=function(){
		$('.jiao').toggleClass('zhuan');
	}
	$scope.tianjia=function(id){
		var idb;
		if(!$scope.shuju[id-1].tudu.length){
			idb=1;
		}else {
			idb=$scope.shuju[id-1].tudu.length+1;
		}
     $scope.shuju[id-1].tudu.push(
		 {id:idb,name:$scope.neirong,fin:true}
	 )

	}
	$scope.del=function(idf){
		var arr=[];
		for(i=0;i<$scope.shuju.length;i++){
			if(idf!==$scope.shuju[i].id){
             arr.push($scope.shuju[i]);
			}
		}
		$scope.shuju=arr;
		console.table(arr)
		$scope.younei=$scope.shuju[0];
	}
	$scope.dell=function(idf){
		var arr=[];
		for(i=0;i<$scope.younei.tudu.length;i++){
			if(idf!==$scope.younei.tudu[i].id){
				arr.push($scope.younei.tudu[i]);
			}
		}
		$scope.younei.tudu=arr;
	}
	$scope.hjhj=function(){
	return $('.lili').length;
	}
	$scope.hjian=function(){
		var bb=$('.lili').length-1;
		$('.ywc').text('已完成'+bb+'项');
	}
	$scope.guandiao=function(){
		if($scope.shuju.length===0){
			$scope.xianshi=false;
		}
	}
	$scope.younei=$scope.shuju[0];
	//$scope.yt=$scope.shuju[0].tudu;
    $scope.huan=function(id){
				$scope.younei=$scope.shuju[id];

	}
}])
//$(function(){
//	$('.neirong li').on('click',function(){
//		$('.gaizi').css({display:'none'});
//		$(this).find('.gaizi').css({display:'block'});
//	})
//})