app.controller('ContactController', function(){
  var vm = this
  vm.name = "samsepi0l"
  vm.email = ""
  vm.phone = ""

  vm.changeName = function(name){
    vm.name = name
  }

})