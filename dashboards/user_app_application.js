var interpolation = "bias"
var period = 5
var refresh = 5000
var metrics =
[{
    "target" : "sumSeries(stats.user_app.production.rails.action_controller.error,stats.user_app.production.rails.action_controller.success)",
    "alias"  : "Controller hits"
  },
  {
    "target" : "stats.timers.user_app.production.rails.action_controller.duration.mean",
    "alias"  : "Rendering duration",
    "unit"   : "ms"
  },
  {
    "target" : "asPercent(stats.user_app.production.rails.action_controller.500,sumSeries(stats.user_app.production.rails.action_controller.error,stats.user_app.production.rails.action_controller.success))",
    "alias"  : "Error rate",
    "unit"   : "%"
  },
  {
    "target": "stats.user_app.production.api.silo.hit",
    "alias" : "Silo cache hit"
  },
  {
    "target": "stats.user_app.production.api.silo.miss",
    "alias" : "Silo cache miss"
  }
]
