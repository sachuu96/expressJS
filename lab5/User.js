var user = function(fname,lname,bday,id){
    this.fname=fname;
    this.lname=lname;
    this.bday=bday;
    this.id=id;
}

//to use this object inside another js file your have to export this
module.exports=user;