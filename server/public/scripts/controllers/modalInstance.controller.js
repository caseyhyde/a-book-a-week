myApp.controller('ModalCtrl', ['$uibModalInstance', 'BookFactory', function ($uibModalInstance, BookFactory) {
  var self = this;

  self.close = function () {
    $uibModalInstance.close();
  };

  self.bookSearch = function() {
    console.log("Book To Search For: ", self.bookToSearchFor);
    BookFactory.bookSearch(self.bookToSearchFor)
    .then(function(response) {
      console.log("Response back from BookFactory");
      self.books = BookFactory.bookData();
      console.log("Books from BookFactory: ", self.books);
    });
  };

  self.selectBook = function(index) {
    self.close();
    self.selectedBook = {
      title: self.books[index].volumeInfo.title,
      author: self.books[index].volumeInfo.authors[0],
      pages: self.books[index].volumeInfo.pageCount,
      book_start_date: new Date(),
      book_thumbnail: self.books[index].volumeInfo.imageLinks.thumbnail,
      isbn: self.books[index].volumeInfo.industryIdentifiers[0].identifier
    }
    BookFactory.addSelectedBook(self.selectedBook)
    .then(function(response) {
      console.log("Promise resolved");
      self.books = [];
    })
  }
}]);