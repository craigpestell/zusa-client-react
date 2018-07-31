const path = require('path');

module.exports = function override(config, env){
	
	require('react-app-rewire-postcss')(config, {
     plugins: loader => [
      require('postcss-preset-env')()
    ]
  });
console.log(config.module.rules);
	config.entry.splice(config.length-2, 0, 
		path.join(__dirname, 'node_modules', 'bootstrap-loader', 'loader'))
	return config;
}
