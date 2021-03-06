myApp.controller('ProgressUpdateController', ['$uibModalInstance', 'BookFactory', 'UserFactory', function ($uibModalInstance, BookFactory, UserFactory) {
  var self = this;

  self.close = function () {
    $uibModalInstance.close();
  };


  //Close modal, update page number in modal, and update page number in database
  self.updatePage = function() {
    $uibModalInstance.close(self.updatedPageNumber);
    console.log("Book factory current book: ", BookFactory.currentBook);
    self.updatePageNumber = {
      updatedPageNumber: Number(self.updatedPageNumber)
    }
    console.log(self.updatePageNumber.updatedPageNumber);
    UserFactory.getCurrentUser()
    .then(function(user) {
      BookFactory.updateProgress(self.updatePageNumber, user);
    });

  }


}]);
