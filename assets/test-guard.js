// Added to every test page when the site is published. Sends visitors back to the
// Portfolio page unless they have signed in to the Test area in the last 12 hours.
(function(){
  try{ var t=+localStorage.getItem('krd-test-ok'); if(t && Date.now()-t<12*3600*1000) return; }catch(e){}
  location.replace('/portfolio.html#test-area');
})();
