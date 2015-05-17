"use strict";

module.exports = function(){

    var dao     = new app.dao.user()
    ,   json    = new app.views.json()
    ,   query   = app.utils.mongoose.query;

    return {
        list: function (req, res, next) {
            var input = query(req.query);

            dao.list(
                input.query, input.fields, input.projection
            ).then(function(data){
                json.standard(data, res);
            }).catch(next);
        },
        me: function(req, res){
            json.standard(req.user, res);
        },
        create: function(req, res, next){
            dao.create(req.body).then(function(data){
                json.standard(data, res);
            }).catch(next);
        }
    };

};
