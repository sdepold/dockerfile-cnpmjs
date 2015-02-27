module.exports = {
    debug: false,
    enableCluster: true, // enable cluster mode
    bindingHost: '0.0.0.0',
    logdir: "/var/log/cnpmjs",
    nfs: null, //use your own CND here
    enablePrivate: true, // enable private mode, only admin can publish, other use just can sync package from source npm
    admins: {
      admin: 'anthony@contentful.com',
    },
    syncModel: 'exist'
  };
