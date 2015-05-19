module.exports = function(shipit) {
    require('shipit-deploy')(shipit);

    shipit.initConfig({
        default: {
            workspace: '/tmp/shipit-workspace',
            deployTo: '/var/repo',
            repositoryUrl: 'https://github.com/kjbrum/wp-shipit',
            ignores: ['.git', 'node_modules'],
            keepReleases: 5
        },

        // Staging environment.
        staging: {
            servers: ['104.131.18.211']
        }
    });

    shipit.task('pwd', function () {
        return shipit.remote('ls -al /var/');
    });
};