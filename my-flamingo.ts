import Promise = require('bluebird');
import Hapi = require('hapi');
import url = require('url');
import nodeStream = require('stream');
import Route = require('flamingo/src/model/route');
import ImageStream = require('flamingo/src/mixins/image-stream');
import ProfileOperation = require('flamingo/src/mixins/profile-operation');
import Convert = require('flamingo/src/mixins/convert');
import Config = require('flamingo/config');
import sharp = require('sharp');
import FlamingoOperation = require('flamingo/src/model/flamingo-operation');
import errors = require('flamingo/src/util/errors');
import Profile from 'flamingo/src/types/Profile';
import {ReaderResult} from 'flamingo/src/types/ReaderResult';
import Server = require('flamingo/src/model/server');
import AddonLoader = require('flamingo/src/addon/loader');
import IndexRoute = require('flamingo/src/routes/index');
import ImageRoute = require('flamingo/src/routes/image');

const { InvalidInputError } = errors;

function buildRoutes(config: Config) {
  return [
    //new IndexRoute(config),
    //new ImageRoute(config),
	new ImageRoute(config, 'GET', '/image/{url}', 'Image metadata conversion')
  ];
}

function buildProfiles(config: Config) {
  return [
    require('flamingo/src/profiles/examples')
  ].filter(Boolean);
}
  
Config.fromEnv().then(config => {
  return new Server(config, new AddonLoader(__dirname, {}).load())
    .withProfiles(buildProfiles(config))
    .withRoutes(buildRoutes(config))
    .start()
    .then(server => console.log(`server running at ${server.hapi.info.uri}`));
});