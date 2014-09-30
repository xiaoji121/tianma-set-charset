'use strict';

function test(rule, path) {
    return rule && rule.test(path);
}

/**
 * Filter factory.
 * @return {Function}
 */
module.exports = function (options) {
    options = options || {};

    return function(req, res) {
        var path = req.path;
        var rules = options.rules;

        for (var i = 0, l = rules.length; i < l; i++) {
            var rule = rules[i];

            rule = typeof rule === 'string' ? new RegExp(rule) : rule;

            if (test(rule, path)) {
                res.charset(options.charset || 'utf-8');
                break;
            }
        }

        req(res);
    }
};
