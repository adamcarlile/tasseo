var interpolation = "monotone"
var metrics =
[
  {
    "target": "stats.user_app.production.api.silo.hit",
    "alias" : "Silo cache hit",
    "transform" : function(value) {
      return value * 10
    },
    "unit" : "/sec"
  },
  {
    "target": "stats.user_app.production.api.silo.miss",
    "alias" : "Silo cache miss",
    "transform" : function(value) {
      return value * 10
    },
    "unit" : "/sec"
  },
  {
    "target": "stats.user_app.production.elastic_search.index.updated",
    "alias" : "Search index updated",
    "transform": function(value) {
      return value * 10
    },
    "unit" : "/sec"
   },
  {
    "target": "stats.user_app.production.elastic_search.index.removed",
    "alias" : "Search index removed",
    "transform": function(value) {
      return value * 10
    },
    "unit" : "/sec"
  },
  {
    "target": "stats.timers.user_app.production.elastic_search.index.update_duration.mean",
    "alias" : "Search update duration",
    "warning" : 100,
    "critical" : 500,
    "unit": "ms"
  },
  {
    "target": "stats.timers.user_app.production.redis.query_time.mean",
    "alias" : "Redis query time",
    "warning" : 200,
    "critical" : 500,
    "unit"  : "ms"
  },
  {
    "target": "stats.timers.user_app.production.moped.query_time.mean",
    "alias" : "Mongo query time",
    "warning" : 100,
    "critical" : 200,
    "unit"  : "ms"
  },
  {
    "target": "stats.user_app.production.moped.find",
    "alias" : "Moped finds",
    "unit"  : "/sec"
  },
  {
    "target": "stats.user_app.production.moped.save",
    "alias" : "Moped saves",
    "unit"  : "/sec"
  }
];
