app.controller('StaffController', function(){
  var vm = this
  vm.name = ""
  vm.email = "samsepi0l@ecorp.com"
  vm.phone = ""

  vm.changeName = function(name){
    vm.name = name
  }

})