var renderCPDpage = function(request,response){
  response.render('cpd',{pageHeader: 'cpd explained'});  
};

module.exports.cpd = function(request,response){
  renderCPDpage(request,response);
};