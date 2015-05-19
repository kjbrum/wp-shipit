var pkg = require('./package.json');

module.exports = function (grunt) {
    /**
     * Initialize config
     */
    grunt.initConfig({
        shipit: {
            options: {
                workspace: '/tmp/shipit-workspace',
                deployTo: '/var/repo',
                repositoryUrl: pkg.repository.url,
                ignores: ['.git', 'node_modules'],
                keepReleases: 5
            },

            // Staging environment.
            staging: {
                servers: ['104.131.18.211']
            }
        }
    });

    /**
     * Load shipit task
     */
    grunt.loadNpmTasks('grunt-shipit');
    grunt.loadNpmTasks('shipit-deploy');

    grunt.registerTask('pwd', function () {
        grunt.shipit.remote('ls -al /var', this.async());
    });
};