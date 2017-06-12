/**
 *
 * @author Jefferson Lara <jetox21@gmail.com>
 */
'use strict'
let config = require('../config/auth'),
    $instances,
    oauthserver = require('oauth2-server');
class Auth{

    constructor(){
        if(!$instances){
            let model = require('../'+config.model);

            this._oauth = oauthserver({
                model: model, // See below for specification
                grants: config.grants,
                debug: config.debug,
                accessTokenLifetime:config.accessTokenLifetime
            });
            $instances = this;
            return $instances;
        }else{
            return $instances;
        }
    }
    get oauth(){
        return $instances._oauth;
    }
}
let O = new Auth();
module.exports = O.oauth;