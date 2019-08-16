class Util {
   
  static reverse(str){
      if(str){
        return str.split('').reverse().join('');
      }
      return str;
  }


}


module.exports = Util;