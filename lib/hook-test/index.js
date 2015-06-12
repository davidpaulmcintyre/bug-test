module.exports = {
  name: 'hook-test',
  contentFor: function(type, config){
    console.log('HOOK NAME: ' + config);
    if (type === 'body-footer'){
      return 'this is the body footer content.  if it appears above the Welcome to Ember.js message then it is a bug, IMO';
    }
  },
  isDevelopingAddon: function() {
    return true;
  }
};
