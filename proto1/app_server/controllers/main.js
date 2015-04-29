var renderMainpage = function(request,response){
  response.render('index',{
    title: 'Home page',
    pageHeader: {
      title: 'CPD software',
      strapline: 'Control CPD points of your team'
    }
  });  
};

module.exports.index = function(request,response){
  renderMainpage(request,response);
};