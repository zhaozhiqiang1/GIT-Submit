class Search {
   get:function (...age) {
      return [...age]
   }
   set:function (value) {
      this.value = value
   }	
}
const sch = new Search;
