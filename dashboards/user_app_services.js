var interpolation = "bias"
var period = 5
var refresh = 5000
var metrics =
[
  {
    "target": "stats.timers.user_app.production.redis.query_time.mean",
    "alias" : "Redis query time",
    "warning" : 2500,
    "critical" : 5000,
    "unit"  : "ms"
  },
  {
    "target": "stats.timers.user_app.production.moped.query_time.mean",
    "alias" : "Mongo query time",
    "warning" : 500,
    "critical" : 1000,
    "unit"  : "ms"
  },
  {
    "target": "stats.user_app.production.moped.find",
    "alias" : "Moped finds"
  },
  {
    "target": "stats.user_app.production.moped.save",
    "alias" : "Moped saves"
  },
  {
    "target": "stats.timers.user_app.production.elastic_search.index.update_duration.mean",
    "alias" : "Search update duration",
    "warning" : 500,
    "critical" : 1000,
    "unit": "ms"
  },
  {
    "target": "stats.user_app.production.elastic_search.index.updated",
    "alias" : "Search index updated"
   }
];
